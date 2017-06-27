#!/bin/bash

SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED='for |if |import'
OPERATOR='\\!|\\!=|%|%=|&|&&|&=|\\|\\||\\(|{|\\[|\\*|\\*=|\\+|\\+\\+|\\+=|\\,|\\-|\\-\\-|\\-=|=>|\\.|/|/=|:|<|<=|=|==|>|>=|\\?|\\||=&'
COMMENTS='^ *//|^ */\\*\\*|^ *\\*|^ *<\\!--'
FUNCS='function |=> {|[a-z]+\\(.*\\)|'
SPECIALS='import'

PATTERN="/$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR/"
EXCEPTIONS="/$COMMENTS|$SPECIALS/"

# Print lines with hits (not counting hits inside the lines)
#gawk -v pat="$PATTERN" -v com="$COMMENTS" -v file="$1" '$0 ~ pat && $0 !~ com ' $1
# Print hits per line
#gawk -v pat="$PATTERN" -v com="$COMMENTS" -v file="$1" '{gsub(pat, HIT)} { print " => ", gsub(/HIT/,"")}' $1
#gawk -v pat="$PATTERN" -v ex="$EXCEPTIONS" -v file="$1" '$0 != ex { print; gsub(pat, "=>HIT"); print }' $1
gawk -v pat="$PATTERN" -v ex="$EXCEPTIONS" -v file="$1" '{ if (!match($0,ex)) { print; gsub(pat, "=>HIT"); print } }' $1

