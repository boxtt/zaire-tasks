<?
include("config/conn.php");
include("config/function.php");
include("config/xy.php");
$sj=date("Y-m-d H:i:s");
$getstr=$_GET[str];
//���б�ǩ a b c d e f g h i j k l m p s
$tit="��Դ�б�";
$ses=" where zt=0 and ifxj=0";
$ty1id=returnsx("j");if($ty1id!=-1){
 $sqlty1="select * from yjcode_type where admin=1 and id=".$ty1id;mysql_query("SET NAMES 'GBK'");$resty1=mysql_query($sqlty1);$rowty1=mysql_fetch_array($resty1);
 $ty1name=$rowty1[type1];$ses=$ses." and ty1id=".$ty1id;
 if(empty($rowty1[seotit])){$tit=$ty1name;}else{$tit=$rowty1[seotit];}
 $seokey=$rowty1[seokey];
 $seodes=$rowty1[seodes];

}
$nuid=returnuserid($_SESSION["SHOPUSER"]);

$ty2id=returnsx("k");if($ty2id!=-1){$ty2name=returntype(2,$ty2id);$ses=$ses." and ty2id=".$ty2id;$tit=$tit."/".$ty2name;}
$ty3id=returnsx("m");if($ty3id!=-1){$ty3name=returntype(3,$ty3id);$ses=$ses." and ty3id=".$ty3id;$tit=$tit."/".$ty3name;}
$ty4id=returnsx("i");if($ty4id!=-1){$ty4name=returntype(4,$ty4id);$ses=$ses." and ty4id=".$ty4id;$tit=$tit."/".$ty4name;}
$ty5id=returnsx("l");if($ty5id!=-1){$ty5name=returntype(5,$ty5id);$ses=$ses." and ty5id=".$ty5id;$tit=$tit."/".$ty5name;}
if(returnsx("s")!=-1){
 $skey=safeEncoding(returnsx("s"));
 $a=preg_split("/\s/",$skey);
 $bs="(";
 for($i=0;$i<=count($a);$i++){
 if(!empty($a[$i])){$bs=$bs."tit like '%".$a[$i]."%' and ";}
 }
 $ses=$ses." and ".$bs." tit<>'')";
 $tit=$tit."/".$skey;
}
if(returnsx("b")!=-1){$mon1=returnsx("b");$ses=$ses." and money2>=".$mon1;}
if(returnsx("c")!=-1){$mon2=returnsx("c");$ses=$ses." and money2<=".$mon2;}
if(returnsx("a")!=-1){$ifys=returnsx("a");$ses=$ses." and ysweb<>''";}
if(returnsx("d")!=-1){$ifzdfh=returnsx("d");$ses=$ses." and (fhxs=2 or fhxs=3 or fhxs=4)";}
if(returnsx("g")!=-1){$ifuserdj=returnsx("g");$ses=$ses." and ifuserdj=1";}

if(returnsx("p")!=-1){$page=returnsx("p");}else{$page=1;}
$px="order by lastsj desc";
$pxv=returnsx("f");
if($pxv==1){$px="order by lastsj asc";}
elseif($pxv==2){$px="order by xsnum desc";}
elseif($pxv==3){$px="order by xsnum asc";}
elseif($pxv==4){$px="order by djl desc";}
elseif($pxv==5){$px="order by djl asc";}
elseif($pxv==6){$px="order by money2 desc";}
elseif($pxv==7){$px="order by money2 asc";}

if(!empty($_SESSION[SHOPUSER])){$myuserid=returnuserid($_SESSION[SHOPUSER]);}
?>

<html>
<head>
<meta http-equiv="x-ua-compatible" content="ie=7" />
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta name="keywords" content="<?=$rowcontrol[webkey]?>">
<meta name="description" content="<?=$rowcontrol[webdes]?>">
<title><?=$rowcontrol[webtit]?> - <?=webname?></title>
<link rel="shortcut icon" href="img/favicon.ico" />
<link href="css/basic.css" rel="stylesheet" type="text/css" />
<link href="css/index.css" rel="stylesheet" type="text/css" />
<link href="homeimg/jquery.flexslider.css" rel="stylesheet" type="text/css" >
<script language="javascript" src="js/basic.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script language="javascript" src="js/index.js"></script>
<script language="javascript" type="text/javascript" src="homeimg/ss.js"></script>
<script language="javascript" src="../js/layer.js"></script>

