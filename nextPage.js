class doctor{
    constructor(lastname, firstname, spec, info){
        this.lastname = lastname;
        this.firstname = firstname;
        this.spec = spec;
        this.info = info;

        function printDoc(doc){
            document.write("<h4>" + this.lastname + " " + this-firstname + "</h4>");
            document.write("<h5>Area(s) of Specialization:<br>" + this.spec + "</h5>"+ "<br>");
            document.write("<h5>" + this.info + "</h5>");

        }
    }
}

var doc1 = new doctor("Bloomberg", "Mark", "Psycologist", "Mark is a psycologist who studied at oxford university");
var doc2 = new doctor("Bloomberg", "Mark", "Psycologist", "Mark is a psycologist who studied at oxford university");
var doc3 = new doctor("Bloomberg", "Mark", "Psycologist", "Mark is a psycologist who studied at oxford university");
