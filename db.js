var db = [{}]


export const addToDb = (user) => {
    console.log("db", user)
    if(user.password == user.confirmPassword){
        db.push(user)
        return true;
    }
    return false;
}

export const isUserCorrect = (email, password) => {
    let foundUser = db.find(user => user.email == email);
    console.log(db)
    if(foundUser && foundUser.password == password){
        console.log("yes")
        return true
    }
    return false
}
