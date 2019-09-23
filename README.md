# nodejs simple file generator

The is a project that I made for just one blog post on my site here at github pages. The goal here was to make a very simple file generator that just accepts a path and data that is then used to write a file at the path. There is more to it then that but I do not want to make the project to complicated as this project is part of what might be a collection of projects aimed at just getting to the core of a problem and being done with it.

So the project just needs to

* provide a method that accepts a path and data
* creates the path if it is not there.
* writes the given data at the given path
* returns a promise and will not resolve in the event that certain errors happen in the process of this

That is it beyond that I just need to also

* have a few simple use case examples