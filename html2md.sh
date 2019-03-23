mkdir docs/mds
md_p="./docs/mds/"
for f in ./docs/examples/*.html ; do html2md -i "$f" -o "$md_p$(basename -- "$f").md" ; done