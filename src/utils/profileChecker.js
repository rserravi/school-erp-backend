const profileCompletness = user => {
    let percent = 0;
    if (user.firstname) {percent+=4.5};
    if (user.lastname) {percent+=4.5};
    if (user.picture.firstname) {percent+=4.5};
    if (user.genre) {percent+=4.5};
    if (user.dni) {percent+=4.5};
    if (user.birthdate) {percent+=4.5};
    if (user.password) {percent+=4.5};
    if (user.email) {percent+=5};
    if (user.address) {percent+=4.5};
    if (user.phones) {percent+=4.5};
    if (user.social) {percent+=4.5};

    
    return percent

};

module.exports = {profileCompletness};