function Fuzzy_matching(){
          $(".community-thinking").hide();
        community_name=[
            "城市花园","碧桂园欧洲城","碧桂园凤凰城","仙林悦城","恒大雅苑","恒大金碧天下","上怡新村","翠屏城","桥北新村","盛江花苑兰花园","永安花苑","香溢紫郡","保利中央公园","荣盛莉湖春晓","天润城第十二街区","丁家庄","冠城大通蓝郡"
        ]
        $(".community-name").bind("input propertychange",function(){
            val=$(".community-name").val();
            console.log(val);
            if(!EP_Chinese.test(val)){
               $(".community .check").addClass("h").html("请输入中文")
            }else{
                $(".community .check").html("");
                $(".summary-community").html(val);
                for(var i=0;i<community_name.length;i++){               //fuzzy matching
                    $("li.community-thinking-list").eq(i).html(community_name[i]);
                    if(community_name[i].indexOf(val)>-1){
                        $("li.community-thinking-list").eq(i).show();
                        $(".community-thinking").show();
                    }else{
                        $("li.community-thinking-list").eq(i).hide()
                    }
                   if(val==community_name[i]){
                     $(".community .check").removeClass("h").html("&#xe697;")
                   }
                    else{
                     $(".community .check").addClass("h").html("请确认小区名称")  
                   } 
                }    
            }                       
        })
        $("li.community-thinking-list").on("click",function(){
            name_list=$(this).html();
            $(".community-name").val(name_list);
            $(".community .check").removeClass("h").html("&#xe697;");
            $(".summary-community").html(name_list);
        })
        $(".community-name").on("blur",function(){
            $(".community .check").addClass("h").html("小区名称不为空")
        })  
        }