<? if(empty($rowcontrol[ifwap])){?>
<script language="javascript">
if(is_mobile()) {document.location.href= '<?=weburl?>m/';}
</script>
<? }?>
<script language="javascript" src="<?=weburl?>product/view.js"></script>
<script language="javascript" src="<?=weburl?>product/index.js"></script>
<!--���ڹ���b-->
   <script type="text/javascript">
   var home_slide_data = 
   [
   <? $tpses="yjcode_tp where bh='".$row[bh]."'";$i=1;while1("*",$tpses);while($row1=mysql_fetch_array($res1)){?>
   <? if($i>1){?>,<? }?>{"title":"","onc":"","image":"../<?=$row1[tp]?>","thumb":"../<?=returnnotp($row1[tp],"-1")?>","mark":"<?=$i?>"}
   <? $i++;}?>
   ]; 
   $('.Homeslide').homeslide(home_slide_data,false,3000);
   </script>
<!--���ڹ���e-->   
<link rel="stylesheet" type="text/css" href="<?=weburl?>product/css/zktishister.css" />
<script type="text/javascript">
	$(document).ready(function() {
		 $('.zktishi').zktishister();
	});
</script>
<link rel="stylesheet" type="text/css" href="pubu/style/base.css">
<link rel="stylesheet" type="text/css" href="pubu/style/index.css">
<!--[if lt IE 9]>
	<script src="pubu/js/css3-mediaqueries.js"></script>
<![endif]-->
	<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="pubu/js/jQueryColor.js"></script>
<!--���������ٲ����������������-->
<script type="text/javascript" src="pubu/js/jquery.masonry.min.js"></script>
<!--������ֻ��Ϊ����չjquery��animate������̬Ч�����п���-->
<script type="text/javascript" src="pubu/js/jQeasing.js"></script>
<script type="text/javascript">
/*
	�׿��ٲ������ָ������߰�����㷨������masonry���ٲ��������Ǽ򵥵ģ�����ͨ����չanimate,��ʵ���ٲ������ֵĻζ��������Ч����
	masonry���кܶ����������ע���˳��õĲ���
 */
	$(function(){
			/*�ٲ�����ʼ*/
			var container = $('.waterfull');
			var loading=$('#imloading');
			// ��ʼ��loading״̬
			loading.data("on",true);
			/*�ж��ٲ�����󲼾ֿ�ȣ����Ϊ1280*/
			function tores(){
				var tmpWid=$(window).width();
				if(tmpWid>1280){
					tmpWid=1280;
				}else{
					var column=Math.floor(tmpWid/276);
					tmpWid=column*276;
				}
				$('.waterfull').width(tmpWid);
			}
			tores();
			$(window).resize(function(){
				tores();
			});
			container.imagesLoaded(function(){
			  container.masonry({
				columnWidth: 276,
				l1Selector : '.l1',
				isFitWidth: true,//�Ƿ������������ڴ�С�Զ���ӦĬ��false
				isAnimated: false,//�Ƿ����jquery�����������İ�
				isRTL:false,//���ò��ֵ����з�ʽ��������λש��ʱ���Ǵ����������л��Ǵ����������С�Ĭ��ֵΪfalse������������
				isResizable: true,//�Ƿ��Զ�����Ĭ��true
				animationOptions: {
					duration: 800,
					easing: 'easeInOutBack',//�����������jQeasing����Ϳ�����Ӷ�Ӧ�Ķ�̬����Ч�������û����ɾ�����У�Ĭ�������ٱ仯
					queue: false//�Ƿ���У���һ������ٲ���
				}
			  });
			});
			/*ģ��Ӻ�̨��ȡ��������*/
			var sqlJson=[{'title':'�ٲ�����ʵ���Ǽ����������£�'}];
			/*��Ӧ��ͨ��ajax�Ӻ�̨�����������sqljson������Ȼ�󣬱�����������䣬����������sqlJson��ģ��һ������*/
			$(window).scroll(function(){
				if(!loading.data("on")) return;
				// ���������ٲ������о��붥����󣬽����ڹ���������ʱ��������ajax���󣬷����ܶ�����ֻ�о����һ�֣��������һ��
				var l1Num=$('#waterfull').find('.l1').length;
				var l1Arr=[];
				l1Arr[0]=$('#waterfull').find('.l1').eq(l1Num-1).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				l1Arr[1]=$('#waterfull').find('.l1').eq(l1Num-2).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				l1Arr[2]=$('#waterfull').find('.l1').eq(l1Num-3).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				var maxTop=Math.max.apply(null,l1Arr);
				if(maxTop<$(window).height()+$(document).scrollTop()){
					//���ظ�������
					loading.data("on",false).fadeIn(800);
					(function(sqlJson){
						/*�������ݺ�̨���ص��������ж��Ƿ�����з�ҳ�������ݼ����������������30�Ͳ��ڼ�������*/
						if(l1Num>30){
							loading.text('������ô���ˣ�');
						}else{
							var html="";
							for(var i in sqlJson){
								html+="<li class='l1'><a href='####' class='a-img'><img src='"+sqlJson[i].src+"'></a>";
								html+="<h2 class='li-title'>"+sqlJson[i].title+"</h2>";
								html+="<p class='description'>"+sqlJson[i].intro+"</p><div class='qianm clearfloat'>";
								html+="<span class='sp1'><b>"+sqlJson[i].looked+"</b>���</span>";
								html+="<span class='sp2'>"+sqlJson[i].writer+"</span><span class='sp3'>"+sqlJson[i].date+"&nbsp;By</span></div></li>";		
							}
							/*ģ��ajax��������ʱ��ʱ800����*/
							var time=setTimeout(function(){
								$(html).find('img').each(function(index){
									loadImage($(this).attr('src'));
								})
								var $newElems = $(html).css({ opacity: 0}).appendTo(container);
								$newElems.imagesLoaded(function(){
									$newElems.animate({ opacity: 1},800);
									container.masonry( 'appended', $newElems,true);
									loading.data("on",true).fadeOut();
									clearTimeout(time);
								});
							},800)
						}
					})(sqlJson);
				}
			});
			function loadImage(url) {
				 var img = new Image(); 
				 //����һ��Image����ʵ��ͼƬ��Ԥ����
				  img.src = url;
				  if (img.complete) {
					 return img.src;
				  }
				  img.onload = function () {
					return img.src;
				  };
			 };
			
			/*l1 hoverЧ��*/
			var rbgB=['#71D3F5','#F0C179','#F28386','#8BD38B'];
			$('#waterfull').on('mouseover','.l1',function(){
				var random=Math.floor(Math.random() * 4);
				$(this).stop(true).animate({'backgroundColor':rbgB[random]},1000);
			});
			$('#waterfull').on('mouseout','.l1',function(){
				$(this).stop(true).animate({'backgroundColor':'#fff'},1000);
			});
	})
