var checkdata=[
    {
        'classId':'0000',
        'parentId':'0',
        'name':'样本质量评估',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0100',
        'parentId':'0000',
        'name':'阅片满意',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0110',
        'parentId':'0100',
        'name':'有颈管细胞或化生细胞',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0120',
        'parentId':'0100',
        'name':'无颈管细胞或化生细胞',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0130',
        'parentId':'0100',
        'name':'其他影响质量指标',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0200',
        'parentId':'0000',
        'name':'阅片不满意',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0210',
        'parentId':'0200',
        'name':'鳞状细胞数量<5000',
        'color':'rgb(0,255,255)'
    },
    {
        'classId':'0220',
        'parentId':'0200',
        'name':'其他',
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
        'name':'放射治疗引起的细胞反应性改变',
        'color':'#FF6600'
    },   {
        'classId':'1123',
        'parentId':'1120',
        'name':'宫内节育器(IUD)引起的细胞反应性改变',
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
        'name':'腺癌-子宫颈管型(ECCA)',
        'color':'#663366'
    },    {
        'classId':'2242',
        'parentId':'2240',
        'name':'腺癌-子宫内膜型(EmCa)',
        'color':'#996699'
    },    {
        'classId':'2243',
        'parentId':'2240',
        'name':'腺癌-子宫外',
        'color':'#CC99CC'
    },    {
        'classId':'2244',
        'parentId':'2240',
        'name':'腺癌-非特指(NOS)',
        'color':'#CC6699'

    }


];

//建立包含所有select对象的数组
//数组中包含对象，每个对象有classid 和 name的键，与classdata中的内容相对应。
var checkItems=[];

//根据类别对象，在列表中创建选项
var createAccorCheckC=function(el){
    //如果已存在，则返回
    if($('.check-Accordion [classId="'+el.classId+'"]').length>0){
        return true;
    }
    //设置新元素内容
    var $newControl=$(`<div class='input-check' classId='${el.classId}'><input type="checkbox" name='type' checkId='${el.classId}'>${el.name}<span></span></div>`);

    if(el.parentId==='0'){
        $('.check-Accordion').append($newControl);
        //设置一级类别margin-left
        $newControl.css('marginLeft','10px');
        return true;
        }
    else{
        var $parentEl=$('.check-Accordion [classId="'+el.parentId+'"]');
        if($parentEl.length>0){
            if ($parentEl.next('.check-Accordion-panel').length == 0) {
                //修改类别,删除默认选项设置
                $parentEl.removeClass('input-check').addClass('check-Accordion-control');
                //修改相关内容
                $parentEl.append('<i class="fa fa-minus-square"></i>');
                $parentEl.after(`<div class='check-Accordion-panel'></div>`);
                var $panel=$parentEl.next('.check-Accordion-panel');
                $panel.css('marginLeft',$parentEl.css('marginLeft'));
                $panel.css('fontSize',returnPx($parentEl.css('fontSize'),-1));
                $panel.css('width',returnPx($parentEl.css('width'),20));
                //移除
                $parentEl.children('input').remove();
                $parentEl.children('.myColor').remove();
            }
            $parentEl.next('.check-Accordion-panel').append($newControl);
            //对子元素设置缩进格式
            //margin-left使用css设置 .select值为15px, panel和control对应均为10px，因为.select对象在panel容器内，为了与control对齐，补偿control右侧的border和padding之和5px。
            $newControl.css('width',returnPx($parentEl.css('width'),-20));
            return true;
        }
        else{
            //找不到父节点
            return false;

        }
    }

}

var insertItemCheck = function () {
    var insertsAll= new Promise(function(resolve,reject){
    checkdata.forEach(function (el, index) {
        //查找其父元素
        var thisEl = el;
        var findEl = [];
        var createBool = createAccorCheckC(thisEl);
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
            thisEl = results[0];
            createBool = createAccorCheckC(thisEl);
        }

    });
        resolve();
        });
    insertsAll.then(function(){
      checkItems=[];
        var $allSelects=$('.input-check');
        $allSelects.each(function(){
            checkItems.push({'classid':$(this).attr('classid'),'name':$(this).text()});
        }
        );

    })
    .then(function(){
      $('.check-Accordion [classId="1000"]').next('.check-Accordion-panel').slideToggle();
      $('.check-Accordion [classId="1000"]').children('i').removeClass('fa-minus-square');
      $('.check-Accordion [classId="1000"]').children('i').addClass('fa-plus-square');

    });
}

var findAllChecked=function(){
  const checkedArray= $('.check-Accordion input:checkbox:checked');
  var checkedData=[];
  for(let i=0;i<checkedArray.length;i++){
    checkedData.push($(checkedArray[i]).parent('.input-check').attr('classId'));
  }
  return checkedData;

}

var findCheckedNameById=function(idArray){
  var checkedNameArray=[];
  if(Array.isArray(idArray))
  for(let i=0;i<checkItems.length;i++){
    for(let j=0;j<idArray.length;j++){
      if(checkItems[i].classid===idArray[j]){
        checkedNameArray.push(checkItems[i].name);
      }
    }

  }
  return checkedNameArray;
}

$(function(){
  $('body').on('click','#check-cancle',function(){
    $('#pop').css('display','none');
    $('#checkList').css('display','none');

  });

  $('body').on('click','#check-yes',function(){
    console.log(findCheckedNameById(findAllChecked()));
    $('#pop').css('display','none');
    $('#checkList').css('display','none');

  });
  $('body').on('click','#checkSelect',function(){
    if($('#pop').css('display')!='block'){
        $('#pop').css('height',$(document).height());
        $('#pop').css('display','block');
        $('#checkList').css('left',($(document.body).width()/2)-210);
        $('#checkList').css('display','block');
    　
    }
  });
  //手风琴风格菜单 折叠
      $('.check-Accordion').on('click','.check-Accordion-control',function(e){

          e.preventDefault();
          if($(this).next('.check-Accordion-panel').is(':hidden')){
              $(this).children('i').removeClass('fa-plus-square');
              $(this).children('i').addClass('fa-minus-square');

          }
          else{
              $(this).children('i').addClass('fa-plus-square');
              $(this).children('i').removeClass('fa-minus-square');

          }
          $(this).next('.check-Accordion-panel').not('animated').slideToggle();

      });
      $('#checkList').on('click','.input-check',function(e){
        e.stopPropagation();
        if($(this).hasClass('checkBackground')){
          $(this).removeClass('checkBackground');
          $(this).children('input').prop('checked',false);
        }
        else{
          $(this).addClass('checkBackground');
          $(this).children('input').prop('checked',true);
        }

      });
  insertItemCheck();



})
