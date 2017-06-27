#!/bin/bash

SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED='for |if |import'
OPERATOR='\!|\!=|%|%=|&|&&|&=|\|\||\(|\[|\*|;|{|\[|\*|\*=|\+|\+\+|\+=|,|-|--|-=|=>|\.|/|/=|:|<|<=|=|==|>|>=|\?|\||=&'
COMMENTS='^ *//|^ */\*\*|^ *\*|^ *<\!--'
FUNCS='function |=> {|[a-z]+\\(.*\\)|'
SPECIALS='import'

PATTERN="$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR"
EXCEPTIONS="$COMMENTS|$FUNCS|$SPECIALS"

echo "File $1"
echo "no filtering:" 
egrep -o "$PATTERN" $1 | sort -n | uniq -c
echo
echo "with filtering:"
#egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c 
egrep -v "$EXCEPTIONS" $1
echo
echo "exceptions filter:"
egrep -o "$EXCEPTIONS" $1 | sort -n | uniq -c
echo
echo "grep COMMENTS:"
egrep "$COMMENTS" $1
echo
echo "grep FUNCS:"
egrep "$FUNCS" $1
echo
echo "grep SPECIALS:"
egrep "$SPECIALS" $1
echo
echo "grep EXCEPTIONS:"
egrep "$EXCEPTIONS" $1
echo
