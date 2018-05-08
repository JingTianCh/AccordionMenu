var classdata=[
    {
        'classId':'0000',
        'parentId':'0',
        'name':'正常Normal',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'1000',
        'parentId':'0',
        'name':'无上皮内病变或恶性病变(NILM)',
        'color':'#68228B'
    }, 
    {
        'classId':'2000',
        'parentId':'0',
        'name':'上皮内异常',
        'color':'#1874CD'
    },    {
        'classId':'3000',
        'parentId':'0',
        'name':'其他恶性肿瘤',
        'color':'#330033'
    },   {
        'classId':'1100',
        'parentId':'1000',
        'name':'非肿瘤性发现',
        'color':'#8B658B'
    },    {
        'classId':'1200',
        'parentId':'1000',
        'name':'病原体',
        'color':'#668B8B'   
    },    {
        'classId':'1300',
        'parentId':'1000',
        'name':'其他：子宫内膜细胞,>=45岁',
        'color':'#333300'      
    },    {
        'classId':'1110',
        'parentId':'1100',
        'name':'非肿瘤性细胞学改变',
        'color':'#EEDD82'     
    },    {
        'classId':'1111',
        'parentId':'1110',
        'name':'鳞状化生',
        'color':'#336666'    
    },    {
        'classId':'1112',
        'parentId':'1110',
        'name':'角化改变',
        'color':'#009999'      
    },    {
        'classId':'1113',
        'parentId':'1110',
        'name':'输卵管化生',
        'color':'#669999'    
    },    {
        'classId':'1114',
        'parentId':'1110',
        'name':'萎缩',
        'color':'#66CC99'     
    },    {
        'classId':'1115',
        'parentId':'1110',
        'name':'妊娠相关改变',
        'color':'#CCFFCC'     
    },    {
        'classId':'1120',
        'parentId':'1100',
        'name':'反应性细胞改变，伴有：',
        'color':'#FFF5EE'      
    },    {
        'classId':'1121',
        'parentId':'1120',
        'name':'炎症(包含非典型修复)-淋巴细胞性(滤泡性)宫颈炎',
        'color':'#CC6600'      
    },   {
        'classId':'1122',
        'parentId':'1120',
        'name':'放射治疗',
        'color':'#FF6600'      
    },   {
        'classId':'1123',
        'parentId':'1120',
        'name':'宫内节育器(IUD)',
        'color':'#FFCC33'      
    },    {
        'classId':'1130',
        'parentId':'1100',
        'name':'子宫切除后有腺细胞',
        'color':'#333333'      
    },    {
        'classId':'1210',
        'parentId':'1200',
        'name':'滴虫',
        'color':'#003300'   
    },    {
        'classId':'1220',
        'parentId':'1200',
        'name':'真菌，形态学符合白色念珠菌',
        'color':'#006633'    
    },    {
        'classId':'1230',
        'parentId':'1200',
        'name':'菌群失调，提示细菌性阴道病',
        'color':'#339933'     
    },    {
        'classId':'1240',
        'parentId':'1200',
        'name':'细胞形态学符合放线菌',
        'color':'#669933'    
    },    {
        'classId':'1250',
        'parentId':'1200',
        'name':'细胞学改变符合单纯疱疹病毒',
        'color':'#99CC33' 
    },    {
        'classId':'1260',
        'parentId':'1200',
        'name':'细胞学改变符合巨细胞病毒',
        'color':'#99CC99'
    },    {
        'classId':'2100',
        'parentId':'2000',
        'name':'鳞状细胞',
        'color':'#228B22'
    },    {
        'classId':'2110',
        'parentId':'2100',
        'name':'非典型鳞状细胞(ASC)',
        'color':'#E3170D'
    },    {
        'classId':'2111',
        'parentId':'2110',
        'name':'意义不明确(ASC-US)',
        'color':'rgb(255,255,0)'
    },    {
        'classId':'2112',
        'parentId':'2110',
        'name':'不除外HSIL(ASC-H)',
        'color':'#FF9900'
    },    {
        'classId':'2120',
        'parentId':'2100',
        'name':'低度鳞状上皮内病变(LSIL)',
        'color':'rgb(0,255,0)'
    },    {
        'classId':'2130',
        'parentId':'2100',
        'name':'高度鳞状上皮内病变 (HSIL)',
        'color':'rgb(255,0,0)'
    },    {
        'classId':'2140',
        'parentId':'2100',
        'name':'鳞状细胞癌(SCC)',
        'color':'#0000FF'
    },    {
        'classId':'2200',
        'parentId':'2000',
        'name':'腺细胞',
        'color':'#339999'
    },    {
        'classId':'2210',
        'parentId':'2200',
        'name':'非典型腺细胞(AGC)',
        'color':'rgb(0,120,130)' 
    },    {
        'classId':'2211',
        'parentId':'2210',
        'name':'非典型腺细胞，倾向于宫颈管腺细胞(AEC)',
        'color':'#003399'
    },    {
        'classId':'2212',
        'parentId':'2210',
        'name':'非典型腺细胞，倾向于子宫内膜腺细胞(AMC)',
        'color':'#336699'
    },    {
        'classId':'2213',
        'parentId':'2210',
        'name':'非典型腺细胞，来源不确定(AGC,NOS)',
        'color':'#6699CC'
    },    {
        'classId':'2220',
        'parentId':'2200',
        'name':'非典型腺细胞，倾向于肿瘤(AGC,FN)',
        'color':'#336666'
    },    {
        'classId':'2221',
        'parentId':'2220',
        'name':'非典型宫颈管细胞(AEC),倾向于肿瘤性',
        'color':'#191970'
    },    {
        'classId':'2222',
        'parentId':'2220',
        'name':'非典型腺细胞(AGC),倾向于肿瘤性',
        'color':'#990066'
    },    {
        'classId':'2230',
        'parentId':'2200',
        'name':'子宫颈管原位腺癌(AIS)',
        'color':'#990033'
    } ,    {
        'classId':'2240',
        'parentId':'2200',
        'name':'腺癌(ADCa)',
        'color':'#FF6347'
    },    {
        'classId':'2241',
        'parentId':'2240',
        'name':'子宫颈管型(ECCA)',
        'color':'#663366'
    },    {
        'classId':'2242',
        'parentId':'2240',
        'name':'子宫内膜型(EmCa)',
        'color':'#996699'
    },    {
        'classId':'2243',
        'parentId':'2240',
        'name':'子宫外',
        'color':'#CC99CC'
    },    {
        'classId':'2244',
        'parentId':'2240',
        'name':'非特指(NOS)',
        'color':'#CC6699'
        
    }
    
   
];
//建立包含所有select对象的数组
//数组中包含对象，每个对象有classid 和 name的键，与classdata中的内容相对应。
var radioItems=[];


