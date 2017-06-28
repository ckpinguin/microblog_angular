#!/bin/bash

# Optimized for angular/typescript!
SCSPEC='static'
SCSPEC_ACK='(static)'
TYPE_QUAL='const|let|private|protected|public'
TYPE_QUAL_ACK='(const)|(let)|(private)|(protected)|(public)'
RESERVED='@Component\(| if |else|import |break|case|class |continue|default|do|for |new\(|return|sizeof|switch |while |this|try|catch|throw|throws|finally|instanceof|interface |extends |implements |abstract |true|false'
RESERVED_ACK='(@Component\()| (if) |(else)|(import) |(break)|(case)|(class) |(continue)|(default)|(do)|(for) |(new\()|(return)|(sizeof)|(switch) |(while) |(this)|(try)|(catch)|(throw)|(throws)|(finally)|(instanceof)|(interface) |(extends) |(implements) |(abstract) |(true)|(false)'
#OPERATOR="(,)"
OPERATOR="\!|\!=|%|%=|&|&&|&=|\|\||\(|\[|\*|;|\{|\[|\*|\*=|\+|\+\+|\+=|,| -|--|-=|=>|[^']\.+|[^'].+/|/=|:|<|<=|=|==|>|>=|\?|\||=&"
OPERATOR_ACK="(,)|(\!)|(\!=)|(%)|(%=)|(&)|(&&)|(&=)|(\|\|)|(\()|(\[)|(\*)|(;)|(\{)|(\[)|(\*)|(\*=)|(\+)|(\+\+)|(\+=)| (-)|(--)|(-=)|(=>)|(?<!').*(\.+)|(?<!').+(\/)|(\/=)|(:)|(<)|(<=)|(=)|(==)|(>)|(>=)|(\?)|(\|)|(=&)"
COMMENTS='^ *//|^ */\*\*|^ *\*|^ *<\!--'
FUNCS='function |[a-z]+\(.+\) \{'
#SPECIALS='import'

PATTERN="$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR"
PATTERN_ACK="$SCSPEC_ACK|$TYPE_QUAL_ACK|$RESERVED_ACK|$OPERATOR_ACK"
EXCEPTIONS="$COMMENTS|$FUNCS"


echo "File: $1"
echo "-----------------------------"

#ack "$PATTERN" $1
#ack -c "$PATTERN" $1
echo "with filtering:"
echo "==============="
egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c
echo -n "Total operators N1: "
egrep -v "$EXCEPTIONS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c | awk '{print $1}' | paste -sd+ | bc
echo
echo "no filtering:"
echo "============="
egrep -o "$PATTERN" $1 | sort -n | uniq -c
echo -n "Total operators (unfiltered): "
egrep -o "$PATTERN" $1 | sort -n | uniq -c | awk '{print $1}' | paste -sd+ | bc
echo
if [ "$2" == "v" ]; then
    echo "using ack:"
    echo "=========="
    egrep -v "$EXCEPTIONS" $1 | ack "$PATTERN_ACK"
    echo
fi
echo "exceptions filter:"
echo "=================="
egrep -o "$EXCEPTIONS" $1 | sort -n | uniq -c
echo
echo "grep COMMENTS:"
echo "=============="
egrep "$COMMENTS" $1
echo
echo "grep FUNCS:"
echo "==========="
egrep "$FUNCS" $1
echo
# echo "grep SPECIALS:"
# echo "=============="
# egrep "$SPECIALS" $1
# echo
echo "grep EXCEPTIONS:"
echo "================"
egrep "$EXCEPTIONS" $1
echo
