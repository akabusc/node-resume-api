tarball_name=$(basename -- *.tgz .tgz);
tar xzf *.tgz 
cd package
zip -r "../$tarball_name.zip" .
cd ../
rm "$tarball_name.tgz"
rm -rd package