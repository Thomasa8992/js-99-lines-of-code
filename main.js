var friends = ['Dylan', 'JB', 'Greg', 'Justin', 'Chris'];
// var dylan = friends[0];
// var jb = friends[1];
// var greg = friends[2];
// var justin = friends[3];
// var chris = friends[4];


// for (var i = 0; i < friends.length; i++){
//     console.log(friends[i]+":");
//     for (var j = 99; j > 2; j--){
//         console.log(j + " lines of code in the file " + j +  " lines of code; " + friends[i] + " strikes one out, clears it all out, " + [j-1] + ' lines of code in the file,');
//     } 
//     if (j = 2) {
//         console.log('2 line of code in the file, 2 line of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file,');
//         console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more line of code in the file.');
//     }
// }

// for (var i = 0; i < friends.length; i++){
//     console.log(friends[i]+":");
//         for (var j = 99; j > 1; j--){
//             if (j > 2) {
//             console.log(j + " lines of code in the file " + j +  " lines of code; " + friends[i] + " strikes one out, clears it all out, " + [j-1] + ' lines of code in the file,');
//             }else if (j > 1) {
//             console.log('2 lines of code in the file, 2 lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file,');
//             console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
//         }
//     }
// }       

for (var i = 0; i < friends.length; i++){
    console.log(friends[i]+":");
        for (var j = 99; j > 1; j--){
            if (j >= 3){
            console.log(j + " lines of code in the file " + j +  " lines of code; " + friends[i] + " strikes one out, clears it all out, " + [j-1] + ' lines of code in the file,');
            } else if (j === 2) {
            console.log('2 lines of code in the file, 2 lines of code; ' + friends[i] + ' strikes one out, clears it all out, 1 line of code in the file,');
            console.log('1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
        }
    }
}   



