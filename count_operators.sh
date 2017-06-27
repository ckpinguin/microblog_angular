#!/bin/bash

SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED='for |if |import'
OPERATOR='\!|\!=|%|%=|&|&&|&=|\|\||\(|\[|\*|;|{|\[|\*|\*=|\+|\+\+|\+=|,|-|--|-=|=>|\.|/|/=|:|<|<=|=|==|>|>=|\?|\||=&'
COMMENTS='^ *//|^ */\*\*|^ *\*|^ *<\!--'
FUNCS='function |=> {|[a-z]+\\(.*\\)|'
SPECIALS='import'

PATTERN="$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR"
EXCEPTIONS="$COMMENTS|$SPECIALS"

echo "File $1"
echo "without filtering out:" 
egrep -o "$PATTERN" $1 | sort -n | uniq -c
echo
echo "with filtering:"
egrep -v "$SPECIALS" $1 | egrep -o "$PATTERN" | sort -n | uniq -c 
echo
echo "comments filter alone:"
egrep -o "$COMMENTS" $1
echo
echo