</script>
</head>
<body>
<? 
autoAD("ADI00");
while1("*","yjcode_ad where adbh='ADI00' and zt=0 order by xh asc");while($row1=mysql_fetch_array($res1)){
$tp="gg/".$row1[bh].".".$row1[jpggif];
$image_size= getimagesize($tp);
?>
<div class="topbanner_hj" style="background:url(<?=$tp?>) no-repeat center 0;height:<?=$image_size[1]?>px;"><a href="<?=$row1[aurl]?>" target="_blank"></a></div>
<? }?>



<? include("tem/top.html");?>

<? include("tem/top1.html");?>
<span id="leftnone" style="display:none">0</span>
<script language="javascript">
leftmenuover();
yhifdis(0);
document.getElementById("topmenu1").className="a1";
</script>

 <!--�л�B-->
 <div class="banner" id="banner" >
 <? autoAD("gao_qh");$i=0;while1("*","yjcode_ad where adbh='gao_qh' and zt=0 order by xh asc");while($row1=mysql_fetch_array($res1)){?>
 <a href="<?=$row1[aurl]?>" class="d1" target="_blank" style="background:url(gg/<?=$row1[bh]?>.<?=$row1[jpggif]?>) center no-repeat;"></a>
 <? $i++;}?>
 <div class="d2" id="banner_id">
 <ul style="margin-left:-<?=2*$i/2?>px;">
 <? for($j=0;$j<$i;$j++){?><li></li><? }?>
 </ul>
 </div>
 </div>
 <script type="text/javascript">banner();</script>
 <!--�л�E-->


<div class="bfb bfbtoj">
<div class="yjcode">

 <div class="d1">
  ��Ա��<strong><?=$inittjarr[0]+returncount("yjcode_user")?></strong> λ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 ��Դ��<strong><?=$inittjarr[1]+returncount("yjcode_pro where zt=0 and ifxj=0")?></strong> ��&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 �ɽ���<strong><?=sprintf("%.0f",$inittjarr[3]+returnsum("money1*num","yjcode_order where ddzt<>'backsuc' and ddzt<>'close'"))?></strong> T��
 </div>
 
 <div class="d2"><img <? adwhile("gao_06");?></a></div>
 
