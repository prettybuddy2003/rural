const firebaseConfig = {
    apiKey: "AIzaSyA60Mip2MC9zlOXJcqGDD0vtRYTjV2nLas",
    authDomain: "formcontact-f7e74.firebaseapp.com",
    databaseURL: "https://formcontact-f7e74-default-rtdb.firebaseio.com",
    projectId: "formcontact-f7e74",
    storageBucket: "formcontact-f7e74.appspot.com",
    messagingSenderId: "996869514947",
    appId: "1:996869514947:web:4cf55f2a9b797974f12476",
    measurementId: "G-FHPM86PDFM"
  };

firebase.initializeApp(firebaseConfig);
var contactFormDB=firebase.database().ref('formcontact');
document.getElementById('contactForm').addEventListener('submit', submitform);

function submitform(e){
    
var name = getElementVal('name');
var name1 = getElementVal('name1');
var email = getElementVal('email');
var phone = getElementVal('phone');
var message = getElementVal('message');

saveMessage(name,name1,email,phone,message);
}

const saveMessage = (name, name1, email, phone, message) => {
    var newContactForm =contactFormDB.push();

    newContactForm.set({
        name: name,
        name1: name1,
        email:email,
        phone:phone,
        message:message
    });
}

const getElementVal =(id) =>{
    return document.getElementById(id).value;
}
