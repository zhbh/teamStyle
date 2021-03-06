var companyObj = {
	'Google' : {
		nid : 'google',
		slogen : '就成Google了（小心别被404哦～）'
	},
	'Apple' : {
		nid : 'apple',
		slogen : '就能改变世界了'
	},
	'Amazon' : {
		nid : 'amazon',
		slogen : '成为用无人机送快递的男人'
	},
	'Facebook' : {
		nid : 'facebook',
		slogen : '就能和扎克伯格一起学中文了'
	},
	'Microsoft' : {
		nid : 'microsoft',
		slogen : '就成为西雅图养老俱乐部了'
	},
	'Airbnb' : {
		nid : 'airbnb',
		slogen : '就能穿越整个世界去睡TA'
	},
	'富土康' : {
		nid : 'fusikang',
		slogen : '可以和张全蛋一起接待外宾'
	},
	'宝洁' : {
		nid : 'pg',
		slogen : '争取一个卖洗发水的资格'
	},
	'华为' : {
		nid : 'huawei',
		slogen : '争取加入华为阿非利加洲外派大军'
	},
	'阿里巴巴' : {
		nid : 'alibaba',
		slogen : '和马云一起笑傲江湖'
	},
	'百度' : {
		nid : 'baidu',
		slogen : '全家桶在召唤你～'
	},
	'公务员' : {
		nid : 'gongwuyuan',
		slogen : '考上全世界最神圣的职业。祝福你！'
	},
	'腾讯' : {
		nid : 'tengxun',
		slogen : '考上全世界最神圣的职业。祝福你！'
	}
};

$(function(){
	window.onload = function() {
		$( '.ui-loading' ).addClass( 'fn-hide' );
		$( '.ui-result-detail' ).removeClass( 'fn-hide' ).addClass( 'ui-animate-round' );
	};
	
	function ResultShare( ) {
		var urlObj = this.getURLObject( );
		
		this.companyName = urlObj.name;
		this.score = urlObj.score;
	}
	
	ResultShare.prototype.countStarNum = function() {
		var starNum = parseInt( this.score / 10 ),
			starListObj = $( '.ui-star-list li' );
		
		for( var i = starNum; i > 0; i-- ){
			starListObj.eq( 10 - i ).addClass( 'ui-star-light' );
		}
	};
	
	ResultShare.prototype.print = function() {
		var me = this;
		
		$( '.ui-company-name' ).html( me.companyName );
		$( '.ui-detail-card' ).attr( 'data-company', companyObj[ me.companyName ]['nid'] );
		$( '.ui-card-photo' ).attr( 'src', 'img/company/' + companyObj[ me.companyName ]['nid'] + '.png' );
		$( '.ui-company-slogen' ).html( companyObj[ me.companyName ]['slogen']  );
		
		me.countStarNum( );
	};
	
	ResultShare.prototype.initEvent = function() {
		$( 'body' ).on( 'touchmove touchstart', function ( event ) {
		    event.preventDefault( );
		} );

		$( '.ui-content' ).swipeUp( function( e ) {
		
	        $(this).removeClass( 'fn-move-prev' ).addClass( 'fn-move-next' );
		
	    } ).swipeDown( function( e ) {
	     
	        $( this ).removeClass( 'fn-move-next' ).addClass( 'fn-move-prev' );
	        
	    } );
	        
		
		$( '.ui-arrow' ).on( 'tap', function( e ) {
			$( '.ui-content' ).removeClass( 'fn-move-prev' ).addClass( 'fn-move-next' );
		} );
		
		$( '.ui-btn' ).on( 'tap', function( e ) { 
			$( '.ui-mask' ).hasClass( 'fn-hide' ) ? $( '.ui-mask' ).removeClass( 'fn-hide' ) : $( '.ui-mask' ).addClass( 'fn-hide' );
		} );
		
		$( '.ui-mask' ).on( 'tap', function( e ) { 
			$( this ).addClass( 'fn-hide' );
		} );
		
	};
	
	ResultShare.prototype.getURLObject = function( url ) {
	    url = url == null ? window.location.href : url;
	    
	    var search = url.substring( url.lastIndexOf( '?' ) + 1 ),
	    	obj = {},
	    	reg = /([^?&=]+)=([^?&=]*)/g;
	    	
	    search.replace(reg, function (rs, $1, $2) {
	        var name = decodeURIComponent($1);
	        var val = decodeURIComponent($2);                
	        val = String(val);
	        obj[name] = val;
	        return rs;
	    });
	    
	    return obj;
	}
	
	var resultShareObj = new ResultShare( );
	
	resultShareObj.initEvent( );
	resultShareObj.print( );
});
