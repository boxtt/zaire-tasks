<?
include("config/conn.php");
include("config/function.php");
include("config/xy.php");
$sj=date("Y-m-d H:i:s");
$getstr=$_GET[str];
//已有标签 a b c d e f g h i j k l m p s
$tit="资源列表";
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
<!--现在购买b-->
   <script type="text/javascript">
   var home_slide_data = 
   [
   <? $tpses="yjcode_tp where bh='".$row[bh]."'";$i=1;while1("*",$tpses);while($row1=mysql_fetch_array($res1)){?>
   <? if($i>1){?>,<? }?>{"title":"","onc":"","image":"../<?=$row1[tp]?>","thumb":"../<?=returnnotp($row1[tp],"-1")?>","mark":"<?=$i?>"}
   <? $i++;}?>
   ]; 
   $('.Homeslide').homeslide(home_slide_data,false,3000);
   </script>
<!--现在购买e-->   
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
<!--这个插件是瀑布流主插件函数必须-->
<script type="text/javascript" src="pubu/js/jquery.masonry.min.js"></script>
<!--这个插件只是为了扩展jquery的animate函数动态效果可有可无-->
<script type="text/javascript" src="pubu/js/jQeasing.js"></script>
<script type="text/javascript">
/*
	抛开瀑布流布局各种乱七八糟的算法，基于masonry的瀑布流，很是简单的，而且通过扩展animate,能实现瀑布流布局的晃动、弹球等效果。
	masonry还有很多参数我这里注解了常用的参数
 */
	$(function(){
			/*瀑布流开始*/
			var container = $('.waterfull');
			var loading=$('#imloading');
			// 初始化loading状态
			loading.data("on",true);
			/*判断瀑布流最大布局宽度，最大为1280*/
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
				isFitWidth: true,//是否根据浏览器窗口大小自动适应默认false
				isAnimated: false,//是否采用jquery动画进行重拍版
				isRTL:false,//设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
				isResizable: true,//是否自动布局默认true
				animationOptions: {
					duration: 800,
					easing: 'easeInOutBack',//如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
					queue: false//是否队列，从一点填充瀑布流
				}
			  });
			});
			/*模拟从后台获取到的数据*/
			var sqlJson=[{'title':'瀑布流其实就是几个函数的事！'}];
			/*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
			$(window).scroll(function(){
				if(!loading.data("on")) return;
				// 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
				var l1Num=$('#waterfull').find('.l1').length;
				var l1Arr=[];
				l1Arr[0]=$('#waterfull').find('.l1').eq(l1Num-1).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				l1Arr[1]=$('#waterfull').find('.l1').eq(l1Num-2).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				l1Arr[2]=$('#waterfull').find('.l1').eq(l1Num-3).offset().top+$('#waterfull').find('.l1').eq(l1Num-1)[0].offsetHeight;
				var maxTop=Math.max.apply(null,l1Arr);
				if(maxTop<$(window).height()+$(document).scrollTop()){
					//加载更多数据
					loading.data("on",false).fadeIn(800);
					(function(sqlJson){
						/*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
						if(l1Num>30){
							loading.text('就有这么多了！');
						}else{
							var html="";
							for(var i in sqlJson){
								html+="<li class='l1'><a href='####' class='a-img'><img src='"+sqlJson[i].src+"'></a>";
								html+="<h2 class='li-title'>"+sqlJson[i].title+"</h2>";
								html+="<p class='description'>"+sqlJson[i].intro+"</p><div class='qianm clearfloat'>";
								html+="<span class='sp1'><b>"+sqlJson[i].looked+"</b>浏览</span>";
								html+="<span class='sp2'>"+sqlJson[i].writer+"</span><span class='sp3'>"+sqlJson[i].date+"&nbsp;By</span></div></li>";		
							}
							/*模拟ajax请求数据时延时800毫秒*/
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
				 //创建一个Image对象，实现图片的预下载
				  img.src = url;
				  if (img.complete) {
					 return img.src;
				  }
				  img.onload = function () {
					return img.src;
				  };
			 };
			
			/*l1 hover效果*/
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

 <!--切换B-->
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
 <!--切换E-->


<div class="bfb bfbtoj">
<div class="yjcode">

 <div class="d1">
  会员：<strong><?=$inittjarr[0]+returncount("yjcode_user")?></strong> 位&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 资源：<strong><?=$inittjarr[1]+returncount("yjcode_pro where zt=0 and ifxj=0")?></strong> 个&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 成交：<strong><?=sprintf("%.0f",$inittjarr[3]+returnsum("money1*num","yjcode_order where ddzt<>'backsuc' and ddzt<>'close'"))?></strong> T币
 </div>
 
 <div class="d2"><img <? adwhile("gao_06");?></a></div>
 
