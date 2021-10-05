let banco=[
    ['a1','b1','c1','d1','e1','f1','g1','h1'],
    ['a2','b2','c2','d2','e2','f2','g2','h2'],
    ['a3','b3','c3','d3','e3','f3','g3','h3'],
    ['a4','b4','c4','d4','e4','f4','g4','h4'],
    ['a5','b5','c5','d5','e5','f5','g5','h5'],
    ['a6','b6','c6','d6','e6','f6','g6','h6'],
    ['a7','b7','c7','d7','e7','f7','g7','h7'],
    ['a8','b8','c8','d8','e8','f8','g8','h8']
]
var movable=[]
var killable=[]
var movement=[]
var taketurn=0
var o=document.getElementsByClassName('square')
var turn='white'
var otrang=['b1','d1','f1','h1','a2','c2','e2','g2','b3','d3','f3','h3','a4','c4','e4','g4','b5','d5','f5','h5','a6','c6','e6','g6','b7','d7','f7','h7','a8','c8','e8','g8']
var oden=['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3','b4','d4','f4','h4','a5','c5','e5','g5','b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']
let quanco=[
b101={
    id: 'b101',
    side: 'bpiece',
    type: 'bking',
    position: banco[7][4],
    avatar: '&#9818;',
    moved: 'no',
    checked: 'no',
    checkable:'yes'
},
w001={
    id: 'w001',
    side: 'wpiece',
    type: 'wking',
    position: banco[0][4],
    avatar: '&#9812;',
    moved: 'no',
    checked: 'no',
    checkable:'yes'
},
b151={
    id: 'b151',
    side: 'bpiece',
    type: 'brook',
    position: banco[7][0],
    avatar: '&#9820;',
    moved: 'no'
},
b131={
    id: 'b131',
    side: 'bpiece',
    type: 'bknight',
    position: banco[7][1],
    avatar: '&#9822;',
    moved: 'no'
},
b141={
    id: 'b141',
    side: 'bpiece',
    type: 'bbishop',
    position: banco[7][2],
    avatar: '&#9821;',
    moved: 'no'
},
b191={
    id: 'b191',
    side: 'bpiece',
    type: 'bqueen',
    position: banco[7][3],
    avatar: '&#9819;',
    moved: 'no'
},
b142={
    id: 'b142',
    side: 'bpiece',
    type: 'bbishop',
    position: banco[7][5],
    avatar: '&#9821;',
    moved: 'no'
},
b132={
    id: 'b132',
    side: 'bpiece',
    type: 'bknight',
    position: banco[7][6],
    avatar: '&#9822;',
    moved: 'no'
},
b152={
    id: 'b152',
    side: 'bpiece',
    type: 'brook',
    position: banco[7][7],
    avatar: '&#9820;',
    moved: 'no'
},
b111={
    id: 'b111',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][0],
    avatar: '&#9823;',
    moved: 'no'
},
b112={
    id: 'b112',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][1],
    avatar: '&#9823;',
    moved: 'no'
},
b113={
    id: 'b113',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][2],
    avatar: '&#9823;',
    moved: 'no'
},
b114={
    id: 'b114',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][3],
    avatar: '&#9823;',
    moved: 'no'
},
b115={
    id: 'b115',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][4],
    avatar: '&#9823;',
    moved: 'no'
},
b116={
    id: 'b116',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][5],
    avatar: '&#9823;',
    moved: 'no'
},
b117={
    id: 'b117',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][6],
    avatar: '&#9823;',
    moved: 'no'
},
b118={
    id: 'b118',
    side: 'bpiece',
    type: 'bpawn',
    position: banco[6][7],
    avatar: '&#9823;',
    moved: 'no'
},
w051={
    id: 'w051',
    side: 'wpiece',
    type: 'wrook',
    position: banco[0][0],
    avatar: '&#9814;',
    moved: 'no'
},
w031={
    id: 'w031',
    side: 'wpiece',
    type: 'wknight',
    position: banco[0][1],
    avatar: '&#9816;',
    moved: 'no'
},
w041={
    id: 'w041',
    side: 'wpiece',
    type: 'wbishop',
    position: banco[0][2],
    avatar: '&#9815;',
    moved: 'no'
},
w091={
    id: 'w091',
    side: 'wpiece',
    type: 'wqueen',
    position: banco[0][3],
    avatar: '&#9813;',
    moved: 'no'
},
w042={
    id: 'w042',
    side: 'wpiece',
    type: 'wbishop',
    position: banco[0][5],
    avatar: '&#9815;',
    moved: 'no'
},
w032={
    id: 'w032',
    side: 'wpiece',
    type: 'wknight',
    position: banco[0][6],
    avatar: '&#9816;',
    moved: 'no'
},
w052={
    id: 'w052',
    side: 'wpiece',
    type: 'wrook',
    position: banco[0][7],
    avatar: '&#9814;',
    moved: 'no'
},
w011={
    id: 'w011',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][0],
    avatar: '&#9817;',
    moved: 'no'
},
w012={
    id: 'w012',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][1],
    avatar: '&#9817;',
    moved: 'no'
},
w013={
    id: 'w013',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][2],
    avatar: '&#9817;',
    moved: 'no'
},
w014={
    id: 'w014',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][3],
    avatar: '&#9817;',
    moved: 'no'
},
w015={
    id: 'w015',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][4],
    avatar: '&#9817;',
    moved: 'no'
},
w016={
    id: 'w016',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][5],
    avatar: '&#9817;',
    moved: 'no'
},
w017={
    id: 'w017',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][6],
    avatar: '&#9817;',
    moved: 'no'
},
w018={
    id: 'w018',
    side: 'wpiece',
    type: 'wpawn',
    position: banco[1][7],
    avatar: '&#9817;',
    moved: 'no'
},
wclone={
    id: '',
    side: 'wpiece',
    type: 'wclone',
    position:'',
    avatar: ''
},
bclone={
    id: '',
    side: 'bpiece',
    type: 'bclone',
    position:'',
    avatar: ''
}
]
async function xepbanco(){
    for(i=0;i<o.length;i++){
        o[i].innerHTML=''
    }
    for(b=0;b<32;b++){
        document.getElementById(otrang[b]).style.backgroundColor='rgb(155,155,155)'
        document.getElementById(oden[b]).style.backgroundColor='rgb(100,100,100)'
    }
    for(i=0;i<o.length;i++){
        for(a=0;a<quanco.length;a++){
            if(quanco[a].id!='dead'){
                if(quanco[a].position==o[i].id){
                        o[i].innerHTML=`<span class="${quanco[a].side}" id="${quanco[a].id}">${quanco[a].avatar}</span>`
                }
            }
            else if(quanco[a].id=='dead'){quanco.splice(a,1)}
        }
    }
    if(turn=='white'){
        var piece = document.getElementsByClassName('wpiece')
        for(add=0;add<piece.length;add++){piece[add].addEventListener('click',chess)}
        var piece = document.getElementsByClassName('bpiece')
        for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
        taketurn++
        await listing(taketurn)
        turn='black'
    }
    else if(turn=='black'){
        var piece = document.getElementsByClassName('wpiece')
        for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
        var piece = document.getElementsByClassName('bpiece')
        for(add=0;add<piece.length;add++){piece[add].addEventListener('click',chess)}
        turn='white'
    }
}
xepbanco()
async function chess(){
    await remove()
    var p=0
    while(p<quanco.length){
        if(quanco[p].id==this.id){
            break
        }
        else{p++}
    }
    if(quanco[p].type=='wknight'){
        move(p,1,2,1)
        move(p,-1,2,1)
        move(p,1,-2,1)
        move(p,-1,-2,1)
        move(p,2,1,1)
        move(p,-2,1,1)
        move(p,2,-1,1)
        move(p,-2,-1,1)
        kill(p,1,2,1)
        kill(p,-1,2,1)
        kill(p,1,-2,1)
        kill(p,-1,-2,1)
        kill(p,2,1,1)
        kill(p,-2,1,1)
        kill(p,2,-1,1)
        kill(p,-2,-1,1)
    }
    else if(quanco[p].type=='bknight'){
        move(p,1,2,1)
        move(p,-1,2,1)
        move(p,1,-2,1)
        move(p,-1,-2,1)
        move(p,2,1,1)
        move(p,-2,1,1)
        move(p,2,-1,1)
        move(p,-2,-1,1)
        kill(p,1,2,1)
        kill(p,-1,2,1)
        kill(p,1,-2,1)
        kill(p,-1,-2,1)
        kill(p,2,1,1)
        kill(p,-2,1,1)
        kill(p,2,-1,1)
        kill(p,-2,-1,1)
    }
    else if(quanco[p].type=='wpawn'){
        if(quanco[p].moved=='no'){
            move(p,1,0,2)
        }
        else{move(p,1,0,1)}
        kill(p,1,1,1)
        kill(p,1,-1,1)
    }
    else if(quanco[p].type=='bpawn'){
        if(quanco[p].moved=='no'){
            move(p,-1,0,2)
        }
        else{move(p,-1,0,1)}
        kill(p,-1,1,1)
        kill(p,-1,-1,1)
    }
    else if(quanco[p].type=='wbishop'){
        move(p,1,1,7)
        move(p,1,-1,7)
        move(p,-1,1,7)
        move(p,-1,-1,7)
        kill(p,1,1,7)
        kill(p,1,-1,7)
        kill(p,-1,1,7)
        kill(p,-1,-1,7)
    }
    else if(quanco[p].type=='bbishop'){
        move(p,1,1,7)
        move(p,1,-1,7)
        move(p,-1,1,7)
        move(p,-1,-1,7)
        kill(p,1,1,7)
        kill(p,1,-1,7)
        kill(p,-1,1,7)
        kill(p,-1,-1,7)
    }
    else if(quanco[p].type=='wrook'){
        move(p,1,0,7)
        move(p,-1,0,7)
        move(p,0,1,7)
        move(p,0,-1,7)
        kill(p,1,0,7)
        kill(p,-1,0,7)
        kill(p,0,1,7)
        kill(p,0,-1,7)
    }
    else if(quanco[p].type=='brook'){
        move(p,1,0,7)
        move(p,-1,0,7)
        move(p,0,1,7)
        move(p,0,-1,7)
        kill(p,1,0,7)
        kill(p,-1,0,7)
        kill(p,0,1,7)
        kill(p,0,-1,7)
    }
    else if(quanco[p].type=='wqueen'){
        move(p,1,0,7)
        move(p,-1,0,7)
        move(p,0,1,7)
        move(p,0,-1,7)
        move(p,1,1,7)
        move(p,1,-1,7)
        move(p,-1,1,7)
        move(p,-1,-1,7)
        kill(p,1,0,7)
        kill(p,-1,0,7)
        kill(p,0,1,7)
        kill(p,0,-1,7)
        kill(p,1,1,7)
        kill(p,1,-1,7)
        kill(p,-1,1,7)
        kill(p,-1,-1,7)
    }
    else if(quanco[p].type=='bqueen'){
        move(p,1,0,7)
        move(p,-1,0,7)
        move(p,0,1,7)
        move(p,0,-1,7)
        move(p,1,1,7)
        move(p,1,-1,7)
        move(p,-1,1,7)
        move(p,-1,-1,7)
        kill(p,1,0,7)
        kill(p,-1,0,7)
        kill(p,0,1,7)
        kill(p,0,-1,7)
        kill(p,1,1,7)
        kill(p,1,-1,7)
        kill(p,-1,1,7)
        kill(p,-1,-1,7)
    }
    else if(quanco[p].type=='wking'){
        await scout(p,1,0,1)
        await scout(p,-1,0,1)
        await scout(p,0,1,1)
        await scout(p,0,-1,1)
        await scout(p,1,1,1)
        await scout(p,1,-1,1)
        await scout(p,-1,1,1)
        await scout(p,-1,-1,1)
        if(
            quanco[p].moved=='no'&&
            quanco[p].checked=='no'
        ){
            var r=0
            while(r<quanco.length){
                if(quanco[r].id=='w051'){
                    break
                }
                else{r++}
            }
            if(r<quanco.length){
                if(quanco[r].moved=='no'){
                    if(
                        document.getElementById(banco[0][1]).textContent==''&&
                        document.getElementById(banco[0][2]).textContent==''&&
                        document.getElementById(banco[0][3]).textContent==''
                    ){
                        quanco[p].position=banco[0][3]
                        control()
                        if(quanco[p].checked=='no'){
                            quanco[p].position=banco[0][2]
                            control()
                            if(quanco[p].checked=='no'){
                                document.getElementById(banco[0][2]).innerHTML=`<button class="special" onclick="castling('w001',0,2,'w051',0,3)"></button>`
                                movable.push(banco[0][2])
                            }
                        }
                        quanco[p].position=banco[0][4]
                        quanco[p].checked='no'
                    }
                }
            }
            var r=0
            while(r<quanco.length){
                if(quanco[r].id=='w052'){
                    break
                }
                else{r++}
            }
            if(r<quanco.length){
                if(quanco[r].moved=='no'){
                    if(
                        document.getElementById(banco[0][5]).textContent==''&&
                        document.getElementById(banco[0][6]).textContent==''
                    ){
                        quanco[p].position=banco[0][5]
                        control()
                        if(quanco[p].checked=='no'){
                            quanco[p].position=banco[0][6]
                            control()
                            if(quanco[p].checked=='no'){
                                document.getElementById(banco[0][6]).innerHTML=`<button class="special" onclick="castling('w001',0,6,'w052',0,5)"></button>`
                                movable.push(banco[0][6])
                            }
                        }
                        quanco[p].position=banco[0][4]
                        quanco[p].checked='no'
                    }
                }
            }
        }
    }
    else if(quanco[p].type=='bking'){
        await scout(p,1,0,1)
        await scout(p,-1,0,1)
        await scout(p,0,1,1)
        await scout(p,0,-1,1)
        await scout(p,1,1,1)
        await scout(p,1,-1,1)
        await scout(p,-1,1,1)
        await scout(p,-1,-1,1)
        if(
            quanco[p].moved=='no'&&
            quanco[p].checked=='no'
        ){
            var r=0
            while(r<quanco.length){
                if(quanco[r].id=='b151'){
                    break
                }
                else{r++}
            }
            if(r<quanco.length){
                if(quanco[r].moved=='no'){
                    if(
                        document.getElementById(banco[7][1]).textContent==''&&
                        document.getElementById(banco[7][2]).textContent==''&&
                        document.getElementById(banco[7][3]).textContent==''
                    ){
                        quanco[p].position=banco[7][3]
                        control()
                        if(quanco[p].checked=='no'){
                            quanco[p].position=banco[7][2]
                            control()
                            if(quanco[p].checked=='no'){
                                document.getElementById(banco[7][2]).innerHTML=`<button class="special" onclick="castling('b101',7,2,'b151',7,3)"></button>`
                                movable.push(banco[7][2])
                            }
                        }
                        quanco[p].position=banco[7][4]
                        quanco[p].checked='no'
                    }
                }
            }
            var r=0
            while(r<quanco.length){
                if(quanco[r].id=='b152'){
                    break
                }
                else{r++}
            }
            if(r<quanco.length){
                if(quanco[r].moved=='no'){
                    if(
                        document.getElementById(banco[7][5]).textContent==''&&
                        document.getElementById(banco[7][6]).textContent==''
                    ){
                        quanco[p].position=banco[7][5]
                        control()
                        if(quanco[p].checked=='no'){
                            quanco[p].position=banco[7][6]
                            control()
                            if(quanco[p].checked=='no'){
                                document.getElementById(banco[7][6]).innerHTML=`<button class="special" onclick="castling('b101',7,6,'b152',7,5)"></button>`
                                movable.push(banco[7][6])
                            }
                        }
                        quanco[p].position=banco[7][4]
                        quanco[p].checked='no'
                    }
                }
            }
        }
    }
    await capture('n')
}
function move(p,x,y,limit){
    var n=0
    while(n<banco.length){
        if(banco[n].indexOf(quanco[p].position)!=-1){
            var d=banco[n].indexOf(quanco[p].position)
            break
        }
        else{n++}
    }
    var step=1
    while(step<=limit){
        if(
            n+x*step>=0&&
            n+x*step<=7&&
            d+y*step>=0&&
            d+y*step<=7
        ){
            var t=0
            while(t<quanco.length){
                if(banco[n+x*step][d+y*step]==quanco[t].position){
                    break
                }
                else{t++}
            }
            if(t==quanco.length){
                document.getElementById(banco[n+x*step][d+y*step]).innerHTML=`<button class="di" onclick="moved(${p},${n+x*step},${d+y*step})"></button>`
                movable.push(banco[n+x*step][d+y*step])
            }
            else{break}
        }
        step++
    }
}
async function remove(){
    for(m=0;m<movable.length;m++){
        document.getElementById(movable[m]).innerHTML=''
    }
    movable=[]
    for(b=0;b<32;b++){
        document.getElementById(otrang[b]).style.backgroundColor='rgb(155,155,155)'
        document.getElementById(oden[b]).style.backgroundColor='rgb(100,100,100)'
    }
    await mercy()
}
async function moved(p,x,y){
    var en=0
    if(
        turn=='black'&&
        quanco[p].type=='wpawn'&&
        banco[1].indexOf(quanco[p].position)!=-1
    ){en=1}
    else if(
        turn=='white'&&
        quanco[p].type=='bpawn'&&
        banco[6].indexOf(quanco[p].position)!=-1
    ){en=1}
    var past=quanco[p].position
    quanco[p].position=banco[x][y]
    quanco[p].moved='yes'
    if(2==3){alert('you suck')}
    else if(quanco[p].type=='wking'){document.getElementById(`white${taketurn}`).innerHTML=`K ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='wqueen'){document.getElementById(`white${taketurn}`).innerHTML=`Q ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='wrook'){document.getElementById(`white${taketurn}`).innerHTML=`R ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='wbishop'){document.getElementById(`white${taketurn}`).innerHTML=`B ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='wknight'){document.getElementById(`white${taketurn}`).innerHTML=`N ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='wpawn'){document.getElementById(`white${taketurn}`).innerHTML=`P ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='bking'){document.getElementById(`black${taketurn}`).innerHTML=`K ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='bqueen'){document.getElementById(`black${taketurn}`).innerHTML=`Q ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='brook'){document.getElementById(`black${taketurn}`).innerHTML=`R ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='bbishop'){document.getElementById(`black${taketurn}`).innerHTML=`B ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='bknight'){document.getElementById(`black${taketurn}`).innerHTML=`N ${past}>${quanco[p].position}`}
    else if(quanco[p].type=='bpawn'){document.getElementById(`black${taketurn}`).innerHTML=`P ${past}>${quanco[p].position}`}
    await charge()
    await control()
    await remove()
    await xepbanco()
    await capture('y')
    if(
        turn=='white'&&
        banco[3].indexOf(quanco[p].position)!=-1&&
        en==1
    ){await enpassant(p)}
    else if(
        turn=='black'&&
        banco[4].indexOf(quanco[p].position)!=-1&&
        en==1
    ){await enpassant(p)}
}
function kill(p,x,y,limit){
    var n=0
    while(n<banco.length){
        if(banco[n].indexOf(quanco[p].position)!=-1){
            var d=banco[n].indexOf(quanco[p].position)
            break
        }
        else{n++}
    }
    var step=1
    while(step<=limit){
        if(
            n+x*step>=0&&
            n+x*step<=7&&
            d+y*step>=0&&
            d+y*step<=7
        ){
            var t=0
            while(t<quanco.length){
                if(banco[n+x*step][d+y*step]==quanco[t].position){
                    break
                }
                else{t++}
            }
            if(t!=quanco.length){
                if(quanco[p].side!=quanco[t].side){
                    document.getElementById(banco[n+x*step][d+y*step]).style.backgroundColor='red'
                    document.getElementById(quanco[t].id).innerHTML=`<span class="${quanco[t].side}" id="${quanco[t].id}" onclick="killed(${p},${n+x*step},${d+y*step},${t})">${quanco[t].avatar}</span>`
                    killable.push(t)
                }
                break
            }
        }
        step++
    }
}
async function killed(p,x,y,t){
    quanco[t].id='dead'
    var past=quanco[p].position
    quanco[p].position=banco[x][y]
    quanco[p].moved='yes'
    if(2==3){alert('you suck')}
    else if(quanco[p].type=='wking'){document.getElementById(`white${taketurn}`).innerHTML=`K ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='wqueen'){document.getElementById(`white${taketurn}`).innerHTML=`Q ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='wrook'){document.getElementById(`white${taketurn}`).innerHTML=`R ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='wbishop'){document.getElementById(`white${taketurn}`).innerHTML=`B ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='wknight'){document.getElementById(`white${taketurn}`).innerHTML=`N ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='wpawn'){document.getElementById(`white${taketurn}`).innerHTML=`P ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='bking'){document.getElementById(`black${taketurn}`).innerHTML=`K ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='bqueen'){document.getElementById(`black${taketurn}`).innerHTML=`Q ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='brook'){document.getElementById(`black${taketurn}`).innerHTML=`R ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='bbishop'){document.getElementById(`black${taketurn}`).innerHTML=`B ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='bknight'){document.getElementById(`black${taketurn}`).innerHTML=`N ${past}x${quanco[p].position}`}
    else if(quanco[p].type=='bpawn'){document.getElementById(`black${taketurn}`).innerHTML=`P ${past}x${quanco[p].position}`}
    await charge()
    await control()
    await remove()
    await xepbanco()
    await capture('y')
}
function mercy(){
    for(k=0;k<killable.length;k++){
        document.getElementById(quanco[killable[k]].position).innerHTML=`<span class="${quanco[killable[k]].side}" id="${quanco[killable[k]].id}">${quanco[killable[k]].avatar}</span>`
    }
    killable=[]
}
async function charge(){
    if(turn=='black'){
        for(pawn=1;pawn<9;pawn++){
            var p=0
            while(p<quanco.length){
                if(
                    quanco[p].id==`w01${pawn}`&&
                    quanco[p].type=='wpawn'
                ){
                    break
                }
                else{p++}
            }
            if(p<quanco.length){if(banco[7].indexOf(quanco[p].position)!=-1){await pawnpromotion(p)}}
        }
    }
    else if(turn=='white'){
        for(pawn=1;pawn<9;pawn++){
            var p=0
            while(p<quanco.length){
                if(
                    quanco[p].id==`b11${pawn}`&&
                    quanco[p].type=='bpawn'
                ){
                    break
                }
                else{p++}
            }
            if(p<quanco.length){if(banco[0].indexOf(quanco[p].position)!=-1){await pawnpromotion(p)}}
        }
    }
}
async function pawnpromotion(p){
    if(turn=='black'){
        var a=prompt('promotion')
        if(a=='queen'){
            quanco[p].type='wqueen'
            quanco[p].avatar='&#9813;'
            var text=document.getElementById(`white${taketurn}`).textContent
            document.getElementById(`white${taketurn}`).innerHTML=`${text} = Q`
        } 
        else if(a=='rook'){
            quanco[p].type='wrook'
            quanco[p].avatar='&#9814;'
            var text=document.getElementById(`white${taketurn}`).textContent
            document.getElementById(`white${taketurn}`).innerHTML=`${text} = R`
        }
        else if(a=='bishop'){
            quanco[p].type='wbishop'
            quanco[p].avatar='&#9815;'
            var text=document.getElementById(`white${taketurn}`).textContent
            document.getElementById(`white${taketurn}`).innerHTML=`${text} = B`
        }
        else if(a=='knight'){
            quanco[p].type='wknight'
            quanco[p].avatar='&#9816;'
            var text=document.getElementById(`white${taketurn}`).textContent
            document.getElementById(`white${taketurn}`).innerHTML=`${text} = N`
        }
        else{
            alert('queen,rook,bishop,knight')
            await pawnpromotion(p)
        }
    }
    else if(turn=='white'){
        var a=prompt('promotion')
        if(a=='queen'){
            quanco[p].type='bqueen'
            quanco[p].avatar='&#9819;'
            var text=document.getElementById(`black${taketurn}`).textContent
            document.getElementById(`black${taketurn}`).innerHTML=`${text} = Q`
        }
        else if(a=='rook'){
            quanco[p].type='brook'
            quanco[p].avatar='&#9820;'
            var text=document.getElementById(`black${taketurn}`).textContent
            document.getElementById(`black${taketurn}`).innerHTML=`${text} = R`
        }
        else if(a=='bishop'){
            quanco[p].type='bbishop'
            quanco[p].avatar='&#9821;'
            var text=document.getElementById(`black${taketurn}`).textContent
            document.getElementById(`black${taketurn}`).innerHTML=`${text} = B`
        }
        else if(a=='knight'){
            quanco[p].type='bknight'
            quanco[p].avatar='&#9822;'
            var text=document.getElementById(`black${taketurn}`).textContent
            document.getElementById(`black${taketurn}`).innerHTML=`${text} = N`
        }
        else{
            alert('queen,rook,bishop,knight')
            await pawnpromotion(p)
        }
    }
}
function control(){
    for(p=0;p<quanco.length;p++){
        if(
            quanco[p].type=='wking'||
            quanco[p].type=='bking'
            ){quanco[p].checked='no'}
    }
    for(p=0;p<quanco.length;p++){
        if(quanco[p].id!='dead'){
            if(quanco[p].type=='wknight'){
                danger(p,1,2,1)
                danger(p,-1,2,1)
                danger(p,1,-2,1)
                danger(p,-1,-2,1)
                danger(p,2,1,1)
                danger(p,-2,1,1)
                danger(p,2,-1,1)
                danger(p,-2,-1,1)
            }
            else if(quanco[p].type=='bknight'){
                danger(p,1,2,1)
                danger(p,-1,2,1)
                danger(p,1,-2,1)
                danger(p,-1,-2,1)
                danger(p,2,1,1)
                danger(p,-2,1,1)
                danger(p,2,-1,1)
                danger(p,-2,-1,1)
            }
            else if(quanco[p].type=='wpawn'){
                danger(p,1,1,1)
                danger(p,1,-1,1)
            }
            else if(quanco[p].type=='bpawn'){
                danger(p,-1,1,1)
                danger(p,-1,-1,1)
            }
            else if(quanco[p].type=='wbishop'){
                danger(p,1,1,7)
                danger(p,-1,1,7)
                danger(p,1,-1,7)
                danger(p,-1,-1,7)
            }
            else if(quanco[p].type=='bbishop'){
                danger(p,1,1,7)
                danger(p,-1,1,7)
                danger(p,1,-1,7)
                danger(p,-1,-1,7)
            }
            else if(quanco[p].type=='wrook'){
                danger(p,1,0,7)
                danger(p,0,1,7)
                danger(p,0,-1,7)
                danger(p,-1,0,7)
            }
            else if(quanco[p].type=='brook'){
                danger(p,1,0,7)
                danger(p,0,1,7)
                danger(p,0,-1,7)
                danger(p,-1,0,7)
            }
            else if(quanco[p].type=='wqueen'){
                danger(p,1,0,7)
                danger(p,0,1,7)
                danger(p,0,-1,7)
                danger(p,-1,0,7)
                danger(p,1,1,7)
                danger(p,-1,1,7)
                danger(p,1,-1,7)
                danger(p,-1,-1,7)
            }
            else if(quanco[p].type=='bqueen'){
                danger(p,1,0,7)
                danger(p,0,1,7)
                danger(p,0,-1,7)
                danger(p,-1,0,7)
                danger(p,1,1,7)
                danger(p,-1,1,7)
                danger(p,1,-1,7)
                danger(p,-1,-1,7)
            }
            else if(quanco[p].type=='wking'){
                if(turn=='black'){
                    quanco[p].checkable='no'
                }
                else if(turn=='white'){
                    quanco[p].checkable='yes'
                }
                if(quanco[p].checkable=='yes'){
                    danger(p,1,0,1)
                    danger(p,0,1,1)
                    danger(p,0,-1,1)
                    danger(p,-1,0,1)
                    danger(p,1,1,1)
                    danger(p,-1,1,1)
                    danger(p,1,-1,1)
                    danger(p,-1,-1,1)
                }    

            }
            else if(quanco[p].type=='bking'){
                if(turn=='white'){
                    quanco[p].checkable='no'
                }
                else if(turn=='black'){
                    quanco[p].checkable='yes'
                }
                if(quanco[p].checkable=='yes'){
                    danger(p,1,0,1)
                    danger(p,0,1,1)
                    danger(p,0,-1,1)
                    danger(p,-1,0,1)
                    danger(p,1,1,1)
                    danger(p,-1,1,1)
                    danger(p,1,-1,1)
                    danger(p,-1,-1,1)
                }
            }
        }
    }
}
function danger(p,x,y,limit){
    var n=0
    while(n<banco.length){
        if(banco[n].indexOf(quanco[p].position)!=-1){
            var d=banco[n].indexOf(quanco[p].position)
            break
        }
        else{n++}
    }
    var step=1
    while(step<=limit){
        if(
            n+x*step>=0&&
            n+x*step<=7&&
            d+y*step>=0&&
            d+y*step<=7
        ){
            var t=0
            while(t<quanco.length){
                if(banco[n+x*step][d+y*step]==quanco[t].position){
                    break
                }
                else{t++}
            }
            if(t!=quanco.length){
                if(quanco[p].side!=quanco[t].side){
                    if(quanco[t].id=='w001'){quanco[t].checked='yes'}
                    if(quanco[t].id=='b101'){quanco[t].checked='yes'}  
                }
                break
            }
        }
        step++
    }  
}
function capture(tk){
    var bking=0
    while(bking<quanco.length){
        if(quanco[bking].id=='b101'){
            break
        }
        else{bking++}
    }
    if(bking<quanco.length){if(quanco[bking].checked=='yes'){
        document.getElementById(quanco[bking].position).style.backgroundColor='red'
        if(tk=='y'){
            var text=document.getElementById(`white${taketurn}`).textContent
            document.getElementById(`white${taketurn}`).innerHTML=`${text} +`
        }    
    }}
    var wking=0
    while(wking<quanco.length){
        if(quanco[wking].id=='w001'){
            break
        }
        else{wking++}
    }
    if(wking<quanco.length){if(quanco[wking].checked=='yes'){
        document.getElementById(quanco[wking].position).style.backgroundColor='red'
        if(tk=='y'){
            var text=document.getElementById(`black${taketurn-1}`).textContent
            document.getElementById(`black${taketurn-1}`).innerHTML=`${text} +`
        }
    }}
    if(turn=='black'){
        if(quanco[bking].checked=='yes'){
            alert('black king captured')
            var piece = document.getElementsByClassName('wpiece')
            for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
            var piece = document.getElementsByClassName('bpiece')
            for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
        }
    }
    if(turn=='white'){
        if(quanco[wking].checked=='yes'){
            alert('white king captured')
            var piece = document.getElementsByClassName('wpiece')
            for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
            var piece = document.getElementsByClassName('bpiece')
            for(add=0;add<piece.length;add++){piece[add].removeEventListener('click',chess)}
        }
    }
}
async function scout(p,x,y,limit){
    var n=0
    while(n<banco.length){
        if(banco[n].indexOf(quanco[p].position)!=-1){
            var d=banco[n].indexOf(quanco[p].position)
            break
        }
        else{n++}
    }
    if(
        n+x>=0&&
        n+x<=7&&
        d+y>=0&&
        d+y<=7
    ){
        var check=quanco[p].checked
        if(quanco[p].side=='wpiece'){
            wclone.position=quanco[p].position
        }
        else if(quanco[p].side=='bpiece'){
            bclone.position=quanco[p].position
        }
        quanco[p].position=banco[n+x][d+y]
        await control()
        quanco[p].position=banco[n][d]
        if(quanco[p].checked=='no'){
            move(p,x,y,limit)
            kill(p,x,y,limit)
        }
        quanco[p].checked=check
        wclone.position=''
        bclone.position=''
    }
}
async function castling(k,xk,yk,r,xr,yr){
    var k1=0
    while(k1<quanco.length){
        if(quanco[k1].id==k){
            break
        }
        else{k1++}
    }
    var r1=0
    while(r1<quanco.length){
        if(quanco[r1].id==r){
            break
        }
        else{r1++}
    }
    if(k1<quanco.length&&r1<quanco.length){
        quanco[k1].position=banco[xk][yk]
        quanco[r1].position=banco[xr][yr]
        quanco[k1].moved='yes'
        quanco[r1].moved='yes'
    } 
    if(turn=='black'){
        if(quanco[k1].position==banco[0][6]){
            document.getElementById(`white${taketurn}`).innerHTML='0-0'
        }
        else if(quanco[k1].position==banco[0][2]){
            document.getElementById(`white${taketurn}`).innerHTML='0-0-0'
        }
    }
    else if(turn=='white'){
        if(quanco[k1].position==banco[7][6]){
            document.getElementById(`black${taketurn}`).innerHTML='0-0'
        }
        else if(quanco[k1].position==banco[7][2]){
            document.getElementById(`black${taketurn}`).innerHTML='0-0-0'
        }
    }
    await remove()   
    await xepbanco()
}
function enpassant(p){
    var n=0
    while(n<banco.length){
        if(banco[n].indexOf(quanco[p].position)!=-1){
            var d=banco[n].indexOf(quanco[p].position)
            break
        }
        else{n++}
    }
    if(turn=='white'){
        var t=0
        while(t<quanco.length){
            if(
                quanco[t].position==banco[n][d+1]&&
                quanco[t].type=='bpawn'
            ){
                document.getElementById(quanco[t].position).innerHTML=`<span class="${quanco[t].side}" id="${quanco[t].id}" onclick="remove();unpassant(${p},${n},${d},${t});move(${t},-1,0,1);kill(${t},-1,1,1);kill(${t},-1,-1,1)">${quanco[t].avatar}</span>`
                break
            }
            else{t++}
        }   
        var t=0
        while(t<quanco.length){
            if(
                quanco[t].position==banco[n][d-1]&&
                quanco[t].type=='bpawn'
            ){
                document.getElementById(quanco[t].position).innerHTML=`<span class="${quanco[t].side}" id="${quanco[t].id}" onclick="remove();unpassant(${p},${n},${d},${t});move(${t},-1,0,1);kill(${t},-1,1,1);kill(${t},-1,-1,1)">${quanco[t].avatar}</span>`
                break
            }
            else{t++}
        }   
    }
    else if(turn=='black'){
        var t=0
        while(t<quanco.length){
            if(
                quanco[t].position==banco[n][d+1]&&
                quanco[t].type=='wpawn'
            ){
                document.getElementById(quanco[t].position).innerHTML=`<span class="${quanco[t].side}" id="${quanco[t].id}" onclick="remove();unpassant(${p},${n},${d},${t});move(${t},1,0,1);kill(${t},1,1,1);kill(${t},1,-1,1)">${quanco[t].avatar}</span>`
                break
            }
            else{t++}
        }   
        var t=0
        while(t<quanco.length){
            if(
                quanco[t].position==banco[n][d-1]&&
                quanco[t].type=='wpawn'
            ){
                document.getElementById(quanco[t].position).innerHTML=`<span class="${quanco[t].side}" id="${quanco[t].id}" onclick="remove();unpassant(${p},${n},${d},${t});move(${t},1,0,1);kill(${t},1,1,1);kill(${t},1,-1,1)">${quanco[t].avatar}</span>`
                break
            }
            else{t++}
        }   
    }
}
function unpassant(p,n,d,t){
    if(turn=='white'){
        document.getElementById(banco[n-1][d]).innerHTML=`<button class="special" onclick="impassant(${p},${n},${d},${t})"></button>`
        movable.push(banco[n-1][d])
    }
    if(turn=='black'){
        document.getElementById(banco[n+1][d]).innerHTML=`<button class="special" onclick="impassant(${p},${n},${d},${t})"></button>`
        movable.push(banco[n+1][d])
    }
}
async function impassant(p,n,d,t){
    if (turn=='white') {
        quanco[p].id='dead'
        var past=quanco[t].position
        quanco[t].position=banco[n-1][d]
    }
    if (turn=='black') {
        quanco[p].id='dead'
        var past=quanco[t].position
        quanco[t].position=banco[n+1][d]
    }  
    if(2==3){alert('you suck')}
    else if(quanco[t].type=='wpawn'){document.getElementById(`white${taketurn}`).innerHTML=`P ${past}x${quanco[p].position}`}
    else if(quanco[t].type=='bpawn'){document.getElementById(`black${taketurn}`).innerHTML=`P ${past}x${quanco[p].position}`}      
    await remove()
    await xepbanco()
}
for(save=1;save<7;save++){
    setup(save)
    progress(save)
}
function setup(save){
    var b=JSON.parse(localStorage.getItem(`file${save}`))
    if(b==null){
        var a=''
        localStorage.setItem(`file${save}`,JSON.stringify(a))
    }
}
function upload(save){
    if(turn=='white'){
        turn='black'
    }
    else if(turn=='black'){
        turn='white'
    }
    var saving=[quanco,turn]
    localStorage.setItem(`file${save}`,JSON.stringify(saving))
    if(turn=='white'){
        turn='black'
    }
    else if(turn=='black'){
        turn='white'
    }
}
function progress(save){
    var saved=JSON.parse(localStorage.getItem(`file${save}`))
    if(saved==''){
        document.getElementById(`filesave${save}`).innerHTML=`<button class="save" onclick="upload(${save});progress(${save})">EMPTY</button>`
    }
    else{
        document.getElementById(`filesave${save}`).innerHTML=`
        <button class="update" onclick="upload(${save});progress(${save})">UPLOAD</button>
        <button class="update" onclick="retrieve(${save})">RETRIEVE</button>
        <button class="update" onclick="takeaway(${save});progress(${save})">DELETE</button>
        `
    }
}
async function retrieve(save){
    await remove()
    var saved=JSON.parse(localStorage.getItem(`file${save}`))
    quanco=saved[0]
    turn=saved[1]
    await clear()
    await xepbanco()
    await capture()
}
function takeaway(save){
    localStorage.setItem(`file${save}`,JSON.stringify(''))
}
function listing(taketurn){
    var add=`
    <tr>
        <th style="color: white">${taketurn}</th>
        <th id="white${taketurn}" style="color: white"></th>
        <th id="black${taketurn}" style="color: white"></th>
    </tr>
    `
    $('#movelist').append(add)
}
function clear(){
    document.getElementById('movelist').innerHTML=`
    <tr>
        <th class="turn">TURN</th>
        <th class="white">WHITE</th>
        <th class="black">BLACK</th>
    </tr>
    `
    if(turn=='white'){
        taketurn=0
    }
    else if(turn=='black'){
        taketurn=1
        listing(taketurn)
    }
}
async function restart(){
    await remove()
    b151.position=banco[7][0]
    b131.position=banco[7][1]
    b141.position=banco[7][2]
    b191.position=banco[7][3]
    b101.position=banco[7][4]
    b142.position=banco[7][5]
    b132.position=banco[7][6]
    b152.position=banco[7][7]
    b111.position=banco[6][0]
    b112.position=banco[6][1]
    b113.position=banco[6][2]
    b114.position=banco[6][3]
    b115.position=banco[6][4]
    b116.position=banco[6][5]
    b117.position=banco[6][6]
    b118.position=banco[6][7]
    w051.position=banco[0][0]
    w031.position=banco[0][1]
    w041.position=banco[0][2]
    w091.position=banco[0][3]
    w001.position=banco[0][4]
    w042.position=banco[0][5]
    w032.position=banco[0][6]
    w052.position=banco[0][7]
    w011.position=banco[1][0]
    w012.position=banco[1][1]
    w013.position=banco[1][2]
    w014.position=banco[1][3]
    w015.position=banco[1][4]
    w016.position=banco[1][5]
    w017.position=banco[1][6]
    w018.position=banco[1][7]
    for(i=0;i<32;i++){
        quanco[i].moved='no'
    }
    turn='white'
    taketurn=0
    document.getElementById('movelist').innerHTML=`
        <tr>
            <th class="turn">TURN</th>
            <th class="white">WHITE</th>
            <th class="black">BLACK</th>
        </tr>
    `
    await xepbanco()
}
// ``
// ⛨