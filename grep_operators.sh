#!/bin/bash

SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED='for |if |import'
OPERATOR='\!|\!=|%|%=|&|&&|&=|\|\||\(|\[|\*|;'
#OPERATOR='{|\\[|\\*|\\*=|\\+|\\+\\+|\\+=|\\,|\\-|\\-\\-|\\-=|=>|\\.|/|/=|:|<|<=|=|==|>|>=|\\?|\\||=&'
COMMENTS='^ *//|^ */\\*\\*|^ *\\*|^ *<\\!--'
FUNCS='function |=> {|[a-z]+\\(.*\\)|'
SPECIALS='import'

PATTERN="$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR"
EXCEPTIONS="$COMMENTS|$SPECIALS"

egrep -o "$PATTERN" $1 | sort -n | uniq -c 
#egrep -o $PATTERN $1 | wc -l
