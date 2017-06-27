#!/bin/bash

SCSPEC='static'
TYPE_QUAL='const|let'
RESERVED="for |if "
OPERATOR='!|!='
COMMENTS='^ *//|^ */\\*\\*|^ *\\*|^ *<\\!--'

PATTERN="/$SCSPEC|$TYPE_QUAL|$RESERVED|$OPERATOR/"
#echo $PATTERN

#gawk -v pat="$PATTERN" -v com="$COMMENTS" '$0 !~ com && $0 ~ pat' $1
gawk -v pat="$PATTERN" -v com="$COMMENTS" '$0 ~ com' $1

#for i in `cat files.txt` ; do echo "`awk '(/if / || /while/ || /do {/ || /for / || /switch /) && !(/^ *\/\// || /^ *\/\*/ || /^\ *\*/ || /^\ *<\!--/) && !(/\/\/.+for/) && !(/else if/)' $i | wc -l`" ; done
#for i in `cat files.txt` ; do echo "`awk '(/else/ || /else if/ || /case / || /default:/) && !(/^ *\/\// || /^ *\/\*/ || /^\ *\*/ || /^\ *<\!--/) && !(/export default/ || /className=/)' $i | wc -l`" ; done