</div>
</div>

<div class="yjcode">
  <div class="ad1"><? adwhile("gao_01",2)?></a></div> 



 
 
 
  <!--产品列表B-->
 <script language="javascript">
 userChecksj();
 </script>
<div class="prolist">

 <ul class="u0"><li class="l1"><span class="s0"><img src="<?=weburl?>homeimg/tj.png" width="25" height="25"></span><span class="s1">精品推荐</span><span class="s92"><a href="product/">查看更多 &gt;</a></span>
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
  <a class="s1 zktishi" title="喜欢它?那就先放入后宫收藏起来吧！"class="a1" id="a<?=$row[bh]?>" style="display:<?=$a1?>;" href="javascript:profavInto('<?=$row[bh]?>');">收藏<span class="bai"> 已售<?=$row[xsnum]?></span></a>
  <a class="sd1 zktishi" title="它已经收藏在后宫，等待您翻牌了！" class="a1" style="display:<?=$a2?>; font-size:13px;" href="<?=weburl?>/user/favpro.php">已收藏<span class="bai"> 已售<?=$row[xsnum]?></span></a>
  

  
  
  <a class="a3 zktishi" title="一见钟情？那就直接翻它的牌吧！" target="_blank" href="javascript:buyInto('<?=$row[bh]?>')"><span  class="bai"><?=returnjgdian(returnyhmoney($row[yhxs],$row[money2],$row[money3],$sj,$row[yhsj1],$row[yhsj2],$row[id]))?>T币</span> 购买</a>
 <input style="display:none" type="text" onChange="moneycha()" id="tkcnum" value="1" />
 <span class="s3"  style="display:none;"id="carnum<?=$i?>">1</span>
  </div>
    <div class="l5bot" style="bottom: -50px;">
	
  <span class="zk"><a href="product/search_j<?=$row1[id]?>v.html" target="_blank"><img class="zktishi" title="分类:<?=$row1[type1]?>,原位点击进入分类" src="../upload/type/type1_<?=$row1[id]?>.png"  width="23" height="23" /></a></span>
  <span id="carimg<?=$i?>_1" style="display:<?=$a1?>;"><img class="zktishi" title="加入购物车?" onClick="carInto1('<?=$row[bh]?>',<?=$i?>)" src="<?=weburl?>product/tesei/gouwuchek.png" /></span>
  <span id="carimg<?=$i?>_2" style="display:<?=$a2?>;"><img class="zktishi" title="已经加入购物车!" onClick="gourl('../user/car.php')" src="<?=weburl?>product/tesei/gouwuche.png" /></span>
  <? if($row[fhxs]==2 || $row[fhxs]==3 || $row[fhxs]==4){?><span><img  class="zktishi" title="网盘自动发货!" src="<?=weburl?>product/tesei/yunpan.png" /></span><? }?>
  <? if($row[fhxs]==1 ){?><span class="zk"><img class="zktishi" title="包安装的发货形式,文件将直接下载到服务器。平台管家免费为您监督并全程录像,安装时专业工具查毒查后门!拒绝安全隐患!" src="<?=weburl?>product/tesei/jdaz.png" /></span><? }?>
   <? if(1==$row[ifuserdj]){?><span class="zk"><img class="zktishi" title="会员有折扣!" src="<?=weburl?>product/tesei/vip.png" /></span><? }?>
   <? if($row2[baomoney]>0){?><span class="zk"><img class="zktishi" title="店主已交保证金：<?=$row2[baomoney]?>T币" src="<?=weburl?>product/tesei/bzj.png" /></span><? }?>
   <span class="zk"><img class="zktishi" title="图是图管家经杀毒软件及后门查杀工具检测无木马病毒无后门安全通过!" src="<?=weburl?>product/tesei/csjc.png" /></span>
   <? if(!empty($row[ysweb])){?><a href="../tem/gotourl.php?u=<?=$row[ysweb]?>" target="_blank"><img class="zktishi" title="可演示,测试实际效果,点击查看演示!" src="<?=weburl?>product/tesei/ysxg.png" /></a><? }?>
   
   </div>
 </li>
 
    <? }?>


   
 <? $ni++;}?>
  </div>
 </ul> 
</div> 
<!--合作伙伴B
<div class="indexcap fontyh">合作伙伴</div>

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
合作伙伴E-->

</div>

 <!--友情E-->
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
<!--**********右侧浮动结束***************-->
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