let text = prompt("Nhập vào một chuỗi");

if(text == null){
    alert("Chuỗi rỗng không có ký tự");
}else{
    let count = 0;
    let n = text.length;
    let notCounted = true;
    for( let i =0;i<n;i++){
        if(text.charAt(i)!= SPACE && text.charAt(i) != TAB && text.charAt(i) != BREAK_LINE){
            if(notCounted){
                count++;
                notCounted = false;
            }
            else{
                notCounted = true;
            }
        }
        return count;
    }
}