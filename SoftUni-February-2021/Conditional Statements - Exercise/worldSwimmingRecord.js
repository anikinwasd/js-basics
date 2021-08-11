function worldSwimmingRecord(input){
    let theRecordInSeconds = Number(input[0]);
    let theDistanceInMeters = Number(input[1]);
    let theTimeInSecondsForWhichADistanceOf1MFloats = Number(input[2]);

    let ivanHasToSwim = theDistanceInMeters * theTimeInSecondsForWhichADistanceOf1MFloats;
    let add = Math.floor(theDistanceInMeters / 15)
    let finalAdd = add * 12.5;
    let totalTime = ivanHasToSwim + finalAdd;

    let final = Math.abs(totalTime - theRecordInSeconds);

    if (theRecordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${final.toFixed(2)} seconds slower.`)
    }
    

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])



