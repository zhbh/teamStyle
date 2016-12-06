var choiseQuestion = [
	{
		nid : 'q1',
		title : '着装',
		question : '上班时候着装有要求吗？',
		items : [ "宽松随意，没有要求", '不允许穿短裤拖鞋', '我是正装高富帅', '我们有最时尚的工服' ]
	},
	{
		nid : 'q2',
		title : '交流',
		question : '工作最常用的联系方式是？',
		items : [ '经常面对面交流', 'IM软件和邮件是真爱', '空中飞人，到处出差', '视频会议或者电话' ]
	},
	{
		nid : 'q3',
		title : 'CEO',
		question : '多久能见一次你家CEO？',
		items : [ '基本每天都见', '每周都能见到', '每月来一次','一年难得见一次' ]
	},
	{
		nid : 'q4',
		title : '资料',
		question : '工作的文档资料管理是？',
		items : [ '统一管理', '各自管理', '井井有条', '一团乱麻' ]
	},
	{
		nid : 'q5',
		title : '工位',
		question : '工作时你的位子宽敞吗？',
		items : [ '有点挤', '刚刚好', '特别宽敞', '工位是啥' ]
	},
	{
		nid : 'q6',
		title : '加班',
		question : '一个严肃的问题:加班吗？',
		items : [ '基本不需要', '比较少加班', '老大不走我不敢走', '需要倒班' ]
	},
	{
		nid : 'q7',
		title : '改变',
		question : '你的工作更倾向于？',
		items : [ '允许我将创造性的想法实现', '有正规的流程跟标准的操作' ]
	}
],

companyScore = [
	{
		name : 'Google',
		q1 : [1,0,0,0],
		q2 : [0,1,0,0],
		q3 : [1,1,0,0],
		q4 : [0,0,2,0],
		q5 : [2,0,0,0],
		q6 : [0,1,0,0],
		q7 : [1,0],
		total : 10
	},
	{
		name : 'Apple',
		q1 : [0,1,0,0],
		q2 : [0,1,0,1],
		q3 : [0,0,0,1],
		q4 : [0,0,1,0],
		q5 : [0,1,1,0],
		q6 : [0,1,0,0],
		q7 : [1,1],
		total : 10
	},
	{
		name : 'Amazon',
		q1 : [1,0,0,0],
		q2 : [0,1,0,1],
		q3 : [1,1,0,0],
		q4 : [0,0,0,1],
		q5 : [0,0,1,0],
		q6 : [0,1,0,1],
		q7 : [0,1],
		total : 10
	},
	{
		name : 'Facebook',
		q1 : [1,0,0,0],
		q2 : [0,1,0,0],
		q3 : [1,1,0,0],
		q4 : [0,0,0,2],
		q5 : [1,1,0,0],
		q6 : [0,1,0,0],
		q7 : [1,0],
		total : 10
	},
	{
		name : 'Microsoft',
		q1 : [0,1,1,0],
		q2 : [0,1,1,0],
		q3 : [0,0,0,1],
		q4 : [0,0,1,0],
		q5 : [0,0,2,0],
		q6 : [0,1,0,0],
		q7 : [0,1],
		total : 10
	},
	{
		name : 'Airbnb',
		q1 : [1,0,0,0],
		q2 : [0,0,1,1],
		q3 : [0,1,0,0],
		q4 : [0,1,0,1],
		q5 : [0,0,1,0],
		q6 : [1,1,0,0],
		q7 : [0,1],
		total : 10
	},
	{
		name : '富土康',
		q1 : [0,0,0,2],
		q2 : [1,0,0,1],
		q3 : [0,0,0,1],
		q4 : [1,0,0,0],
		q5 : [0,0,0,1],
		q6 : [0,0,0,2],
		q7 : [0,1],
		total : 10
	},
	{
		name : '宝洁',
		q1 : [0,1,2,0],
		q2 : [0,0,1,0],
		q3 : [0,0,0,1],
		q4 : [0,0,1,0],
		q5 : [0,1,1,0],
		q6 : [0,1,0,0],
		q7 : [0,1],
		total : 10
	},
	{
		name : '华为',
		q1 : [0,1,0,1],
		q2 : [0,1,1,0],
		q3 : [0,0,0,1],
		q4 : [1,0,0,0],
		q5 : [1,0,0,0],
		q6 : [0,0,1,1],
		q7 : [0,1],
		total : 10
	},
	{
		name : '阿里巴巴',
		q1 : [1,0,0,0],
		q2 : [0,1,0,0],
		q3 : [0,0,0,1],
		q4 : [0,1,1,0],
		q5 : [0,1,0,0],
		q6 : [0,1,2,0],
		q7 : [0,1],
		total : 10
	},
	{
		name : '百度',
		q1 : [1,0,0,0],
		q2 : [0,1,0,1],
		q3 : [0,1,1,0],
		q4 : [0,0,1,0],
		q5 : [0,0,1,0],
		q6 : [0,0,1,1],
		q7 : [1,0],
		total : 10
	},
	{
		name : '公务员',
		q1 : [0,2,0,0],
		q2 : [1,0,0,0],
		q3 : [0,0,0,1],
		q4 : [1,0,0,0],
		q5 : [0,0,1,0],
		q6 : [2,1,0,0],
		q7 : [0,1],
		total : 10
	},
	{
		name : '腾讯',
		q1 : [1,0,0,0],
		q2 : [0,1,0,0],
		q3 : [0,1,1,0],
		q4 : [0,1,1,0],
		q5 : [0,1,1,0],
		q6 : [0,0,1,0],
		q7 : [1,0],
		total : 10
	}
];

