function show_pic() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'block';
    c3_elem.style.display = 'none';
}
function show_text() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'block';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'none';
}
function show_quiz() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}
function check() {
    q1elem = document.getElementById('q1');
    if (q1elem.checked) { alert("Yes") }
    else { alert("No") }
    reselem = document.getElementById('q3')
    answer = reselem.value;
    res.innerHTML = "Вы уверены, что " + answer + "?";
}
 var res="12241"; 
function check_me()
{
    var count=0;
    with(document.test) {
if (!Q1[0].checked&&!Q1[1].checked&&!Q1[2].checked&&!Q1[3].checked)  
{count+=1};  
if (!Q2[0].checked&&!Q2[1].checked&&!Q2[2].checked&&!Q2[3].checked)  
{count+=1};  
if (!Q3[0].checked&&!Q3[1].checked&&!Q3[2].checked&&!Q3[3].checked)  
{count+=1};  
if (!Q4[0].checked&&!Q4[1].checked&&!Q4[2].checked&&!Q4[3].checked)  
{count+=1};  
if (!Q5[0].checked&&!Q5[1].checked&&!Q5[2].checked&&!Q5[3].checked)  
{count+=1};  
if (count>0) alert("Вы выполнили не все задания. Проверьте себя!")    
        else answer();
    }
} 
 
function control(k, f1,f2,f3,f4,f5) {
if (k==1&&f1.checked) return true;
if (k==2&&f2.checked) return true;
if (k==3&&f3.checked) return true;
if (k==4&&f4.checked) return true;
if (k==5&&f5.checked) return true;
return false;
}

function answer() {
answ="";
     with(document)    {
    answ+=control(res.charAt(0) ,test.Q1[0],test.Q1[1],test.Q1[2],test.Q1[3])?"1":"0";
answ+=control(res.charAt(1) ,test.Q2[0],test.Q2[1],test.Q2[2],test.Q2[3])?"1":"0";
answ+=control(res.charAt(2) ,test.Q3[0],test.Q3[1],test.Q3[2],test.Q3[3])?"1":"0";
answ+=control(res.charAt(3) ,test.Q4[0],test.Q4[1],test.Q4[2],test.Q4[3])?"1":"0";
answ+=control(res.charAt(4) ,test.Q5[0],test.Q5[1],test.Q5[2],test.Q5[3])?"1":"0";

showResult();
    }
}
 
function showResult()   {
    var nok=0;
    var i,s;
 
for (i=0; i<answ.length;i++) {nok+=answ.charAt(i)=="1"?1:0;}
if(nok==5) s="ОТЛИЧНО";
if(nok<5) s="ХОРОШО";
if(nok<3.75) s="УДОВЛЕТВОРИТЕЛЬНО";
if (nok<2.5) s="НЕУДОВЛЕТВОРИТЕЛЬНО";
    document.test.s1.
    value="Количество правильных ответов "+nok+". Ваша оценка "+s+". Посмотрите на окно рядом с номером вопроса. Если ответ правильный, там (+). Если ответ ошибочен, там (-).";
 
with(document.test)
    {
    if (answ.charAt(0)=="1") {T1.value=" + "} else {T1.value=" - "};
   if (answ.charAt(1)=="1") {T2.value=" + "} else {T2.value=" - "};
   if (answ.charAt(2)=="1") {T3.value=" + "} else {T3.value=" - "};
   if (answ.charAt(3)=="1") {T4.value=" + "} else {T4.value=" - "};
   if (answ.charAt(4)=="1") {T5.value=" + "} else {T5.value=" - "};
     }
}
function showhide(obj){
    if(obj == 'none') return 'inline';
    else return 'none';
}
