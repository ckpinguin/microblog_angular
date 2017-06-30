#!/bin/bash

# Optimized for angular/typescript!

RESERVED='if |for |while |do '

PATTERN="$RESERVED"

COMMENTS='^ *//|^ */\*\*|^ *\*|^ *<\!--'
SPECIALS='^import '

EXCEPTIONS="$COMMENTS|$SPECIALS"


echo "File: $1"
echo "-----------------------------"

echo "with filtering:"
echo "==============="
egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c
echo -n "Total nodes (first run): "
n=`egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c | awk '{print $1}' | paste -sd+ | bc`
echo
echo -n "n and e for $1: "
let n=n+0
let totaln=$n
let totale=$n*2
echo "$totaln : $totale"
echo
echo
# for verbosity just add a `v` as second argument
if [ "$2" == "v" ]; then
    echo "no filtering:"
    echo "============="
    ack "$PATTERN" $1
    echo
    echo "exceptions filter:"
    echo "=================="
    ack "$EXCEPTIONS" $1
    echo
    echo "COMMENTS:"
    echo "=============="
    ack "$COMMENTS" $1
    echo
fi
