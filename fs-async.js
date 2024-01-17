const {readFile, writeFile} = require('fs');

console.log('Start ...')
/*
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result ${first}\n${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return err
            }
            console.log('Done with this task');
        });
    })
})
console.log('Starting next task');
*/

const readFile1 = (path,format)=> new Promise((resolve,reject)=>{
    readFile(path,format,(err,data)=>{
        console.log('Done')
        return err ? reject(err) : resolve(data);
    })
})

const writeFile1 = (path,data)=> new Promise((resolve, reject)=>{
    writeFile(path,data,(err)=>{
        console.log('Done writing')
        return err ? reject(err) : resolve();
      })
})

Promise.all([readFile1('./content/first.txt','utf-8'),readFile1('./content/second.txt','utf-8')]).then((values)=>{
    console.log('Before writing on the file');
    writeFile1('./content/new.txt',`\n${values}`);
    console.log('Done')
})
