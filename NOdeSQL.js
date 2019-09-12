'use strict';
const fs = require('fs');

function NewModel(nfn)
{
    var turnLen = (nfn.length*8)+742;
    var File = fileText(nfn, turnLen);
    fs.writeFile(`db/${nfn}.js`,File,(err)=>
    {
        if(err){throw err}
        console.log(`DataBase was saved!`)
    })
}

function fileText(nfn, turnLen)
{
var File = 
`
const fs = require('fs');
\nfunction new_(obj)
{
  obj.id = countId;
  countId++;
  ${nfn}.push(obj)
}
\nfunction grabByID(id)
{
    return ${nfn}[id];
}
\nfunction grabAll()
{
    return ${nfn}
}
\nfunction deleteByID(id)
{
    ${nfn}.splice(id,1,"ʕง•ᴥ•ʔง");
}
\nfunction save()
{       
        var temp = JSON.stringify(grabAll());
        var toAp = "// this line acks as a buffer\\nvar countId ="+countId+";\\n var ${nfn}="+\`$\{temp}\`+";"
        fs.truncate('db/${nfn}.js',${turnLen}, (err) => {
            if (err) throw err;
            fs.appendFile('db/${nfn}.js', toAp ,(err) => {
                if (err) throw err;
            })
            
    })
}



\nmodule.exports =
{
new_,
grabByID,
grabAll,
deleteByID,
save,
}

//lines below will be overrided by save
// this line acks as a safety buffer

var countId = 1;
var ${nfn} = ["ʕง•ᴥ•ʔง"];
` ;

return File;
}





module.exports = 
{
NewModel,
}