//根据类别对象，在列表中创建选项
var createAccorC=function(el){
    //如果已存在，则返回
    if($('[classId="'+el.classId+'"]').length>0){
        return true;
    }
    //设置新元素内容
    var $newControl=$(`<div class='select' classId='${el.classId}'><input type="radio" name='type' radioId='${el.classId}'>${el.name}<span>      </span><i style='color:${el.color}' class='myColor fa fa-square'></i></div>`);
    
    if(el.parentId=='0'){
        $('.accordion').append($newControl);
        //设置一级类别margin-left
        $newControl.css('marginLeft','10px');
        return true;
        }
    else{
        var $parentEl=$('[classId="'+el.parentId+'"]');
        if($parentEl.length>0){
            if ($parentEl.next('.accordion-panel').length == 0) {
                //修改类别,删除默认选项设置
                $parentEl.removeClass('select').addClass('accordion-control');
                //修改相关内容
                $parentEl.append('<i class="fa fa-minus-square"></i>');
                $parentEl.after(`<div class='accordion-panel'></div>`);
                var $panel=$parentEl.next('.accordion-panel');
                $panel.css('marginLeft',$parentEl.css('marginLeft'));
                $panel.css('width',returnPx($parentEl.css('width'),10));
                //移除
                $parentEl.children('input').remove();
                $parentEl.children('.myColor').remove();
            }
            $parentEl.next('.accordion-panel').append($newControl);
            //对子元素设置缩进格式
            //margin-left使用css设置 .select值为15px, panel和control对应均为10px，因为.select对象在panel容器内，为了与control对齐，补偿control右侧的border和padding之和5px。
            $newControl.css('width',returnPx($parentEl.css('width'),-10));
            return true; 
        }
        else{
            //找不到父节点
            return false;
        
        }
    }
    
}
//根据原始属性值返回新的值
//el代表原始提取的值，value代表做运算的差值
var returnPx = function(text,value){
    var vIndex=text.indexOf('px');
    return (parseInt(text.substring(0,vIndex))+value)+'px';
}


