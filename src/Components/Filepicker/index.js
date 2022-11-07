const file = document.getElementById('fileImg');
    
file.addEventListener('change', (e)=>{

    const reader = new FileReader();

    reader.onload = () => {
            
        console.log(reader.result);
        
    }
    
})


module.exports = { file, reader };