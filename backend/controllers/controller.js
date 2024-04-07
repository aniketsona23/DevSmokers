const users = {"aniket.sonawane1734@gmail.com":"student","f20220031@goa.bits-pilani.ac.in":"faculty","f20221185@goa.bits-pilani.ac.in":"admin"}

function authenticate(email){
    if (email && users[email] ){
        return users[email]
    }else{
        return ""
    }
}

module.exports = {authenticate}