$(function(){
	function ChoiseItems( ) {
		this.questionNum = 0;
		this.curQuestionStr = '';
		this.choiseItems = choiseQuestion;
		
		this.answerItems = [];
	}
	
	ChoiseItems.prototype.loadingImages = function(){
        this.loading = true;
        var me = this,
        	total = this.choiseItems.length;
        for( var i = 0, j = this.choiseItems.length; i < j; i++ ){
			for( var k = 0; k < this.choiseItems[i].items.length; k++ ){
				var src = 'img/items/q' + ( i + 1 ) + '_' + k + '.png';
	            var image = new Image();
	            image.src = src;
	       
	            image.onerror = image.onload = function( e ){
	            	total--;
	                if( total === 0 ){
	                    $( '.ui-mask' ).addClass( 'fn-hide' );
	                }
	            }
			}
        }
   };
	
	ChoiseItems.prototype.resetItemsStatus = function( ) {
		$( 'li' ).removeClass( 'ui-status-seclected' );
		$( '.ui-question-frame' ).removeClass( 'fn-hide' );
		$( '.ui-answer' ).addClass( 'fn-hide' );
		$( '.ui-btn' ).addClass( 'ui-btn-disabled' );
	};
	
	ChoiseItems.prototype.selectedItemsStatus = function( ) {
		$( '.ui-question-frame' ).addClass( 'fn-hide' );
		$( '.ui-answer' ).removeClass( 'fn-hide' );
		$( '.ui-btn' ).removeClass( 'ui-btn-disabled' );
	};
	
	ChoiseItems.prototype.initEvent = function( ) {
		var me = this,
			selectedItemImgStr = '',
			selectedItemIndex = -1,
			countTimerFirst = 0,
			countTimerSecond = 0,
			animateToggle = false,
			timerOne = null,
			timerTwo = null,
			answerQueCmp = $( '.ui-answer-question' ),
			selectedImgCmp = $( '.ui-selected-image' );
				
		$( 'body' ).on( 'touchmove touchstart', function ( event ) {
		    event.preventDefault( );
		} );

		$( '.ui-choose-list > li' ).on( 'tap', function( e ) {
			var self = $( this );
			if( $( '.ui-btn' ).hasClass( 'ui-btn-disabled' ) ){
				me.selectedItemsStatus( );
			}
			
			if( selectedItemIndex === self.index( ) ) {
				return;
			}
			
			selectedItemIndex = self.index( );
			selectedItemImgStr = 'q' + ( me.questionNum + 1 ) + '_' + selectedItemIndex;
			
			$( 'li' ).removeClass( 'ui-status-seclected' );
			$( this ).addClass( 'ui-status-seclected' );
			
			$( '.ui-answer-title' ).html( $( '.ui-question-title' ).html( ) );
			$( '.ui-selected-item' ).attr( 'data-item', 'q' + ( me.questionNum + 1 ) );
			
			//动画
			if( answerQueCmp.html().length > 0 ) {
				answerQueCmp.addClass( 'animated fadeOut' );
				selectedImgCmp.addClass( 'animated fadeOut' );
					
				timerOne = setTimeout( function(){
					animateShow( );
				}, 500 );
				
			}else{
				animateShow( );
			}
			
			function animateShow( ){
				answerQueCmp.removeClass( 'animated fadeOut' ).addClass( 'animated fadeIn' );
				selectedImgCmp.removeClass( 'animated fadeOut' ).addClass( 'animated fadeIn' );
				
				answerQueCmp.html( self.children( '.ui-item' ).html( ) );
				selectedImgCmp.attr( 'data-item', selectedItemImgStr );
				
				setTimeout( function(){
					answerQueCmp.removeClass( 'animated fadeIn' );
					selectedImgCmp.removeClass( 'animated fadeIn' );
				}, 1000 );
			}
			
		} );
		
		$( '.ui-btn' ).on( 'tap', function( e ) {
			var isExistToggle = false;
			
			if( $( this ).hasClass( 'ui-btn-disabled' ) ) return;
			
			if( me.answerItems.length !== 0 ) {
				
				for(var i = 0; i < me.answerItems.length; i++ ) {
					if( me.answerItems[i].questionNum === 'q' + ( me.questionNum + 1 ) ) {
						me.answerItems[i].itemNum = selectedItemIndex;
						isExistToggle = true;
						break;
					}
				}
				
			}
			
			if( !isExistToggle ) {
				var selectedItemObj = {
						questionNum : 'q' + ( me.questionNum + 1 ),
						answerNum : selectedItemIndex
					};
					
				me.answerItems.push( selectedItemObj );
			}
			
			if( me.questionNum === 5 ) {
				$( '.ui-btn' ).html( '提交' );
			}
			
			if( me.questionNum < 6 ){
				me.nextItems( );
				selectedItemIndex = -1;
				answerQueCmp.html( '' ),
				selectedImgCmp.attr( 'data-item', '' );
			}else {
				var lastResult = me.countResult( );
				window.location.href = 'result.html?name=' + encodeURIComponent( lastResult.name ) + '&score=' + lastResult.score;
			}
			
		} );
	};
	
	ChoiseItems.prototype.getItems = function( ) {
		var index = this.questionNum;
		return this.choiseItems[ index ];
	};
	
	ChoiseItems.prototype.nextItems = function( ) {
		this.questionNum += 1;
		this.resetItemsStatus( );
		this.printItems( );
		
		if( this.questionNum === 6 ) {
			$( '.ui-question' ).after( '<div class="ui-mywork">我的工作</div>' );
		}
	};
	
	ChoiseItems.prototype.printItems = function( ) {
		var me = this,
			currentItems = this.getItems();
		
		$( '.ui-question-title' ).html( currentItems.title );
		$( '.ui-question-content' ).html( currentItems.question );
		
		
		if( me.questionNum === 6 ) {
			for( var i = 0; i < 4; i++ ){
				if( i === 2 ){
					$( 'li:eq(2)' ).css( 'visibility', 'hidden' );
				}else if( i === 3){
					$( 'li:eq(3)' ).css( 'display', 'none' );
				}else {
					$( '.ui-item:eq(' + i + ')' ).html( currentItems.items[ i ] );
				}
			}
		}else {
			for( var i = 0; i < 4; i++ ){
				$( '.ui-item:eq(' + i + ')' ).html( currentItems.items[ i ] );
			}
		}
	};
	
	ChoiseItems.prototype.countResult = function( ) {
		var me = this,
			ansItem = null,
			queNum = 0,
			itemNum = 0,
			itemScore = 0,
			itemsTotal = 0,
			itemsResult = 0,
			companyNum = 0,
			companyObj = {},
			allScoreResult = [];
		
		for(var i = 0; i < companyScore.length; i++ ) {
			itemsTotal = 0;
			itemsResult = 0;
			companyNum = companyScore[i];
			for( var j = 0; j < 7; j++ ){
				ansItem = me.answerItems[j];
				itemNum = ansItem.answerNum;
				queNum = ansItem.questionNum;
				itemScore = companyNum[queNum][itemNum];
				itemsTotal += itemScore;
			}
			
			itemsResult = parseInt( itemsTotal / companyNum.total * 100 );
			companyObj = {
				name : companyNum.name,
				score : itemsResult
			};
			
			allScoreResult.push( companyObj );
		}
		
		var maxScore = allScoreResult[0].score,
			maxCompanyName = allScoreResult[0].name;
		for( var k = 1; k < allScoreResult.length; k++ ) {
			if( maxScore < allScoreResult[k].score ) {
				maxScore = allScoreResult[k].score;
				maxCompanyName = allScoreResult[k].name;
			}
		}
		
		return {
			name : maxCompanyName,
			score : maxScore
		};
	};
	
	var curChoiseItems = new ChoiseItems( );
	
	curChoiseItems.loadingImages( );
	curChoiseItems.printItems( );
	curChoiseItems.initEvent( );
	
});
