function calcGrade(){
    const score = [], grade = [];
    let totalGrade = 0.0, avgGrade;
    score.push(parseFloat(document.form1.scr_1.value));
    score.push(parseFloat(document.form1.scr_2.value));
    score.push(parseFloat(document.form1.scr_3.value));
    score.push(parseFloat(document.form1.scr_4.value));

    for(let i = 0; i < score.length; i++){
        totalGrade += score[i];
        if(score[i] > 100.0){
            alert("Invalid Score entered!");
            return;
        }
        else if(score[i] >= 90.0){
            grade.push('A');
        }else if(score[i] >= 80){
            grade.push('B');
        }else if(score[i] >= 70){
            grade.push('C');
        }else if(score[i] >= 65){
            grade.push('D');
        }else{
            grade.push('F');
        }
    }
   
    avgGrade = totalGrade/score.length;
    document.form1.grd_1.value = grade[0];
    document.form1.grd_2.value = grade[1];
    document.form1.grd_3.value = grade[2];
    document.form1.grd_4.value = grade[3];
    document.form1.avg.value = avgGrade.toFixed(2);
}