</div>
</div>

<div class="yjcode">
  <div class="ad1"><? adwhile("gao_01",2)?></a></div> 



 
 
 
  <!--��Ʒ�б�B-->
 <script language="javascript">
 userChecksj();
 </script>
<div class="prolist">

 <ul class="u0"><li class="l1"><span class="s0"><img src="<?=weburl?>homeimg/tj.png" width="25" height="25"></span><span class="s1">��Ʒ�Ƽ�</span><span class="s92"><a href="product/">�鿴���� &gt;</a></span>
</li> </ul>
    <ul class="u1"> 
	<div class="waterfull clearfloat" id="waterfull">
	
 <?
 autoAD("shang_02");
 $sqlad="select * from yjcode_ad where adbh='shang_02' and zt=0 order by xh asc";mysql_query("SET NAMES 'GBK'");$resad=mysql_query($sqlad);
 $ni=1;
 while1("*","yjcode_type where admin=1 and (iftj is null or iftj=0) order by xh asc");
 $my_result = $res1;
 while($row1=mysql_fetch_array($my_result)){
 ?>

   <?
   while0("*","yjcode_pro where ifxj=0 and zt=0 and iftj>0 and ty1id=".$row1[id]." order by iftj asc limit 28");while($row=mysql_fetch_array($res)){
	   while1("id,uqq,shopname,baomoney","yjcode_user where id=".$row[userid]);$row2=mysql_fetch_array($res1);
	   
   $au="product/view".$row[id].".html";
   $money1=returnyhmoney($row[yhxs],$row[money2],$row[money3],$sj,$row[yhsj1],$row[yhsj2],$row[id]);
  
   ?>

 <li class="l1"> 
  <a target="_blank" href="<?=$au?>" class="a1"><img class="zktishi" title="<?=strgb2312($row[tit],0,37)?>" src="<?=returntppd(returntp("bh='".$row[bh]."'","-2"),"img/none180x180.gif")?>" width="252" height="auto" ></a>
  <div class="d1">

  <?
  $a1="";
  $a2="none";
  if(!empty($myuserid)){
   if(panduan("*","yjcode_car where userid=".$myuserid." and probh='".$row[bh]."'")==1){$a1="none";$a2="";}
  }
  ?>


  
   <? 
  $a1="none";$a2="none";
  if($_SESSION["SHOPUSER"]==""){$a1="";}else{
  if(panduan("*","yjcode_profav where probh='".$row[bh]."' and userid=".$myuserid."")==1){$a2="";}else{$a1="";}
  }
  ?>
  <a class="s1 zktishi" title="ϲ����?�Ǿ��ȷ�����ղ������ɣ�"class="a1" id="a<?=$row[bh]?>" style="display:<?=$a1?>;" href="javascript:profavInto('<?=$row[bh]?>');">�ղ�<span class="bai"> ����<?=$row[xsnum]?></span></a>
  <a class="sd1 zktishi" title="���Ѿ��ղ��ں󹬣��ȴ��������ˣ�" class="a1" style="display:<?=$a2?>; font-size:13px;" href="<?=weburl?>/user/favpro.php">���ղ�<span class="bai"> ����<?=$row[xsnum]?></span></a>
  

  
  
  <a class="a3 zktishi" title="һ�����飿�Ǿ�ֱ�ӷ������ưɣ�" target="_blank" href="javascript:buyInto('<?=$row[bh]?>')"><span  class="bai"><?=returnjgdian(returnyhmoney($row[yhxs],$row[money2],$row[money3],$sj,$row[yhsj1],$row[yhsj2],$row[id]))?>T��</span> ����</a>
 <input style="display:none" type="text" onChange="moneycha()" id="tkcnum" value="1" />
 <span class="s3"  style="display:none;"id="carnum<?=$i?>">1</span>
  </div>
    <div class="l5bot" style="bottom: -50px;">
	
  <span class="zk"><a href="product/search_j<?=$row1[id]?>v.html" target="_blank"><img class="zktishi" title="����:<?=$row1[type1]?>,ԭλ����������" src="../upload/type/type1_<?=$row1[id]?>.png"  width="23" height="23" /></a></span>
  <span id="carimg<?=$i?>_1" style="display:<?=$a1?>;"><img class="zktishi" title="���빺�ﳵ?" onClick="carInto1('<?=$row[bh]?>',<?=$i?>)" src="<?=weburl?>product/tesei/gouwuchek.png" /></span>
  <span id="carimg<?=$i?>_2" style="display:<?=$a2?>;"><img class="zktishi" title="�Ѿ����빺�ﳵ!" onClick="gourl('../user/car.php')" src="<?=weburl?>product/tesei/gouwuche.png" /></span>
  <? if($row[fhxs]==2 || $row[fhxs]==3 || $row[fhxs]==4){?><span><img  class="zktishi" title="�����Զ�����!" src="<?=weburl?>product/tesei/yunpan.png" /></span><? }?>
  <? if($row[fhxs]==1 ){?><span class="zk"><img class="zktishi" title="����װ�ķ�����ʽ,�ļ���ֱ�����ص���������ƽ̨�ܼ����Ϊ���ල��ȫ��¼��,��װʱרҵ���߲鶾�����!�ܾ���ȫ����!" src="<?=weburl?>product/tesei/jdaz.png" /></span><? }?>
   <? if(1==$row[ifuserdj]){?><span class="zk"><img class="zktishi" title="��Ա���ۿ�!" src="<?=weburl?>product/tesei/vip.png" /></span><? }?>
   <? if($row2[baomoney]>0){?><span class="zk"><img class="zktishi" title="�����ѽ���֤��<?=$row2[baomoney]?>T��" src="<?=weburl?>product/tesei/bzj.png" /></span><? }?>
   <span class="zk"><img class="zktishi" title="ͼ��ͼ�ܼҾ�ɱ����������Ų�ɱ���߼����ľ�����޺��Ű�ȫͨ��!" src="<?=weburl?>product/tesei/csjc.png" /></span>
   <? if(!empty($row[ysweb])){?><a href="../tem/gotourl.php?u=<?=$row[ysweb]?>" target="_blank"><img class="zktishi" title="����ʾ,����ʵ��Ч��,����鿴��ʾ!" src="<?=weburl?>product/tesei/ysxg.png" /></a><? }?>
   
   </div>
 </li>
 
    <? }?>


   
 <? $ni++;}?>
  </div>
 </ul> 
