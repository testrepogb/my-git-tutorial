<!--Script by hscripts.com-->
<!-- more scripts @ https://www.hscripts.com -->
<script type="text/javascript">
var as = 1;
var bs = 3; function statusbar() {
var msg = "dancing script - hscripts.com";
var msg1 = "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";
var msg2 = "||||||||||||||||||";
var msg3 = "//////////////////";
var msg4 = "------------------";
if(as > 4)
as = 1;
if(bs < 1)
bs = 4;
timer = window.setTimeout("statusbar()",100);
var sds = eval("msg"+as);
var sds2 = eval("msg"+bs);
var ss =sds+"
"+msg+"
"+sds2;
window.status = ss;
as = as+1;
bs = bs-1;
}
statusbar(100);
</script>

