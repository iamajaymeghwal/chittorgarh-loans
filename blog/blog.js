(function(){
var n=document.getElementById('nav'),m=document.getElementById('menu');
if(m){m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('open');m.setAttribute('aria-expanded','false')}})}
// reading progress (posts)
var bar=document.getElementById('bar');
if(bar){var f=function(){var h=document.documentElement;var s=h.scrollTop/(h.scrollHeight-h.clientHeight||1);bar.style.width=Math.min(100,s*100)+'%'};window.addEventListener('scroll',f,{passive:true});f()}
// copy link
var cp=document.getElementById('copy');
if(cp){cp.addEventListener('click',function(){var u=location.href;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(function(){cp.textContent='Copied ✓'},function(){prompt('Copy this link',u)})})}
// listing filter
var q=document.getElementById('q'),chips=document.querySelectorAll('.chip'),cards=document.querySelectorAll('.card[data-cat]'),em=document.getElementById('empty'),cat='all';
function run(){var t=(q&&q.value||'').toLowerCase().trim(),shown=0;
cards.forEach(function(c){var ok=(cat==='all'||c.dataset.cat===cat)&&(!t||c.textContent.toLowerCase().indexOf(t)>-1);c.hidden=!ok;if(ok)shown++});
if(em)em.hidden=shown>0}
if(q)q.addEventListener('input',run);
chips.forEach(function(b){b.addEventListener('click',function(){cat=b.dataset.cat;chips.forEach(function(x){x.setAttribute('aria-pressed',x===b)});run()})});
})();
// EMI calculator (hub page)
(function(){
var a=document.getElementById('c-amt');if(!a)return;
var r=document.getElementById('c-rate'),y=document.getElementById('c-yrs');
var inr=new Intl.NumberFormat('en-IN',{maximumFractionDigits:0});
function fmt(v){return '₹'+inr.format(Math.round(v))}
function calc(){
 var P=+a.value,rate=+r.value,yrs=+y.value,n=yrs*12,m=rate/12/100;
 var emi=m===0?P/n:P*m*Math.pow(1+m,n)/(Math.pow(1+m,n)-1);
 var total=emi*n,intr=total-P;
 document.getElementById('o-amt').textContent=fmt(P);
 document.getElementById('o-rate').textContent=rate.toFixed(1)+'%';
 document.getElementById('o-yrs').textContent=yrs+(yrs===1?' year':' years');
 document.getElementById('r-emi').textContent=fmt(emi);
 document.getElementById('r-prin').textContent=fmt(P);
 document.getElementById('r-int').textContent=fmt(intr);
 document.getElementById('r-tot').textContent=fmt(total);
 document.getElementById('r-bar').style.width=(P/total*100).toFixed(1)+'%';
 var msg='Hello Chittorgarh Loans, I used your EMI calculator.\nLoan amount: '+fmt(P)+'\nInterest: '+rate.toFixed(1)+'%\nTenure: '+yrs+' years\nEMI: '+fmt(emi)+'\nPlease suggest the best lender options.';
 document.getElementById('c-wa').href='https://wa.me/916376007997?text='+encodeURIComponent(msg);
}
[a,r,y].forEach(function(e){e.addEventListener('input',calc)});calc();
})();
