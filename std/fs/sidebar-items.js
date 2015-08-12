initSidebarItems({"fn":[["canonicalize","Returns the canonical form of a path with all intermediate components normalized and symbolic links resolved."],["copy","Copies the contents of one file to another. This function will also copy the permission bits of the original file to the destination file."],["create_dir","Creates a new, empty directory at the provided path"],["create_dir_all","Recursively create a directory and all of its parent components if they are missing."],["hard_link","Creates a new hard link on the filesystem."],["metadata","Given a path, query the file system to get information about a file, directory, etc."],["read_dir","Returns an iterator over the entries within a directory."],["read_link","Reads a symbolic link, returning the file that the link points to."],["remove_dir","Removes an existing, empty directory."],["remove_dir_all","Removes a directory at this path, after removing all its contents. Use carefully!"],["remove_file","Removes a file from the filesystem."],["rename","Rename a file or directory to a new name."],["set_file_times","Changes the timestamps for a file's last modification and access time."],["set_permissions","Changes the permissions found on a file or a directory."],["soft_link","Creates a new symbolic link on the filesystem."],["symlink_metadata","Query the metadata about a file without following symlinks."],["walk_dir","Returns an iterator that will recursively walk the directory structure rooted at `path`."]],"struct":[["DirBuilder","A builder used to create directories in various manners."],["DirEntry","Entries returned by the `ReadDir` iterator."],["File","A reference to an open file on the filesystem."],["FileType","An structure representing a type of file with accessors for each file type."],["Metadata","Metadata information about a file."],["OpenOptions","Options and flags which can be used to configure how a file is opened."],["Permissions","Representation of the various permissions on a file."],["ReadDir","Iterator over the entries in a directory."],["WalkDir","An iterator that recursively walks over the contents of a directory."]],"trait":[["PathExt","Utility methods for paths."]]});