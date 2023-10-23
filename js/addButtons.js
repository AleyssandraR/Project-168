AFRAME.registerComponent('create-button', {
    init:function(){
        var button=document.createElement('button')
        button.innerHTML='rate us'
        button.setAttribute('id', 'rating-button')
        button.setAttribute('class', 'btn btn-warning')
    
        var button2=document.createElement('button')
        button2.innerHTML='order now'
        button2.setAttribute('id', 'order-button')
        button2.setAttribute('class', 'btn btn-warning')

        var button_div=document.getElementById('button-div')
        button_div.appendChild(button)
        button_div.appendChild(button2)
    }
})