</div> 
<!--�������B
<div class="indexcap fontyh">�������</div>

<div class="mr_frbox">
  <img class="mr_frBtnL prev" src="homeimg/mfrL.jpg" width="28" height="46" />
  <div class="mr_frUl">
  <ul>
   
	 <? autoAD("ADI13");while0("*","yjcode_ad where adbh='ADI13' and zt=0 order by xh asc");while($row=mysql_fetch_array($res)){?>
 
	<li><a href="<?=$row[aurl]?>" target="_blank"> <img alt="<?=$row[tit]?>" border=0 src="gg/<?=$row[bh]?>.<?=$row[jpggif]?>" width="140" height="49"></a></li>
 <? }?>
    </ul>
  </div>
  <img class="mr_frBtnR next" src="homeimg/mfrR.jpg" width="28" height="46" />
</div>
<script language="javascript">
$(".mr_frUl ul li img").hover(function(){$(this).css("border-color","#A0C0EB");},function(){$(this).css("border-color","#d8d8d8")});
jQuery(".mr_frbox").slide({titCell:"",mainCell:".mr_frUl ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:7});
</script>
�������E-->

</div>

 <!--����E-->
<div class="yjcode10"></div>
</div>
</div>

</div>
<? include("tem/bottom.html");?>
<script language="javascript">
$(function(){
 $('.flexslider').flexslider({
 controlNav: false
 });
 $('.flexslider2').cxScroll({
 direction: "top",
 step:5 
 });
});
</script>
<!--**********�Ҳม������***************-->
<script language="javascript">
$(".prolist .u1 .l1").mouseenter(function () {
    $(this).find('.d1').eq(0).stop().animate({'top': '12px'}, 200);
});
$(".prolist .u1 .l1").mouseleave(function () {
    $(this).find('.d1').eq(0).stop().animate({'top': '-50px'}, 200);
});
</script>
<script language="javascript">
$(".prolist .u1 .l1").mouseenter(function () {
    $(this).find('.l5bot').eq(0).stop().animate({'bottom': '-15px'}, 200);
});
$(".prolist .u1 .l1").mouseleave(function () {
    $(this).find('.l5bot').eq(0).stop().animate({'bottom': '-50px'}, 200);
});
</script>
</body>
</html>