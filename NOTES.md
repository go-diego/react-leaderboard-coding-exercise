# Notes

I added a .env file to define `HOST` and `PORT` variables as I developed locally on a Windows machine.

For ease of development, I added two npm scripts

- `mystart` excludes the definition of `HOST` and `PORT` and avoids the `prestart` execution
- `mytest` avoids installing dependencies on `pretest` and just runs the tests locally. Again, variable definition was failing for me on Windows and I didn't want to install `cross-env` for this demo.