var insertItem = function () {
    var insertsAll= new Promise(function(resolve,reject){
    classdata.forEach(function (el, index) {
        //查找其父元素
        var thisEl = el;
        var findEl = [];
        var createBool = createAccorC(thisEl);
        var results = [];
        //若不能一次成功载入
        while (!createBool || (findEl.length > 1)) {
            //初次进入循环，说明原始元素也未创建成功。
            if (findEl.length == 0) {
                findEl.push(thisEl.classId);
            }
            //如果是因为创建不成功
            if (!createBool) {
                findEl.push(thisEl.parentId);
            }
            //如果上一次创建成功
            else {
                findEl.pop();
            }
            results = classdata.filter(function (elem) {
                return elem.classId == findEl[findEl.length - 1];
            });
            console.log(results, length);
            thisEl = results[0];
            createBool = createAccorC(thisEl);
        }

    });
        resolve();
        });
    insertsAll.then(function(){
        var $allSelects=$('.select');
        $allSelects.each(function(){
            radioItems.push({'classid':$(this).attr('classid'),'name':$(this).text(),'color':$(this).find('i').css('color')});
        }
        
        );
    
    });
}

var showParentAccor = function ($radio) {
    var parentAcc = $radio.parents('.accordion-panel');
    if (parentAcc.length > 0) {
        for (let i = parentAcc.length - 1; i >= 0; i--) {
            if ($(parentAcc[i]).is(':hidden')) {
                var preControl = $(parentAcc[i]).prev('.accordion-control');
                console.log();
                $(parentAcc[i]).prev('.accordion-control').trigger('click');

            }
        }

    }

}
$(function(){
//响应点击
    $('div').on('click','.select',function(e){
        e.stopPropagation();
        if($('.select, .checkBorder').length>0){
            $('.select, .checkBorder').removeClass('checkBorder');
        }
        $(this).addClass('checkBorder');
        var $radio=$(this).children('input');
        $radio.prop('checked',true);        

    });
    
//手风琴风格菜单 折叠
    $('.accordion').on('click','.accordion-control',function(e){

        e.preventDefault();
        if($(this).next('.accordion-panel').is(':hidden')){
            $(this).children('i').removeClass('fa-plus-square');
            $(this).children('i').addClass('fa-minus-square');
        
        }
        else{
            $(this).children('i').addClass('fa-plus-square');
            $(this).children('i').removeClass('fa-minus-square');
        
        }
        $(this).next('.accordion-panel').not('animated').slideToggle();
    
    });

//隐藏功能演示
$('button').on('click',function(){
        if ($('#selectList').width() > 0) {
            $('#selectList').animate({
                width: '0'
            }, 'normal');
        } else {
            $('#selectList').animate({
                width: '420'
            }, 'nomal');
        }

});
    
//自动联想
    $('#searchArea').on('input propertychange',function(){
        var text=$('#searchText').val().toUpperCase();
        if (text.length>0){
            var hitItems=[];
            hitItems=radioItems.filter(function(item,index){
                if(item.name.toUpperCase().indexOf(text)>-1){
                    return true;
                }
                else{
                    return false;
                }
            });
            
            $('#linkBox ul').empty();
            for(i in hitItems){
                $('#linkBox ul').append(`<li itemId='${hitItems[i].classid}'>${hitItems[i].name}</li>`);
            }
            $('#linkBox').show();
        }
        else{
            $('#linkBox').hide();
        
        }
        
    });
//点击全选输入框中内容
    $('#searchArea').on('click','input:text',function(){
        $(this).select();
    
    });
    
//通过快速搜索选中类别
    $('#linkBox ul').on('click','li',function(){
        var classId=$(this).attr('itemId');
        var $radio= $('.accordion').find("[classId='"+classId+"']");
        $radio.trigger('click');
        //检查是否显示
        showParentAccor($radio);
        //设置input的值
        $('#searchText').val($(this).text());
        $('#linkBox').hide();
    });

//加载菜单  
    insertItem();
    
//隐藏第一类
    $('[classId="1000"]').trigger('click');
})

