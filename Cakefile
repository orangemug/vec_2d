fs     = require 'fs'
{exec} = require 'child_process'
util   = require 'util'

srcCoffeeDir     = '.'
targetJsDir      = 'build'
targetCoffeeDir  = 'build'
targetFileName   = 'vec_2d'
targetCoffeeFile = "#{targetCoffeeDir}/#{targetFileName}.coffee"
targetJsFile     = "#{targetJsDir}/#{targetFileName}.js"
coffeeOpts       = " --output #{targetJsDir} --compile #{targetCoffeeFile}"


# Files to build 
coffeeFiles = [
    'vec_2d'
]


task 'build', 'Build a single javascript file', ->
    util.log "Building #{targetJsFile}"
    appContents = new Array remaining = coffeeFiles.length
    util.log "Appending #{coffeeFiles.length} files to #{targetCoffeeFile}"

    for file, index in coffeeFiles then do (file, index) ->
        fs.readFile "#{srcCoffeeDir}/#{file}.coffee"
                  , 'utf8'
                  , (err, fileContents) ->
            util.log err if err

            appContents[index] = fileContents
            util.log "[#{index + 1}] #{file}.coffee"
            process() if --remaining is 0

    process = ->
        fs.writeFile targetCoffeeFile
                   , appContents.join('\n\n')
                   , 'utf8'
                   , (err) ->
            util.log err if err

            exec "coffee #{coffeeOpts}", (err, stdout, stderr) ->
                util.log err if err
                message = "Compiled #{targetJsFile}"
                util.log message
                fs.unlink targetCoffeeFile, (err) -> util.log err if err


task 'minify', 'Minify the javascript', ->
  command = "java -jar 'build/tools/yuicompressor-2.4.6.jar' -o #{targetJsDir}/#{targetFileName}.min.js #{targetJsDir}/#{targetFileName}.js"
  util.log "Running command: #{command}"
  exec command, (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

