Last indexfile from K-one was changed:

remko@ellen:/tmp$ diff index_kone.html index.html
149c149
< 				<h2 class="wsite-content-title">ik help uw paard in beweging<br /></h2>
---
> 				<div class="paragraph"><font size="6"><strong>ik help uw paard in beweging<br /><br /></strong></font>

Todo:

K-one, [27.03.18 12:10]
Just give it the class paragraph or set it in style

<div class="paragraph" style="text-align:left;">

can be changed to :
<h2 class="paragraph" style="text-align:left;">...

now let's change the font,

put    font-family:"Patua One"     in the style

<h2 class="paragraph" style="text-align:left; font-family:"Patua One";">

