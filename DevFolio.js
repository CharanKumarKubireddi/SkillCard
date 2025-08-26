let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.dir(this);

    const name=document.querySelector("#name");
    const about=document.querySelector("#about");
    const skills=document.querySelector("#skills").value;
    const project_info=document.querySelector("#project_info");
    const email=document.querySelector("#email");

    let op_name=document.querySelector("#op_name");
    let op_about=document.querySelector("#op_about");
    let op_project_info=document.querySelector("#op_project_info");
    let op_email=document.querySelector("#op_email");
    
    op_name.innerText=`${name.value}`;
    op_about.innerText=about.value;
    op_project_info.innerText=project_info.value;
    op_email.innerText=email.value;
    
    const skills_list=document.querySelector("#op_skills");
    skills_list.innerHTML="";
    const skillsArr=skills.split(",");
    skillsArr.forEach(skill =>{
        const li=document.createElement("li");
        li.innerText=skill.trim();
        skills_list.appendChild(li);
    });

});
let body=document.querySelector("body");
let theme=document.querySelector("#theme");
let output=document.querySelector("#output");
let icon=document.querySelector("#icon")  
theme.addEventListener("click",()=>{
    if (output.classList.contains("dark")) {
        output.classList.remove("dark");
        output.classList.add("light");
        icon.classList.add("bi-moon-fill");
        icon.classList.remove("bi-moon");
    } 
    else {
        output.classList.remove("light");
        output.classList.add("dark");
        icon.classList.add("bi-moon");
        icon.classList.remove("bi-moon-fill");
    }
});
document.querySelector("#download").addEventListener("click",function(){
    const element=document.querySelector("#output");
    html2canvas(element).then((canvas)=>{
        const imageData=canvas.toDataURL("image/png");
        const link=document.createElement("a");
        link.href=imageData;
        link.download="devfolio-preview.png";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
