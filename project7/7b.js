function CheckDir(Fpath)
{
    const fs = require('fs');



    fs.watch(Fpath, "utf-8",function (event,trigger)
    {
        console.log("There was a "+event+" on a: "+trigger);
        if(String(event)==="change")
        {
            var tempfile=Fpath+"\\"+trigger;
            fs.readFile(tempfile, 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }
                console.log(data);
            });

        }

    })
}

const Fpath="C:\\Users\\PC\\Pictures";

CheckDir(Fpath);
