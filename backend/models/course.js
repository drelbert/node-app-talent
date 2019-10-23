const fs = require('fs');
const path = require('path');

//Setting p as a global 
const p = path.join(
    path.dirname(process.mainModule.filename), 
   'data', 
   'courses.json'
   );

//Helper function 
const getCoursesFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
       if(err) {
           cb([]);
       } else {
           cb(JSON.parse(fileContent));
       }
    });
}

module.exports = class Course {
   constructor(title) {
        this.title = title;
   }

   //Save method
   save(){
       getCoursesFromFile(courses => {
         courses.push(this);
         fs.writeFile(p, JSON.stringify(courses), err => {
           console.log(err);
         });
       });
   }
   
   //Utility function
   static fetchAll(cb) {
    getCoursesFromFile(cb);
   }
};

