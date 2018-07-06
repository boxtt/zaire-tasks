webpackJsonp([0], [
  /* 0 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (ReactDOM, React) {
      /**
       * 提前导入必备模块
       */
      'use strict';

      __webpack_require__(159);
      __webpack_require__(166);
      __webpack_require__(168);

      // 以下文件需要被执行一遍,以让程序得到某种支持
      __webpack_require__(279);

      //程序初始化(环境，用户，事件监听)
      __webpack_require__(280);

      /**
       * 整体样式
       */
      __webpack_require__(281);

      var App = __webpack_require__(160);
      ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

      //暴露到全局，方便调试
      __webpack_require__(300);
      __webpack_require__(301);
      __webpack_require__(302);

      /**
       * 页面的最初始文件(所有样式，脚本由load.js加载)
       */
      __webpack_require__(303);
      __webpack_require__(304);
      __webpack_require__(305);
      __webpack_require__(306);
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(1), __webpack_require__(147)))

    /***/
  },
  /* 1 */,
  /* 2 */,
  /* 3 */,
  /* 4 */,
  /* 5 */,
  /* 6 */,
  /* 7 */,
  /* 8 */,
  /* 9 */,
  /* 10 */,
  /* 11 */,
  /* 12 */,
  /* 13 */,
  /* 14 */,
  /* 15 */,
  /* 16 */,
  /* 17 */,
  /* 18 */,
  /* 19 */,
  /* 20 */,
  /* 21 */,
  /* 22 */,
  /* 23 */,
  /* 24 */,
  /* 25 */,
  /* 26 */,
  /* 27 */,
  /* 28 */,
  /* 29 */,
  /* 30 */,
  /* 31 */,
  /* 32 */,
  /* 33 */,
  /* 34 */,
  /* 35 */,
  /* 36 */,
  /* 37 */,
  /* 38 */,
  /* 39 */,
  /* 40 */,
  /* 41 */,
  /* 42 */,
  /* 43 */,
  /* 44 */,
  /* 45 */,
  /* 46 */,
  /* 47 */,
  /* 48 */,
  /* 49 */,
  /* 50 */,
  /* 51 */,
  /* 52 */,
  /* 53 */,
  /* 54 */,
  /* 55 */,
  /* 56 */,
  /* 57 */,
  /* 58 */,
  /* 59 */,
  /* 60 */,
  /* 61 */,
  /* 62 */,
  /* 63 */,
  /* 64 */,
  /* 65 */,
  /* 66 */,
  /* 67 */,
  /* 68 */,
  /* 69 */,
  /* 70 */,
  /* 71 */,
  /* 72 */,
  /* 73 */,
  /* 74 */,
  /* 75 */,
  /* 76 */,
  /* 77 */,
  /* 78 */,
  /* 79 */,
  /* 80 */,
  /* 81 */,
  /* 82 */,
  /* 83 */,
  /* 84 */,
  /* 85 */,
  /* 86 */,
  /* 87 */,
  /* 88 */,
  /* 89 */,
  /* 90 */,
  /* 91 */,
  /* 92 */,
  /* 93 */,
  /* 94 */,
  /* 95 */,
  /* 96 */,
  /* 97 */,
  /* 98 */,
  /* 99 */,
  /* 100 */,
  /* 101 */,
  /* 102 */,
  /* 103 */,
  /* 104 */,
  /* 105 */,
  /* 106 */,
  /* 107 */,
  /* 108 */,
  /* 109 */,
  /* 110 */,
  /* 111 */,
  /* 112 */,
  /* 113 */,
  /* 114 */,
  /* 115 */,
  /* 116 */,
  /* 117 */,
  /* 118 */,
  /* 119 */,
  /* 120 */,
  /* 121 */,
  /* 122 */,
  /* 123 */,
  /* 124 */,
  /* 125 */,
  /* 126 */,
  /* 127 */,
  /* 128 */,
  /* 129 */,
  /* 130 */,
  /* 131 */,
  /* 132 */,
  /* 133 */,
  /* 134 */,
  /* 135 */,
  /* 136 */,
  /* 137 */,
  /* 138 */,
  /* 139 */,
  /* 140 */,
  /* 141 */,
  /* 142 */,
  /* 143 */,
  /* 144 */,
  /* 145 */,
  /* 146 */,
  /* 147 */,
  /* 148 */,
  /* 149 */,
  /* 150 */,
  /* 151 */,
  /* 152 */,
  /* 153 */,
  /* 154 */,
  /* 155 */,
  /* 156 */,
  /* 157 */,
  /* 158 */,
  /* 159 */
  /***/ function (module, exports, __webpack_require__) {



    //APP
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }

    var _appAppJs = __webpack_require__(160);

    var _appAppJs2 = _interopRequireDefault(_appAppJs);

    // tools

    var _toolsBack_topBack_topJs = __webpack_require__(217);

    var _toolsBack_topBack_topJs2 = _interopRequireDefault(_toolsBack_topBack_topJs);

    var _toolsDialogDialogJs = __webpack_require__(219);

    var _toolsDialogDialogJs2 = _interopRequireDefault(_toolsDialogDialogJs);

    var _toolsFeedback_panelFeedback_panelJs = __webpack_require__(214);

    var _toolsFeedback_panelFeedback_panelJs2 = _interopRequireDefault(_toolsFeedback_panelFeedback_panelJs);

    var _toolsLoading_animLoading_animJs = __webpack_require__(221);

    var _toolsLoading_animLoading_animJs2 = _interopRequireDefault(_toolsLoading_animLoading_animJs);

    var _toolsStatic_fnStatic_fnJs = __webpack_require__(223);

    var _toolsStatic_fnStatic_fnJs2 = _interopRequireDefault(_toolsStatic_fnStatic_fnJs);

    var _toolsMerge_tips_coverMerge_tips_coverJs = __webpack_require__(224);

    var _toolsMerge_tips_coverMerge_tips_coverJs2 = _interopRequireDefault(_toolsMerge_tips_coverMerge_tips_coverJs);

    // 头部相关的

    var _headerDrop_down_menuDrop_down_menuJs = __webpack_require__(226);

    var _headerDrop_down_menuDrop_down_menuJs2 = _interopRequireDefault(_headerDrop_down_menuDrop_down_menuJs);

    var _headerHeader_menuHeader_menuJs = __webpack_require__(228);

    var _headerHeader_menuHeader_menuJs2 = _interopRequireDefault(_headerHeader_menuHeader_menuJs);

    var _headerLogin_menuLogin_menuJs = __webpack_require__(230);

    var _headerLogin_menuLogin_menuJs2 = _interopRequireDefault(_headerLogin_menuLogin_menuJs);

    var _headerCreate_noteCreate_noteJs = __webpack_require__(232);

    var _headerCreate_noteCreate_noteJs2 = _interopRequireDefault(_headerCreate_noteCreate_noteJs);

    // 搜索

    var _searchSearchJs = __webpack_require__(234);

    var _searchSearchJs2 = _interopRequireDefault(_searchSearchJs);

    // note相关

    var _noteNote_listNote_listJs = __webpack_require__(236);

    var _noteNote_listNote_listJs2 = _interopRequireDefault(_noteNote_listNote_listJs);

    var _noteNoteNoteJs = __webpack_require__(238);

    var _noteNoteNoteJs2 = _interopRequireDefault(_noteNoteNoteJs);

    var _noteNote_titleNote_titleJs = __webpack_require__(240);

    var _noteNote_titleNote_titleJs2 = _interopRequireDefault(_noteNote_titleNote_titleJs);

    var _noteNote_contentNote_contentJs = __webpack_require__(242);

    var _noteNote_contentNote_contentJs2 = _interopRequireDefault(_noteNote_contentNote_contentJs);

    var _noteNote_metaNote_metaJs = __webpack_require__(244);

    var _noteNote_metaNote_metaJs2 = _interopRequireDefault(_noteNote_metaNote_metaJs);

    var _noteNote_opNote_opJs = __webpack_require__(246);

    var _noteNote_opNote_opJs2 = _interopRequireDefault(_noteNote_opNote_opJs);

    var _noteNote_share_panelNote_share_panelJs = __webpack_require__(248);

    var _noteNote_share_panelNote_share_panelJs2 = _interopRequireDefault(_noteNote_share_panelNote_share_panelJs);

    var _noteNote_switchNote_switchJs = __webpack_require__(251);

    var _noteNote_switchNote_switchJs2 = _interopRequireDefault(_noteNote_switchNote_switchJs);

    var _no_resultNo_resultJs = __webpack_require__(253);

    var _no_resultNo_resultJs2 = _interopRequireDefault(_no_resultNo_resultJs);

    var _noteNote_toggle_editorNote_toggle_editorJs = __webpack_require__(255);

    var _noteNote_toggle_editorNote_toggle_editorJs2 = _interopRequireDefault(_noteNote_toggle_editorNote_toggle_editorJs);

    var _noteMce_editorMce_editorJs = __webpack_require__(257);

    var _noteMce_editorMce_editorJs2 = _interopRequireDefault(_noteMce_editorMce_editorJs);

    var _image_viewerImage_viewerJs = __webpack_require__(260);

    var _image_viewerImage_viewerJs2 = _interopRequireDefault(_image_viewerImage_viewerJs);

    var _media_viewerMedia_viewerJs = __webpack_require__(262);

    var _media_viewerMedia_viewerJs2 = _interopRequireDefault(_media_viewerMedia_viewerJs);

    var _embed_browsersEmbed_browsersJs = __webpack_require__(264);

    var _embed_browsersEmbed_browsersJs2 = _interopRequireDefault(_embed_browsersEmbed_browsersJs);

    // 标签相关

    var _tagNote_tag_panelNote_tag_panelJs = __webpack_require__(266);

    var _tagNote_tag_panelNote_tag_panelJs2 = _interopRequireDefault(_tagNote_tag_panelNote_tag_panelJs);

    var _tagSearch_tag_panelSearch_tag_panelJs = __webpack_require__(269);

    var _tagSearch_tag_panelSearch_tag_panelJs2 = _interopRequireDefault(_tagSearch_tag_panelSearch_tag_panelJs);

    var _tagTagTagJs = __webpack_require__(271);

    var _tagTagTagJs2 = _interopRequireDefault(_tagTagTagJs);

    var _tagCreate_tagCreate_tagJs = __webpack_require__(273);

    var _tagCreate_tagCreate_tagJs2 = _interopRequireDefault(_tagCreate_tagCreate_tagJs);

    // 分类标签以及数目

    var _tagTag_titleTag_titleJs = __webpack_require__(275);

    var _tagTag_titleTag_titleJs2 = _interopRequireDefault(_tagTag_titleTag_titleJs);

    // 历史搜索记录相关

    var _history_search_panelHistory_search_panelJs = __webpack_require__(277);

    var _history_search_panelHistory_search_panelJs2 = _interopRequireDefault(_history_search_panelHistory_search_panelJs);

    exports.App = _appAppJs2['default'];
    exports.BackTop = _toolsBack_topBack_topJs2['default'];
    exports.Dialog = _toolsDialogDialogJs2['default'];
    exports.FeedbackPanel = _toolsFeedback_panelFeedback_panelJs2['default'];
    exports.LoadingAnim = _toolsLoading_animLoading_animJs2['default'];
    exports.StaticFn = _toolsStatic_fnStatic_fnJs2['default'];
    exports.MergeTipsCover = _toolsMerge_tips_coverMerge_tips_coverJs2['default'];
    exports.DropDownMenu = _headerDrop_down_menuDrop_down_menuJs2['default'];
    exports.HeaderMenu = _headerHeader_menuHeader_menuJs2['default'];
    exports.LoginMenu = _headerLogin_menuLogin_menuJs2['default'];
    exports.CreateNote = _headerCreate_noteCreate_noteJs2['default'];
    exports.Search = _searchSearchJs2['default'];
    exports.EmbedBrowsers = _embed_browsersEmbed_browsersJs2['default'];
    exports.NoteList = _noteNote_listNote_listJs2['default'];
    exports.Note = _noteNoteNoteJs2['default'];
    exports.NoteTitle = _noteNote_titleNote_titleJs2['default'];
    exports.NoteContent = _noteNote_contentNote_contentJs2['default'];
    exports.NoteMeta = _noteNote_metaNote_metaJs2['default'];
    exports.NoteOp = _noteNote_opNote_opJs2['default'];
    exports.NoteSharePanel = _noteNote_share_panelNote_share_panelJs2['default'];
    exports.NoteSwitch = _noteNote_switchNote_switchJs2['default'];
    exports.NoResult = _no_resultNo_resultJs2['default'];
    exports.NoteToggleEditor = _noteNote_toggle_editorNote_toggle_editorJs2['default'];
    exports.MCEEditor = _noteMce_editorMce_editorJs2['default'];
    exports.ImageViewer = _image_viewerImage_viewerJs2['default'];
    exports.MediaViewer = _media_viewerMedia_viewerJs2['default'];
    exports.TagTitle = _tagTag_titleTag_titleJs2['default'];
    exports.NoteTagPanel = _tagNote_tag_panelNote_tag_panelJs2['default'];
    exports.SearchTagPanel = _tagSearch_tag_panelSearch_tag_panelJs2['default'];
    exports.Tag = _tagTagTagJs2['default'];
    exports.CreateTag = _tagCreate_tagCreate_tagJs2['default'];
    exports.HistorySearchPanel = _history_search_panelHistory_search_panelJs2['default'];

    /***/
  },
  /* 160 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _O, _OKConfig) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      var RenderMixin = __webpack_require__(213);
      var stateMixin = __webpack_require__(216);
      var App = React.createClass({
        displayName: 'App',

        mixins: [RenderMixin, stateMixin],

        /**
         * 组件初始化
         */
        getInitialState: function getInitialState() {

          // 初始化语言包
          _utils.LocaleUtil.init();

          var user = _models.UserModel.getLocalUser();

          return {
            user: user || null
          };
        },

        // 判断是否支持localstorage
        isLocalStorageAvailable: function isLocalStorageAvailable() {
          var localSto = false;
          try {
            if (window.localStorage) {
              localSto = true;
            }
          } catch (e) {
          }
          ;

          return localSto;
        },

        /**
         * 组件挂载到dom之前
         */
        componentWillMount: function componentWillMount() {
          var _this = this;

          //dom ready
          $(document).ready(function () {
            $("body").addClass("doc-ready");
          });

          //window loaded
          $(window).on("load", function () {
            $("body").addClass("page-loaded");
          });

          //监听手势
          $(document).on("keydown", function (event) {

            var keyType = null;
            var config = _models.JStoreKVDB.get("config");
            if (config && config.shortcuts) {
              var key1 = config.shortcuts.quick_switcher.__key1;
              var key2 = config.shortcuts.quick_switcher.__key2;

              if (key1 == 16) {
                keyType = "shiftKey";
              } else if (key1 == 17) {
                keyType = "ctrlKey";
              } else if (key1 == 18) {
                keyType = "altKey";
              } else if (key1 == 91) {
                keyType = "metaKey";
              }

              // metaKey,shiftKey,altKey,ctrlKey
              if (key2 && event[keyType] && key2 == event.keyCode) {

                //如果是在可编辑的区域则不进行UI上的变化，让其输入
                var target = event.target;
                var isEditableField = target.isContentEditable || target.tagName && (target.tagName == "INPUT" || target.tagName == "TEXTAREA");

                if (!isEditableField) {

                  event.preventDefault();
                  _components.StaticFn.closeApp();
                }
              }
            }
          });

          //监听拖拽
          $(document).on("dragenter", function () {
            //让顶层窗口知道正在被拖拽
            window.top.postMessage({drag: "dragstart"}, "*");
          });

          //窗口失焦，通知
          $(window).on("blur", function (event) {
            _utils.WindowMessager.notifyCurrentPage("window-blur");
          });

          //给Overlay 发送变迁数据
          _utils.ExtUtil.sendInfoToExt();
        },

        /**
         * 组件已经挂载到dom
         */

        componentDidMount: function componentDidMount() {
          var _this = this;

          if (!_this.isLocalStorageAvailable()) {
            _utils.NotificationUtil.showMessage('您的浏览器隐私设置与方片收集不兼容, 请访问 t.cn/RxhyHaS 解决问题', 'error', false);
          }
          ;

          //内容区滚到最下面的时候禁止往下滚动，滚动到最上面的时候禁止继续往上滚
          _utils.Ui.preventOverscroll("#app");

          _utils.WindowMessager.listenPageEvent("notesloaded", function () {
            //找到content中的所有图片
            //var $imgs = $('.note-content img');
            //内容加载完成之后就加载一次图片确保第一屏的可以显示出来

            var $imgs = $('.note-content img');
            _utils.LazyLoad.lazyLoad($imgs);
          });

          //用户改变,退出了或者登录了
          _utils.WindowMessager.listenGlobalEvent('user-changed', function () {

            //供tab切换时检测是否需要刷新使用
            $('body').addClass('need-refresh');
          });

          //监听用户数据变化,变化则重新渲染
          _models.UserModel.listenProfileChange(function (user) {
            _this._setState({user: user});
          });

          //实时监测当前页面的可见状态和是否失焦或者聚焦
          _utils.PageUtil.pageActiveDetect(this.onPageActive, this.onPageInActive);

          //自己并非在侧栏而是顶层窗口,
          //则已经处于打开状态，则促发app open函数
          if (window.top == window) {
            this.handleAppOpen();
          }

          this.listenCustomEvent();

          //监听滚动事件
          this.listenScroll();

          this.initLayout();

          //监听网站发过来的事件
          this.listenWebsiteEvent();

          //添加tooltips
          $(".fp-tooltips").aloha();
        },

        componentWillUnmount: function componentWillUnmount() {
          _utils.Ui.stopPreventOverScroll("#app");
        },

        initLayout: function initLayout() {
          // 计算头部菜单的宽度
          $("#header").css({"width": $("#note_list").width()});
        },

        //监听网站(*.funp.in)发过来的事件
        listenWebsiteEvent: function listenWebsiteEvent() {

          $(window).on('message', function (event) {
            var oriEvent = event.originalEvent;

            var origin = oriEvent.origin;
            var data = oriEvent.data;

            //判断是否来自可信任的网站
            if (/[\/\.]funp\.in$/.test(origin)) {

              if (data.command) {
                switch (data.command) {

                //更新用户资料
                  case "update-user":
                    var user = data.data;
                    if (user && user.uid) {
                      _models.UserModel.setLocalUser(user);
                    }
                    break;
                  case "logged-out":
                    // 清除本地数据
                    _models.AppModel.clearLocalDB();

                    // 通知其他页面刷新
                    _utils.WindowMessager.notifyTabs('user-changed', Date.now());

                    //供tab切换时检测是否需要刷新使用
                    $('body').addClass('need-refresh');
                    break;
                //用户被合并
                  case "user-merged":
                    _models.UserModel.userMerged();
                    break;
                  default:
                    break;
                }
              }
            }
          });
        },

        /**
         * 当前页面处于激活状态
         */
        onPageActive: function onPageActive() {
          var isAppOpened = $('body').hasClass('app-opened');

          //需要刷新,而且扩展为打开状态则刷新退出
          if ($('body').hasClass('need-refresh') && isAppOpened) {
            location.reload();
            return false;
          }

          //从非激活状态到激活状态
          if ($("body").hasClass("inactive")) {
            _utils.WindowMessager.notifyCurrentPage("page-active", true);

            //扩展已经打开则加载更新
            if (isAppOpened) {
              this.refs.note_list.pullUpdates();

              //发送统计信息
              _utils.AnalyticUtil.sendPage();
            }
          }

          //非活跃标识去除
          $("body").removeClass("inactive");

          if (!_utils.PageUtil.isHidden()) {
            _models.SyncManager.getInstance('note').start();
          } else {
          }
        },

        /**
         * 为游客(未注册用户)生成默认贴纸
         *
         * @return {[type]} [description]
         */
        generateNoteForVisitor: function generateNoteForVisitor() {
          _O.log('初始化加上初始贴纸');
          _components.CreateNote.relCreateNote({
            title: _utils.LocaleUtil.translate("ext_name"),
            content: _utils.LocaleUtil.translate("default_note_content") + '<br /><a href="' + _OKConfig.origin + '/help' + '">' + _utils.LocaleUtil.translate("more_help") + '</a>',
            source: _OKConfig.origin
          });
        },

        /**
         * 当前页面处于非激活状态
         */
        onPageInActive: function onPageInActive() {

          //非活跃标识
          $("body").addClass("inactive");
        },

        /**
         * 监听页面的滚动
         */
        listenScroll: function listenScroll() {
          var _this = this,
          lastScrollTop = 0,
          thisScrollTop = 0,
          fullHeight,
          sidebarSrc,
          originalSrc,
          $body = $('body');

          var onScroll = function onScroll(event) {
            //当前页面滚动的时候
            _utils.LazyLoad.lazyLoad();

            //告诉页面有没有停止滚动
            $body.removeClass(_OKConfig.no_scroll_state_class);

            if (_this.constructor.hoverTimer) clearTimeout(_this.constructor.hoverTimer);
            _this.constructor.hoverTimer = setTimeout(function () {
              $body.addClass(_OKConfig.no_scroll_state_class);
            }, 400);

            //滚动加载
            //当滚动到离底部只有规定的距离时则加载更多
            thisScrollTop = $(event.target).scrollTop();
            if (event.target.id == "app") {
              fullHeight = $(event.target).prop("scrollHeight");
            } else {
              fullHeight = $(event.target).height();
            }

            if (!_utils.Ui.winHeight) _utils.Ui.winHeight = $(window).height();

            if (thisScrollTop > lastScrollTop) {
              //向下滚动
              //取本标签的更多数据
              if (fullHeight - thisScrollTop - _utils.Ui.winHeight <= _OKConfig.OFFSET_TO_LOAD) {
                _this.refs.note_list.loadMore();
              }
            } else {
              //向上滚动,不管

            }
            lastScrollTop = thisScrollTop;

            /*************** back to top ****************/
            var backTopComponent = _this.refs.backtop;

            if (thisScrollTop > 0) {
              backTopComponent._setState({
                active: true
              });
            } else {
              backTopComponent._setState({
                active: false
              });
            }
            ;
          };

          //监听滚动事件
          $(window).add("#app").on("scroll", onScroll);
        },

        /**
         * 监听自定义事件
         */
        listenCustomEvent: function listenCustomEvent() {
          var _this = this;

          _utils.WindowMessager.listenPageEvent("appopen", function (userTrigger) {
            _this.handleAppOpen(userTrigger);
          }).listenPageEvent("appclose", function () {
            _this.handleAppClose();
          }).listenPageEvent("loadmore", function () {
            _this.refs.note_list.loadMore();
          });
        },

        /**
         * 扩展被展开时触发
         */
        handleAppOpen: function handleAppOpen(userTrigger) {
          var _this = this;

          //样式上标识app被打开
          $("body").addClass("app-opened");

          //需要刷新则刷新
          if ($('body').hasClass('need-refresh')) {
            location.reload();
            return false;
          }

          var user = _models.UserModel.getLocalUser();
          var originalUid = user.uid;

          //懒加载在视口内的图片
          _utils.LazyLoad.lazyLoad();

          //第一次打开侧栏
          if (!this.constructor.appOpened) {

            //去服务器加载目前标签下的数据
            this.constructor.appOpened = Date.now();

            //火狐未打开的情况下所有东西宽度为0，所以打开时重新初始化排版一次
            if ($(document.body).hasClass("firefox")) {
              this.initLayout();
            }

            if (this.constructor._loadUserTimer) clearTimeout(this.constructor._loadUserTimer);

            //侧栏展开完毕后再发送网络请求
            this.constructor._loadUserTimer = setTimeout(function () {

              //perf
              _O.timeStart("time:加载用户资料");

              //拉取用户资料
              _models.UserModel.userInfo(function (data) {
                //perf
                _O.timeEnd("time:加载用户资料");

                if (data.status == 1) {

                  //如果之前是未登陆状态,则在得到用户信息之后再次拉取一遍
                  if (!originalUid) {
                    _this.refs.note_list.pullUpdates();
                  }

                  //如果用户状态为强制私密
                  if (data.data.status == -1) {
                    $(document.body).addClass("force-private");
                  } else {
                    $(document.body).removeClass("force-private");
                  }
                } else {

                  //未登陆用户，并且没有贴纸，则生成默认贴纸
                  var notes = _models.TagModel.getNotesCollection(0);
                  if (notes.length == 0) {
                    _this.generateNoteForVisitor();
                  }
                }
              });
            }, 500);
          }

          //如果是由用户点击箭头打开,则加载更新
          if (user.uid) {
            //如果当前列表有贴纸则延时更新，防止网络请求影响界面
            var timeout = $("#note_list .note").length > 0 ? 1500 : 0;

            if (this.constructor._loadTimer) clearTimeout(this.constructor._loadTimer);

            //拉取贴纸资料
            this.constructor._loadTimer = setTimeout(function () {
              _this.refs.note_list.pullUpdates();
            }, timeout);
          }

          //发送统计数据
          _utils.AnalyticUtil.sendPage();
        },

        /**
         * 扩展关闭时触发
         */
        handleAppClose: function handleAppClose() {

          //移除标识
          $("body").removeClass("app-opened");
        },

        /**
         * 在全屏模式下影藏APP
         * hide-sidebar
         */
        handleShowApp: function handleShowApp() {
          //移除标识
          $("body").removeClass("hide-sidebar");
          $(window).trigger("resize");
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = App;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(162), __webpack_require__(163)))

    /***/
  },
  /* 161 */,
  /* 162 */
  /***/ function (module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }

    var _constantsJs = __webpack_require__(163);

    var _constantsJs2 = _interopRequireDefault(_constantsJs);

    var LoggerUtil = {
      //调试
      debug: function debug(flag, msg, data) {
        if (typeof flag != 'string') {
          return false;
        }

        if (_constantsJs2['default'].environment == 'debug_env') {
          window.console && console.debug("[" + flag + "]:", msg, data || "");
        }
      },

      //_O.log
      log: function log() {
        if (_constantsJs2['default'].environment == 'debug_env') {
          window.console && console.log.apply(console, arguments);
        }
      },

      //打印调用堆栈
      printStack: function printStack(flag) {
        if (_constantsJs2['default'].environment == 'debug_env') {
          try {
            throw new Error("[Debug - " + (flag || "Stack") + "]:");
          } catch (e) {
            console.log(e);
          }
        }
      },

      /**
       * 以symbol命名的某个计时器启动
       *
       */
      timeStart: function timeStart(symbol) {
        symbol = typeof symbol == 'string' ? symbol : "default";

        if (_constantsJs2['default'].environment == 'debug_env') {
          return window.console && console.time(symbol);
        }
      },

      /**
       * 以symbol命名的某个计时器停止
       *
       */
      timeEnd: function timeEnd(symbol) {
        symbol = typeof symbol == 'string' ? symbol : "default";

        if (_constantsJs2['default'].environment == 'debug_env') {
          return window.console && console.timeEnd(symbol);
        }
      }
    };

    exports['default'] = LoggerUtil;
    module.exports = exports['default'];

    /***/
  },
  /* 163 */
  /***/ function (module, exports, __webpack_require__) {

    /**
     *  预定义的变量
     */
    'use strict';

    var icon_large = __webpack_require__(164);

    var default_avatar_uri = __webpack_require__(165);

    var _OKConfig = {
      ALL_TAG_ID: 0,

      NO_TAG_ID: -1,

      TRASHBIN_ID: -2,

      SECRET_ID: -3,

      CREATE_TOOLTIP: "创建新贴纸...",

      ADD_TAG_TOOLTIP: "新增",

      RECENT_TAGS: "最近标签",

      READSLATER_TAG_LOCAL_NAME: "稍后阅读",

      READSLATER_TAG_SERVER_NAME: "readslater",

      ALL_TAG_NAME: "全部",

      NO_TAG_NAME: "未分类",

      TRASHBIN_NAME: "回收站",

      SECRET_NAME: "私密",

      TITLE_PLACEHOLDER: "无标题",

      NEWNOTE_KEY_NAME: "new_note",

      CONTENT_LINE_HEIGHT: 24,

      CONTENT_MAX_HEIGHT: 150,
      // 笔记新增队列
      NOTES_ADD_KEY: 'note_create_queue',
      // 笔记修改队列
      NOTES_EIDT_KEY: 'note_update_queue',
      // 标签新增队列
      TAGS_ADD_KEY: 'tag_add_key',
      // 标签修改队列
      TAGS_EIDT_KEY: 'tag_eidt_key',

      TAGS_ACCESS_HISTORY_KEY_NAME: "tags_access_history",

      TAGS_CHOSEN_HISTORY_KEY_NAME: "tag_chosen_history",

      //标签访问历史键名
      TAGS_USAGE_HISTORY_KEY_NAME: "tag_usage_history",

      //最后访问标签
      TAGS_LAST_OPENED_KEY_NAME: "tag_last_opened",

      //最后访问笔记
      NOTES_LAST_OPENED_KEY_NAME: "note_last_opened",

      // 笔记排序
      NOTES_SORTBY_KEY_NAME: "note_sortby",

      //最后生成的sortby
      NOTES_LAST_SORTBY: "notes_last_sortby",

      //标签最后生成的版本
      NOTES_LAST_VERSION: "notes_last_version",

      //gnid与sortby关联
      GNID_SORTBY_BIND_KEY_NAME: "gnid_sortby_relation",

      //tid与sortby关联
      GTID_SORTBYS_BIND_KEY_NAME: "gtid_sortbys_relation",

      LAST_ACCESS_TAG_KEY: 'last_access_tag',

      NOTES_KEY_NAME: "notes",

      TAGS_KEY_NAME: "tags",

      USER_KEY_NAME: "profile",

      LOCAL_DRAFT_KEY: "_new_note",

      APP_INITED_FLAG: "__OKMEMO_INITED__",

      //记录的最近使用标签数量数
      TAG_HISTORY_LIMIT: 10,

      TAG_USAGE_LIMIT: 10,

      //导航栏的最近标签数目
      NAV_TAG_LIMIT: 6,

      USAGE_TAG_LIMIT: 9,

      //滚动到离底部多远时开始加载更多
      OFFSET_TO_LOAD: 150,

      ITEMS_PER_LOAD: 20,

      INITIAL_ITEMS_LIMIT: 10,

      TAGS_PER_PANEL: 12,

      API_DOMAIN: "api.funp.in",

      LOGIN_SITE: "https://api.funp.in",

      API_VERSION: "v4",

      SMALL_IMG_CLASS: "smpic",

      app_map: {
        "1": "Twitter",
        "2": "微博",
        "3": "Google",
        "4": "Facebook",
        "5": "QQ",
        "6": "Evernote",
        "7": "印象笔记",
        "8": "微信",
        "9": "豆瓣"
      },

      backup_apps: ['evernote', 'yinxiang'],

      origin: "http://funp.in",

      img_folder_path: "./images",

      default_favicon: icon_large,

      share_default_url: "https://api.okay.do/v2/invite?from=extension",

      default_page_title: "预览窗口",

      img_origin: "https://img.okay.do",

      img_cdn_domain: "img.okay.do",

      //用户停止编辑贴纸之后多久保存
      save_delay: 500,

      sidebar_img_width: 290,

      content_img_maxwidth: 272,

      sidebar_img_height: 300,

      max_upload_width: 1200,

      max_sortby: 1000000000000,

      //用户默认头像
      user_default_avatar: default_avatar_uri,

      no_scroll_state_class: "hover",

      enable_custom_css_scrollbar: true,

      img_placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",

      editor_enabled: true,

      environment: "production_env",

      version: "1.0.1.92",
      fontsize_level: {"12px": 1, "16px": 2, "18px": 3, "22px": 4, "28px": 5}

    };

    module.exports = _OKConfig;

    /***/
  },
  /* 164 */
  /***/ function (module, exports) {

    module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0U2RTIyQjIwQUNEMTFFNjhFMzhFRTEwQTdBNEU3MjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0U2RTIyQjMwQUNEMTFFNjhFMzhFRTEwQTdBNEU3MjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODNCOTdGRjBBQ0IxMUU2OEUzOEVFMTBBN0E0RTcyNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODNCOTgwMDBBQ0IxMUU2OEUzOEVFMTBBN0E0RTcyNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoInJOIAAAa1SURBVHja7F1baBxVGJ49e3InQsxD8IIURUhBoRgVRBGhrS+J9akikWpifLDoW0BIXupLLiRgyEPARG1ifBZERS2VKoIXBLUVQbHUByuF1IglAdu4N78z7pbtkmxmN7Mzc87/HfgzM3uZ+eb7vv+fM3Mms6lCoeDV0TS+90A+nz+E6UOIXrzWg2j3EthSqZRnY6uCewuxhvfPY/oNpmcQX2H+Ws3bqNEAt0P0ZxBH8b17sdxsKYE2i79dy+HzPyPeQ7yD5V/DNkB3LpcbxWdfRHQ5SKBLuP/BOlaVUpOYv7hnA+D9JyH+a5jeKYhEF3BfhgnGsM6TdRsAwk+g3I9TeHuxY71vwggvF/sNgQ2gIf5JiH+M4tuPG9s4BRM8hdmNQAaA+KsU3y3c2NanMMERzF4tf13tUPaP2UIgxQ/WkOiHoOti1QqA+YFsNvsBCXQXN6rAcWB4fTsDdEH8s1i+gyQ6jXsznU4fwPS3Gw4BKP2vJF18lvxQWicOBROVFeCWTCbzC6Y3kUARuHOoAn2YnvMrABzxLMUXhTuNxD9eqgBNOPZ/i+kBkigK9xqqwH4zqteHuIcEisPdA90fU/hzGAuaJMrDDe0PKhz/HyaJYnHfbzK/lwSKxb7P9AF6SKBY3F3mNLCVJIrF3axJoGzTahIo27SaJMrGrUmgbNNqEijbtJokysatSaBs02oSKNu0miTKxq1IomzcmgTK7qdoii8btyKJsnFrSQRS/BAMQALdwq1Iomzc2mUCKX4IBiCBbmPXFF82bs3skY1bk0DZ2DXFl41bkUTZuDUJlI1dk0DZuBVJlI1bkUTZuLVkAkvrrfOR+U4YVksVXyl1gwHy+bzIaqUkiz89Pe2Njo76r6XTaZGHKi1J+HLx5+bmvPn5efN8RK+pqcmbmpryTWCWJfVRtFTxZ2ZmvI6ODn95ZWXFf38vJrC1g6oki196rbOz0zfB2NiY3x+o9XBg89mJSgqQOMQv3369JrD91FS5nPVBxK/XBLY+t7gSt6L4tZvApQtSKgkuTIL4QU3g2tVI5VrW70X83Uzg4qVoRfF3N8H4+Pj1ddt8vI/NAFF1mMISv9IEy8vLfiWwyQRB+VYuZH0jxLfZBLVwrii+Oyaop9Iq28Uv7XSjxN/JBKZjmCQT1Mt3KpPJFGwUvrQtI8Ts7Kw/sNMo8cub2d7m5qY3ODjoTU5Oei0tLQ27nyAKzrWt4pcLsr6+7g/gRPQzrNe3GfY9BHHwrWwX35yfm9I/MjLiZ2ajs3FjY8MbGBjwFhcXvfb29tiyPyy+VRhA4rxAYrLQlH1TjoeGhhpqAiN+f3+/t7Cw4LW1tcVWAcLk24lHxJTKvxnPb5QJysVvbW2NRfxGJJuyXfwoTJAU8RtyCm1byY/aBC6LX7MBbBgMCdMErotfkwFsGgkrN8Hw8HBdJohb/MjGT2wu+UFMYM4OajVBEsSPqilXsn470xrhaq0EksSvagBXbn4oCRjEBHGKH1elVa6U/GqmDWKCuMWPqymXSn61Vs0EUsU3TbtW8nczgblsbExgmhnaNSYw1/ajFj8pfPvDwdL+796YwAhv/jHUjOotLS2JFN/Hks1mC1KErzSBOVU00dzcLFJ8Kw0Q6khY8eaRKMRPapXVUsWPSvik96+UVPGJ25IKQOEFVwCKL9gAFF/oIYCPgBVsAGa9YANQ/HhwaxIo27SaBMo2rSaJsnFrEijbtJoEyjatJomycWsSKNu0mgTKNq0mibJxK5IoG7cmgbL7KZriy8atSKJs3FoigRQ/BAOQQDdwK5IoG7eWQCDFD8EAJNBN7Jriy8atmT2ycZtO4L+uEUjxA7eMMcBlZo9Y015R2PB5Zo9Y3BeNAb5m9og17Q/mEHAaQPIkUKRpz6QKhUJbPp//Hgu9FF8U7r8R+00FuApQ7zJ7xJn2I8RaqvisvLtQBX7CtJUEisH9COLL0mDQBYB8mySKwf2JEd/HV/bI1FtRBX7EtJskOo3bXPh7EHHOLJQPB19SSo3yeO887omS+JUVwG9YfgvxPLPHSdynEP2I3I4GQGvBa+8jHieJTuE2WX8Q8Vf5i9vdEbSFHTmKOM3S6Yz4ZxEDleLvZADTNrBDRxCrJNB6036MOIz4Y7s3q90TeA079hziJcxfofjW4d5CnChm/vqO+xDwh5TuxudOIJ7GfFq68BZg/xDxKuK7Xfejxp9T68PnX0A8gfnbmPWJan8We/lvIL4IvD91/qhiN773aLFXeR/m92F6szmDoPiRtIz3/2DO78UO3meIzxGXal3RfwIMAGFzGlNrCd0+AAAAAElFTkSuQmCC"

    /***/
  },
  /* 165 */
  /***/ function (module, exports) {

    module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAAAXNSR0IArs4c6QAAA01JREFUeAHt2lFOkwEQhVEwrpmwBMJiuwW0aukNIzel9KlzSJTJjJr06/FPBB8Ph8Pbgw8FPinw45O9tQJ/CgACQi0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AMFALAFLzOALCQC0ASM3jCAgDtQAgNY8jIAzUAoDUPI6AhIGXl5eH4w8f5wI/z+Pu6Qjj9fX1PcLz8/P7vHnwBPn97n/EcYTiSfL3r8V6IB9xnJ4WkAAynhwnHKfPkDw8rH2CfPbkOOE4fd6OZCWQS3FAsvAJ8lUc25GseoJci2MzkjVAvotjK5IVQG6FYyOSuwdyaxzbkNw9kNMb6vN1Be4eyPF7Kk9PT9fVKb/r+Gdu+H7N3QM5vse3RrIFx7HdCiC3RLIJxyogt0CyDcc6IN9BshHHSiDXINmKYy2QryDZjGM1kEuQbMexHkhDAsexzqJ/5v59uf//+ePXSeA4d/K/2v+1yK+K5nxOtXN6PBwObztfuld9SYE1X0m9JIZfMwsAMpvYRAFAIoZxFgBkNrGJAoBEDOMsAMhsYhMFAIkYxlkAkNnEJgoAEjGMswAgs4lNFAAkYhhnAUBmE5soAEjEMM4CgMwmNlEAkIhhnAUAmU1sogAgEcM4CwAym9hEAUAihnEWAGQ2sYkCgEQM4ywAyGxiEwUAiRjGWQCQ2cQmCgASMYyzACCziU0UACRiGGcBQGYTmygASMQwzgKAzCY2UQCQiGGcBQCZTWyiACARwzgLADKb2EQBQCKGcRYAZDaxiQKARAzjLADIbGITBQCJGMZZAJDZxCYKABIxjLMAILOJTRQAJGIYZwFAZhObKABIxDDOAoDMJjZRAJCIYZwFAJlNbKIAIBHDOAsAMpvYRAFAIoZxFgBkNrGJAoBEDOMsAMhsYhMFAIkYxlngFyrJi0Of/52JAAAAAElFTkSuQmCC"

    /***/
  },
  /* 166 */
  /***/ function (module, exports, __webpack_require__) {



    //网络请求工具
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }

    var _ajaxJs = __webpack_require__(167);

    var _ajaxJs2 = _interopRequireDefault(_ajaxJs);

    //光标工具

    var _caretJs = __webpack_require__(190);

    var _caretJs2 = _interopRequireDefault(_caretJs);

    //内容处理工具

    var _contentJs = __webpack_require__(191);

    var _contentJs2 = _interopRequireDefault(_contentJs);

    // cookie工具
    // import CookiesUtil from './cookie.js';

    //dom 工具

    var _domJs = __webpack_require__(192);

    var _domJs2 = _interopRequireDefault(_domJs);

    //环境工具

    var _envJs = __webpack_require__(193);

    var _envJs2 = _interopRequireDefault(_envJs);

    // 地理位置工具
    // import GeoUtil from './geo.js';

    //图片处理工具

    var _imageJs = __webpack_require__(194);

    var _imageJs2 = _interopRequireDefault(_imageJs);

    //开发日志记录打印工具

    var _loggerJs = __webpack_require__(162);

    var _loggerJs2 = _interopRequireDefault(_loggerJs);

    //消息通知工具

    var _notificationJs = __webpack_require__(195);

    var _notificationJs2 = _interopRequireDefault(_notificationJs);

    // 拼音索引工具
    // import PinyinIndex from './pinyin_index.js';

    // 分享组件

    var _shareJs = __webpack_require__(196);

    var _shareJs2 = _interopRequireDefault(_shareJs);

    //时间日期函数

    var _timeJs = __webpack_require__(197);

    var _timeJs2 = _interopRequireDefault(_timeJs);

    //数据合法性验证工具模块

    var _validatorJs = __webpack_require__(200);

    var _validatorJs2 = _interopRequireDefault(_validatorJs);

    //视频播放工具模块

    var _videoJs = __webpack_require__(201);

    var _videoJs2 = _interopRequireDefault(_videoJs);

    //窗口通信工具模块

    var _window_messagerJs = __webpack_require__(202);

    var _window_messagerJs2 = _interopRequireDefault(_window_messagerJs);

    var _uiJs = __webpack_require__(203);

    var _uiJs2 = _interopRequireDefault(_uiJs);

    //扩展通信工具模块

    var _extensionJs = __webpack_require__(204);

    var _extensionJs2 = _interopRequireDefault(_extensionJs);

    //url工具模块

    var _urlJs = __webpack_require__(205);

    var _urlJs2 = _interopRequireDefault(_urlJs);

    //登录注册工具模块

    var _loginJs = __webpack_require__(206);

    var _loginJs2 = _interopRequireDefault(_loginJs);

    //jquery扩展方法

    var _jqueryJs = __webpack_require__(207);

    var _jqueryJs2 = _interopRequireDefault(_jqueryJs);

    //页面工具模块

    var _pageJs = __webpack_require__(179);

    var _pageJs2 = _interopRequireDefault(_pageJs);

    var _lazy_loadJs = __webpack_require__(208);

    var _lazy_loadJs2 = _interopRequireDefault(_lazy_loadJs);

    // 绑定第三方
    // import BindUtil from './binding.js';

    var _analyticJs = __webpack_require__(209);

    var _analyticJs2 = _interopRequireDefault(_analyticJs);

    var _drag_mergeJs = __webpack_require__(210);

    var _drag_mergeJs2 = _interopRequireDefault(_drag_mergeJs);

    //音频播放工具

    var _audio_playerJs = __webpack_require__(211);

    var _audio_playerJs2 = _interopRequireDefault(_audio_playerJs);

    // 本地化语言包

    var _localeJs = __webpack_require__(212);

    var _localeJs2 = _interopRequireDefault(_localeJs);

    exports.//图片懒加载
    LazyLoad = _lazy_loadJs2['default'];
    exports.//贴纸的拖拽合并
    DragMerge = _drag_mergeJs2['default'];
    exports.AjaxUtil = _ajaxJs2['default'];
    exports.CaretUtil = _caretJs2['default'];
    exports.ContentUtil = _contentJs2['default'];
    exports.// CookiesUtil,

    DomUtil = _domJs2['default'];
    exports.EnvUtil = _envJs2['default'];
    exports.// GeoUtil,

    ImageUtil = _imageJs2['default'];
    exports.LoggerUtil = _loggerJs2['default'];
    exports.NotificationUtil = _notificationJs2['default'];
    exports.// PinyinIndex,

    ShareUtil = _shareJs2['default'];
    exports.TimeUtil = _timeJs2['default'];
    exports.ValidatorUtil = _validatorJs2['default'];
    exports.VideoUtil = _videoJs2['default'];
    exports.WindowMessager = _window_messagerJs2['default'];
    exports.Ui = _uiJs2['default'];
    exports.ExtUtil = _extensionJs2['default'];
    exports.UrlUtil = _urlJs2['default'];
    exports.LoginUtil = _loginJs2['default'];
    exports.JqueryUtil = _jqueryJs2['default'];
    exports.PageUtil = _pageJs2['default'];
    exports.// BindUtil

    AnalyticUtil = _analyticJs2['default'];
    exports.AudioPlayer = _audio_playerJs2['default'];
    exports.// 本地化语言包
    LocaleUtil = _localeJs2['default'];

    /***/
  },
  /* 167 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _O) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var AjaxUtil = {
        /**
         * //module ajax logger
         */
        //记录失败的post请求
        recordFailedAjax: function recordFailedAjax() {

          //同样处理ajax收发
          //ajax请求在发送前放入队列
          $.ajaxSetup({
            beforeSend: function beforeSend(xhr, options) {
              if (options.url.indexOf('insertlist') > -1 || options.url.indexOf('tags') > -1) {
                return '';
              }
              var method = options.type.toLowerCase();

              if (method == 'post' || method == 'put' || method == 'delete') {
                var ajaxId = options.okajaxid || "okajax_" + Date.now();
                options.okajaxid = ajaxId;

                //将ajax选项记录下来
                var ajaxStack = _models.LocalKVDB.get("ajaxStack", {}) || {};

                var ajaxOptions = {};
                for (var prop in options) {
                  if (options.hasOwnProperty(prop) && typeof options[prop] != 'object' && typeof options[prop] != 'function') {
                    ajaxOptions[prop] = options[prop];
                  }
                }

                ajaxStack[ajaxId] = ajaxOptions;

                _O.debug("AJAX", "记录ajax请求" + ajaxId);
                _models.LocalKVDB.set("ajaxStack", ajaxStack);
              }

              //标志发送请求的客户端(如果是往okay.do发送请求的话)
              if (options.url.indexOf(".okay.do/") > 0) {
                xhr.setRequestHeader("Request-Client", "Extension");
              }
            },

            complete: function complete(xhr, status) {
              if (status == 'success') {
              }
            },

            success: function success() {
            },

            timeout: function timeout() {
            },

            error: function error(xhr, status, emptyString) {

              //服务器端错误，则去除记录
              if (this.okajaxid) {
                var ajaxStack = _models.LocalKVDB.get("ajaxStack", {});

                if (ajaxStack[this.okajaxid]) {
                  delete ajaxStack[this.okajaxid];
                  _models.LocalKVDB.get("ajaxStack", ajaxStack);
                }
              }
            }
          });

          //ajax请求完成则将此ajax请求在队列中去除
          $(document).ajaxComplete(function (event, xhr, options) {
            var method = options.type.toLowerCase();
            if (method == 'post' || method == 'put' || method == 'delete') {

              if (xhr.statusText.toLowerCase() == 'ok') {
                if (options.okajaxid) {
                  var ajaxStack = _models.LocalKVDB.get("ajaxStack", {});

                  if (ajaxStack[options.okajaxid]) {
                    delete ajaxStack[options.okajaxid];
                  }

                  _O.debug("AJAX", ":):) 完成ajax请求" + options.okajaxid);
                  _models.LocalKVDB.set("ajaxStack", ajaxStack);
                }
              }
            }

            switch (xhr.statusText.toLowerCase()) {
              case "ok":
              case "abort":
                break;
              case "error":
                break;
            }
          }).ajaxStart(function (event, xhr, options) {
            //第一次ajax请求

          });
        },

        //处理未完成的ajax请求
        resumePausedAjax: function resumePausedAjax() {
          //将ajax选项记录下来
          var ajaxStack = _models.LocalKVDB.get("ajaxStack", {});
          var ajaxInfo;

          for (var ajaxId in ajaxStack) {

            if (ajaxStack.hasOwnProperty(ajaxId)) {
              ajaxInfo = ajaxStack[ajaxId];

              if (ajaxInfo.url && ajaxInfo.data) {
                _O.debug("AJAX", "恢复未完成的ajax请求" + ajaxId + "\n\t->" + ajaxInfo.type + " " + ajaxInfo.url);

                $.ajax(ajaxInfo);
              }
            }
          }
        }

      };

      exports['default'] = AjaxUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 168 */
  /***/ function (module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }

    var _noteJs = __webpack_require__(169);

    var _noteJs2 = _interopRequireDefault(_noteJs);

    var _requestJs = __webpack_require__(170);

    var _requestJs2 = _interopRequireDefault(_requestJs);

    var _userJs = __webpack_require__(171);

    var _userJs2 = _interopRequireDefault(_userJs);

    var _imageJs = __webpack_require__(180);

    var _imageJs2 = _interopRequireDefault(_imageJs);

    var _local_storageJs = __webpack_require__(178);

    var _local_storageJs2 = _interopRequireDefault(_local_storageJs);

    var _jstorageJs = __webpack_require__(181);

    var _jstorageJs2 = _interopRequireDefault(_jstorageJs);

    var _queueJs = __webpack_require__(182);

    var _queueJs2 = _interopRequireDefault(_queueJs);

    var _syncmanJs = __webpack_require__(183);

    var _syncmanJs2 = _interopRequireDefault(_syncmanJs);

    var _tagJs = __webpack_require__(177);

    var _tagJs2 = _interopRequireDefault(_tagJs);

    var _appJs = __webpack_require__(172);

    var _appJs2 = _interopRequireDefault(_appJs);

    /**
     * ================
     * 调试全局变量,待删除
     * ================
     */
    __webpack_require__(184);
    __webpack_require__(185);
    __webpack_require__(186);
    __webpack_require__(187);
    __webpack_require__(188);
    __webpack_require__(189);

    exports.AppModel = _appJs2['default'];
    exports.NoteModel = _noteJs2['default'];
    exports.Request = _requestJs2['default'];
    exports.UserModel = _userJs2['default'];
    exports.LocalKVDB = _local_storageJs2['default'];
    exports.JStoreKVDB = _jstorageJs2['default'];
    exports.ImageModel = _imageJs2['default'];
    exports.SyncQueue = _queueJs2['default'];
    exports.TagModel = _tagJs2['default'];
    exports.SyncManager = _syncmanJs2['default'];

    /***/
  },
  /* 169 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $, _O) {
      /**
       *
       *  贴纸模型
       *  负责贴纸数据的增删改查
       *
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var Note = {

        /**
         *
         * 本地数据存储结构
         *
         *
         */
        scheme: {
          'gnid': {
            'type': 'string'
          },
          'title': {
            'type': 'string'
          },
          'summary': {
            'type': 'string'
          },
          'content': {
            'type': 'string'
          },

          //排序
          'sortby': {
            'type': 'number'
          },

          'created': {
            'type': 'number'
          },

          //修改时间
          'modified': {
            'type': 'number'
          },

          'publyc': {
            'type': 'number' //'0或1'
          },

          //1在垃圾桶,0不在垃圾桶
          'removed': {
            'type': 'number' //'0或1'
          },

          //1彻底删除
          'expunged': {
            'type': 'number' //'0或1'
          },

          // 图片集 array
          'images': {
            'type': 'object',
            'scheme': ['ImageObject', 'ImageObject']
          },

          //贴纸的标签  本地的
          "tags": {
            "type": "Array",
            'scheme': ["tid", "tid"]
          },

          // 服务器拉去下来的标签列表
          "taglist": {
            "type": "Array",
            'scheme': [{"tname": "tid"}, {"tname": "tid"}]
          }

        },

        /**
         * 同步远程数据
         *
         * @param callback 回调返回状态和list:[{note},{note}]
         */
        notePull: function notePull(callback) {

          var _this = this,
          deadline = _models.LocalKVDB.get('deadline', 0),
          max_tag_version = _models.LocalKVDB.get('max_tag_version', 0);

          if (!_models.UserModel.getLocalUser().uid || _this.deadline === deadline) {
            callback && callback({
              online: false,
              status: 0,
              message: "error",
              list: [],
              taglist: []
            });
            return '';
          }

          var filters = {
            deadline: deadline,
            version: max_tag_version
          };

          _models.Request.get("note/pull/", filters, function (data) {
            //请求成功后
            if (data && data.status == 1) {

              /** 处理标签 */
              _models.LocalKVDB.set('max_tag_version', data.data.version || 0);

              //有更新过的标签
              var tags = [];
              if (data.data.taglist && data.data.taglist.length > 0) {
                //写入本地
                _models.TagModel.setLocalTags(data.data.taglist);

                tags = data.data.taglist;
              }

              /** 处理特殊标签,记录下数量 */
              if (data.data.tagdata) {
                var allTag = _models.TagModel.getTagByGtid(0) || {gtid: 0};
                var noTag = _models.TagModel.getTagByGtid(_OKConfig.NO_TAG_ID) || {gtid: _OKConfig.NO_TAG_ID};
                var removed = _models.TagModel.getTagByGtid(_OKConfig.TRASHBIN_ID) || {gtid: _OKConfig.TRASHBIN_ID};

                var allNum = data.data.tagdata.all;
                var notagNum = data.data.tagdata.notag;
                var removedNum = data.data.tagdata.removed;

                //第一次取，则加上本地的
                if (deadline == 0) {
                  allTag.notes_num = parseInt(allNum, 10) + (parseInt(allTag.notes_num, 10) || 0);
                  noTag.notes_num = parseInt(notagNum, 10) + (parseInt(noTag.notes_num, 10) || 0);
                  removed.notes_num = parseInt(removedNum, 10) + (parseInt(removed.notes_num, 10) || 0);

                  _models.TagModel.setLocalTagData(allTag);
                  _models.TagModel.setLocalTagData(noTag);
                  _models.TagModel.setLocalTagData(removed);
                } else {
                  if (allTag.notes_num != allNum) {
                    allTag.notes_num = parseInt(allNum, 10);
                    _models.TagModel.setLocalTagData(allTag);
                  }

                  if (noTag.notes_num != notagNum) {
                    noTag.notes_num = parseInt(notagNum, 10);
                    _models.TagModel.setLocalTagData(noTag);
                  }

                  if (removed.notes_num != removedNum) {
                    removed.notes_num = parseInt(removedNum, 10);
                    _models.TagModel.setLocalTagData(removed);
                  }
                }

                tags = tags.concat([allTag, noTag, removed]);
              }

              /** 处理贴纸 **/
              var notes = data.data.list;
              notes = _this.insertLocalNotes(notes);
              // 设置最后同步时间
              if (data.data.deadline > 0) _models.LocalKVDB.set('deadline', data.data.deadline);

              if (callback) {
                callback({
                  online: true,
                  status: data.status,
                  message: data.message,
                  list: notes,
                  taglist: tags
                });
              }

              // 远程返回失败
            } else {
              if (callback) {
                callback({
                  online: true,
                  status: 0,
                  message: "error",
                  list: [],
                  taglist: []
                });
              }
            }
          },
          //拉取失败，断网或者协议问题等等，取本地tag对应的标
          function () {
            if (callback) {
              callback({
                "status": 0,
                "message": "error",
                list: [],
                taglist: []
              });
            }
          });
        },

        /**
         * 同步远程新增接口
         * @param note   数组 [note,note]
         * @param callback  成功才回调
         */
        syncCreate: function syncCreate(newNote, callback, failure) {

          var notelist = JSON.stringify(newNote);
          _models.Request.post("note/insert", {notelist: notelist}, callback, failure);
        },

        /**
         * 同步远程更新接口
         * @param note   数组 [note,note]
         * @param callback  成功才回调
         */
        syncUpdate: function syncUpdate(note, callback, failure) {

          var notelist = JSON.stringify(note);

          _models.Request.post("note/update", {notelist: notelist}, callback, failure);
        },

        /**
         * 加载更多接口
         *
         * @param offset 最后一次加载标识
         * @param rows   数据条数
         * @param callback 回调返回状态和list:[{note},{note}]
         */
        getNotes: function getNotes(filters, callback) {

          //未登录用户不发送远程请求
          if (!_models.UserModel.getLocalUser().uid) {
            callback && callback({status: -1});
            return null;
          }

          var _this = this;

          filters.offset = filters.offset ? filters.offset : 0;
          filters.rows = filters.rows ? filters.rows : 30;

          /**
           * 获取远程符合条件的贴纸
           * 加载更多服务器默认是全部,除了传0就为30条
           */
          if (filters.gtid != _OKConfig.TRASHBIN_ID) {
            filters.rows = 0;
          } else {
            filters.rows = 30;
          }

          //垃圾篓请求接口区分开
          var requesturi = filters.gtid != _OKConfig.TRASHBIN_ID ? "note/more" : "note/trashbin";
          _models.Request.get(requesturi, filters, function (data) {

            //请求成功后
            if (data && data.status == 1) {
              var length = data.data.list.length;

              if ($.isArray(data.data.list)) {

                if (length > 0) {
                  var last = data.data.list[length - 1];
                  _O.debug("加载更多:最后", last.sortby);

                  // 记录最后一次取到数据的sortby
                  _models.TagModel.setMinSortby(filters.gtid, last.sortby);
                } else {
                  //已经无法取到贴纸，则记录这个请求的sortby，
                  //以后加载更多的sortby参数如果是小于或等于这次请求的sortby，则无需继续请求
                  if (filters.offset != _OKConfig.max_sortby) {
                    _models.TagModel.setLastSortby(filters.gtid, filters.offset);
                  }
                }
              }

              // 数据过滤和把数据插入本地
              var notes = _this.insertLocalNotes(data.data.list);

              if (callback) {
                callback({
                  online: true,
                  status: data.status,
                  message: data.message,
                  list: notes
                });
              }

              // 远程返回失败
            } else {
              if (callback) {
                callback({
                  online: true,
                  status: 0,
                  message: "error",
                  list: []
                });
              }
            }
          },
          //拉取失败，断网或者协议问题等等，取本地tag对应的标
          function () {
            if (callback) {
              callback({
                "status": 0,
                "message": "error",
                list: []
              });
            }
          });
        },

        /**
         * 加载本地更多接口
         * @param filters 过滤条件
         * @param forceLocal 强制使用本地贴纸,默认为false
         */
        getLocalNotes: function getLocalNotes(filters, forceLocal) {

          //某分类下的贴纸集合
          var sortbys = _models.TagModel.getNotesCollection(filters.gtid);

          //本地所取到的贴纸的最小sortby
          var minSortby = _models.TagModel.getMinSortby(filters.gtid);

          filters.rows = filters.rows || 30;

          var index = filters.offset == 0 ? 0 : sortbys.indexOf(parseInt(filters.offset, 10)) + 1,
          endIndex = filters.offset == 0 ? index + filters.rows : index + filters.rows + 1;

          //本地剩余的贴纸长度，小于要取的长度，则截取，减少无谓循环
          if (sortbys.length < endIndex) {
            endIndex = filters.offset == 0 ? sortbys.length : sortbys.length + 1;
          }

          if (filters.offset > 0) {
            //不存在，或者是最后一位，则无需再取
            if (index < 0 || index == sortbys.length - 1) {
              return [];
            }
          }

          var notes = [];
          var userLoggedin = !!_models.UserModel.getLocalUser().uid;

          _O.debug("加载贴纸", [filters, sortbys, index, endIndex, minSortby]);
          if ($.isArray(sortbys) && sortbys.length > 0) {
            for (var i = index; i < endIndex; i++) {

              var note = this.getNoteBySortby(sortbys[i]);

              //只取sortby比上次拉取回来的最小sortby要大的贴纸
              if (!!sortbys[i] && note) {

                //如果用户未登陆,则没有任何限制条件直接取本地
                if (!userLoggedin || forceLocal) {
                  notes.push(note);

                  //如果用户已经登陆，则取出的必须是服务器上拉取回来的
                } else if (minSortby > 0 && note.sortby >= minSortby) {
                  notes.push(note);
                } else {
                  break;
                }
              } else {
                _O.debug("加载贴纸:错误", "贴纸不存在:" + sortbys[i]);
              }
            }
          }

          return notes;
        },

        /**
         * 得到最后一次访问的标签
         *
         * @return {[type]} [description]
         */
        getLastAccessTag: function getLastAccessTag() {
          return _models.LocalKVDB.get(_OKConfig.LAST_ACCESS_TAG_KEY, _OKConfig.ALL_TAG_ID);
        },

        /**
         * 设置最后一次访问的标签
         */
        setLastAccessTag: function setLastAccessTag(gtid) {
          gtid = gtid || 0;
          _models.LocalKVDB.set(_OKConfig.LAST_ACCESS_TAG_KEY, gtid);
        },

        /**
         * 贴纸写入本地数据库
         */
        insertLocalNotes: function insertLocalNotes(notes) {
          var _this = this;
          var newNotes = [];
          var gnid_sortbys = _models.LocalKVDB.get(_OKConfig.GNID_SORTBY_BIND_KEY_NAME, {});

          //调试数据
          var expunged = [];
          var insert = [];
          var update = [];
          var uselocal = [];

          //贴纸对应本地的贴纸数据
          var localNote = null;

          //写入本地数据
          $(notes).each(function (i, note) {
            //重置localNote
            localNote = null;

            if (gnid_sortbys) {
              var currentSortby = gnid_sortbys[note.gnid];
              localNote = _this.getNoteBySortby(currentSortby);
            }

            //被彻底删除的，从本地删除所有索引包括数据
            if (this.expunged == 1) {
              _this.updateSortBys(this.gnid, null, localNote);

              expunged.push(this.gnid);

              //生成一个比较大的sortby，否则无法更新界面
              this.sortby = this.sortby || Date.now() + parseInt(i, 10);

              //界面需要
              newNotes.push(this);
            } else {

              //如果本地不存在此条贴纸，或者存在此条贴纸，而且sortby大于本地的sortby(版本号)
              if (!localNote || localNote.sortby <= note.sortby) {

                //将taglist转为tags
                note.tags = [];
                if (note.taglist && note.taglist.length > 0) {
                  $(note.taglist).each(function () {
                    note.tags.push(this.gtid);
                  });
                }
                _this.setNoteBySortby(note);

                //添加关联(标签的贴纸)
                if (localNote) {
                  _this.updateSortBys(note.gnid, note, localNote);

                  update.push(note.gnid);
                } else {
                  _this.updateSortBys(note.gnid, note, null);

                  insert.push(note.gnid);
                }

                newNotes.push(note);

                //存在本地贴纸，而且本地贴纸版本号更大，则使用本地数据
              } else {
                newNotes.push(localNote);

                uselocal.push(this.gnid);
              }
            }
          });

          _O.debug("插入本地贴纸", "服务器总共返回" + notes.length + "条");
          _O.debug("插入本地贴纸", "顺序[expunged,insert,update,uselocal]", [expunged, insert, update, uselocal]);

          return newNotes;
        },

        /**
         * 清空回收站
         *
         * @return {[type]} [description]
         */
        clearTrash: function clearTrash() {
          //先得到所有回收站的贴纸
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
          var sortbys = gtid_sortbys[_OKConfig.TRASHBIN_ID];

          if (sortbys && sortbys.length > 0) {
            var gnid_sortbys = _models.LocalKVDB.get(_OKConfig.GNID_SORTBY_BIND_KEY_NAME, {}),
            note;

            for (var i = 0; i < sortbys.length; i++) {
              this.deleteNoteBySortby(sortbys[i]);
            }
          }

          //将回收站的sortby集合置空
          gtid_sortbys[_OKConfig.TRASHBIN_ID] = [];
          _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);

          //垃圾桶的数量更新为0
          var tag = _models.TagModel.getTagByGtid(_OKConfig.TRASHBIN_ID);

          if (tag) {
            tag.notes_num = 0;
            _models.TagModel.setLocalTagData(tag);
          }

          var user = _models.UserModel.getLocalUser();
          if (user && user.uid) {
            //调用远程请求
            _models.Request.get("note/removed?delete=" + user.uid, null, function (data) {
              if (data.status == 1) {
                //清理成功
                _O.debug("清理垃圾桶", "成功");
              } else {
                //清理失败
                _O.debug("清理垃圾桶", "失败");
              }
            });
          }
        },

        /**
         * 贴纸新增接口
         * @param note       贴纸实体
         * @param callback   返回新增状态包含贴纸新实体 {gnid:****}
         */
        insert: function insert(note, callback) {
          var _this = this;

          /**
           * 对参数进行过滤
           */
          if (!note || !note.sortby) {
            return false;
          }

          if (note.content.indexOf('<img') > -1) {
            note.upload = true;
          }

          // 写入本地数据
          _this.setNoteBySortby(note);

          this.updateSortBys(note.gnid, note, null);

          //贴纸创建完成之后将其中的图片进行保存(存入CDN,数据库)
          this.extractImagesList(note);

          //类别的数量更新
          //全部数量
          _models.TagModel.setTagNoteNumber(0, true);
          _O.debug("新增贴纸标签", note.tags);
          //有分类,
          if (note.tags && note.tags.length > 0) {
            $(note.tags).each(function (i, gtid) {
              _models.TagModel.setTagNoteNumber(gtid, true);
            });
            //无分类
          } else {
            _models.TagModel.setTagNoteNumber(_OKConfig.NO_TAG_ID, true);
          }

          //放入队列
          _models.SyncManager.getInstance('note').dataChanged(note, note.sortby);

          /**
           * 远程创建贴纸
           */
          callback && callback(note);
          return note;
        },

        /**
         * 及时创建接口
         *
         * @param note       贴纸实体
         */
        timelyCreate: function timelyCreate(note, callback) {
          var _this = this;

          /**
           * 对参数进行过滤
           */
          if (!note || !note.sortby) {
            return false;
          }

          if (note.content.indexOf('<img') > -1) {
            note.upload = true;
          }

          // 写入本地数据
          _this.setNoteBySortby(note);

          _this.updateSortBys(note.gnid, note, null);

          _this.syncCreate([note], function (data) {
            // 贴纸本地创建成功回调
            callback && callback(data);

            //贴纸服务器端创建成功,进行图片的上传
            if (data.status == 1) {
              if (!!note.upload) {
                //贴纸提取图片
                _this.extractImagesList(note, function (oldNote) {

                  // 添加上传好图片贴纸到更新队列
                  _this.uploadImagesInNote(oldNote.imglist, oldNote, function (note) {

                    if (!note.images) {
                      $(note.imglist).each(function (i, image) {
                        //添加cdn图片到封面
                        if (image.width >= 300) {
                          _O.debug("图片上传", "获取封面图为:" + image.url);
                          note.images = image;
                          return false;
                        }
                      });
                    }

                    //更新贴纸数据
                    delete note.upload;
                    note.modified = note.modified + 1;
                    _this.setNoteBySortby(note);
                    _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [note]});

                    //放入远程更新队列中
                    _models.SyncManager.getInstance('note').dataChanged({
                      gnid: note.gnid,
                      sortby: note.sortby,
                      content: note.content,
                      images: note.images,
                      imglist: note.imglist,
                      modified: note.modified
                    });
                  });
                });
              }

              //服务器端创建失败
            } else {
              _models.SyncManager.getInstance('note').dataChanged(note, note.sortby);
              //贴纸创建完成之后将其中的图片进行保存
              _this.extractImagesList(note);
            }
          }, function () {
            _models.SyncManager.getInstance('note').dataChanged(note, note.sortby);
          });
        },

        /**
         * 提取图片
         *
         * @param note
         * @param callback
         * @returns {boolean}
         */
        extractImagesList: function extractImagesList(note, callback) {
          if (!note) {
            return false;
          }

          var gnid = note.gnid,
          sortby = note.sortby,
          content = note.content,
          _this = this;

          // 提取content图片先临时存在本地以便上传不成功下次调用
          _utils.ContentUtil.getImagesInContent(content, function (images) {
            _O.log("贴纸中检测到的图片:", images);
            if (images && images.length > 0) {

              var oldNote = _this.getNoteBySortby(sortby);
              oldNote.imglist = $.isArray(oldNote.imglist) ? oldNote.imglist : [];
              oldNote.imglist = oldNote.imglist.concat(images);

              // 写入本地数据
              _this.setNoteBySortby(oldNote);

              callback && callback(oldNote);
            }
          });
        },

        /**
         * 得到贴纸模型中未被上传的图片
         *
         * @return {[type]} [description]
         */
        getImagesNeedUpload: function getImagesNeedUpload(note) {
          var images = [];

          $(note.imglist).each(function () {
            if (!this.uploaded) {
              images.push(this);
            }
          });

          //检测内容中是否还包含src为第三方的图片?

          return images;
        },

        /**
         * 上传属于贴纸的图片数据，并进行上传后相应数据的更新(content,imglist)
         *
         * @param  array   images    [需要被上传的图片数据]
         * @param  object  noteProps [贴纸数据对象,必须有content属性]
         * @param  function callback  [全部处理完成之后的回调]
         * @return object  noteProps    [更新后的贴纸数据对象]
         */
        uploadImagesInNote: function uploadImagesInNote(images, noteProps, callback) {
          if (!$.isArray(images) || images.length == 0) return;

          var i = 0;

          _O.debug('图片上传', '上传贴纸中的图片' + images.length + '张');
          //上传图片二进制数据
          _models.ImageModel.uploadImages(images, function (imageData) {
            i++;
            _O.debug("图片上传", "note.upload:" + (noteProps.upload || i));

            //更新后的图片数据
            var image = {
              width: imageData.width,
              height: imageData.height,
              url: imageData.url,
              size: imageData.blob.size,
              type: imageData.blob.type,
              uploaded: true
            };

            //替换images中存储的原始img
            $(images).each(function (i) {
              if (this.url == image.url) {
                images[i] = image;
              }
            });

            //更新content中的图片src为cdn地址
            //更新内容中的图片
            var contentDiv = document.createElement("div");
            contentDiv.innerHTML = noteProps.content;

            var cdn_img_url = _utils.ImageUtil.getFullsizeImgViaSrc(image.url, image.size, image.width, image.height, image.type.indexOf('gif') > -1);

            $('img[src="' + image.url + '"]', contentDiv).attr('src', cdn_img_url).attr('_src', image.url).attr('data-width', image.width).attr('data-height', image.height);

            //替换content
            noteProps.content = contentDiv.innerHTML;
            contentDiv = null;

            _O.debug("图片上传", "处理完队列贴纸(" + noteProps.upload + ")中的第" + i + "张图片");

            //已经完成图片上传,则进行保存
            if (i == images.length) {
              _O.debug("图片上传成功!!!!!!!", "处理完所有队列贴纸中的图片,删除标识,贴纸数据:");
              _O.log(noteProps.content);

              noteProps.imglist = images;

              if (callback) callback.call(null, noteProps);
            }
          });
        },

        /**
         * 上传贴纸图片
         *
         * @param note
         * @param callback
         */
        uploadImagesInNoteAlpha: function uploadImagesInNoteAlpha(note, callback) {

          var _this = this,
          sortby = note.sortby,
          imglist = note.imglist;

          _O.debug('图片上传', '上传贴纸中的图片' + imglist.length + '张');
          _models.ImageModel.uploadImages(imglist, function (imageData) {

            //每一张上传成功，执行一次updateImage
            _this.updateImage(sortby, imageData, callback);
          });
        },

        /**
         * 更新笔记里面图片相关数据,imglist中的图片信息，以及content中的图片src
         *
         * @param sortby
         * @param imageData
         * @param callback
         */
        updateImage: function updateImage(sortby, imageData, callback) {
          _O.debug("图片上传", "准备更新贴纸中的图片数据");

          var _this = this,
          note = _this.getNoteBySortby(sortby);

          //更新后的图片数据
          var image = {
            width: imageData.width,
            height: imageData.height,
            url: imageData.url,
            size: imageData.blob.size,
            type: imageData.blob.type
          };

          //替换(imglist中)存储的原始img
          if ($.isArray(note.imglist)) {
            $(note.imglist).each(function (i) {
              if (this.url == image.url) {
                note.imglist[i] = image;
              }
            });
          }

          //更新内容中的图片
          var contentDiv = document.createElement("div");
          contentDiv.innerHTML = note.content;

          var cdn_img_url = _utils.ImageUtil.getFullsizeImgViaSrc(image.url, image.size, image.width, image.height, image.type.indexOf('gif') > -1);

          $('img[src="' + image.url + '"]', contentDiv).attr('src', cdn_img_url).attr('_src', image.url).attr('data-width', image.width).attr('data-height', image.height);

          //替换content
          note.content = contentDiv.innerHTML;
          contentDiv = null;

          // 添加cdn图片到封面
          if (image.width >= 300 && !note.images) {
            _O.debug("图片上传", "获取封面图为:" + image.url);
            note.images = image;
          }

          _O.debug("图片上传", "note.upload:" + note.upload);
          if (isNaN(note.upload) || note.upload === true) {
            note.upload = 1;
          } else {
            note.upload++;
          }
          _O.debug("图片上传", "note.upload:" + note.upload);
          _O.debug("图片上传", "处理完队列贴纸中的第" + note.upload + "张图片");

          if (note.upload >= note.imglist.length) {
            _O.debug("图片上传成功!!!!!!!", "处理完所有队列贴纸中的图片,删除标识,贴纸数据:");
            _O.log(note.content);
            delete note.upload;
            callback && callback(note);
          }

          // 写入本地数据
          _this.setNoteBySortby(note);
        },

        /**
         * 贴纸修改接口
         *
         * @param note       贴纸实体
         * @param callback   返回修改状态
         */
        update: function update(note, callback) {
          if (!note.sortby) return false;

          _O.log('贴纸修改接口');

          //得到原始sortby
          var originalSortby = note.sortby;
          var modified = _utils.TimeUtil.time();
          var sortby = _models.AppModel.generateSortby();
          note.modified = modified;
          note.sortby = sortby;

          //如果是修改内容,则需要联动修改摘要和封面图
          if (note.content) {
            var summaryData = _utils.ContentUtil.getSummaryData(note.content);

            note.summary = summaryData.text || "";
            note.images = summaryData.feature_img || null;

            //封面视频 summaryData.feature_video
          }

          //将更新放入队列
          _models.SyncManager.getInstance('note').dataChanged(note);

          var newNoteData;
          var originalNote = this.getNoteBySortby(originalSortby);

          if (!!originalNote) {

            //合并新老数据前
            newNoteData = $.extend({}, originalNote, note);

            //彻底删除，则删除所有关联
            if (note.expunged == 1) {
              this.updateSortBys(note.gnid, null, originalNote);
            } else {
              //将更新后的贴纸写入本地
              this.setNoteBySortby(newNoteData);

              this.updateSortBys(note.gnid, newNoteData, originalNote);
            }
          } else {
            _O.debug("贴纸更新", "没找到本地贴纸gnid:" + note.gnid + ",sortby:" + originalSortby);
          }

          //removed属性被修改,更新分类数量
          if (note.hasOwnProperty("removed")) {

            //贴纸被删除,将贴纸放入垃圾篓,此贴纸其他分类计数均减1,垃圾篓计数加1
            //贴纸被恢复,将贴纸恢复,此贴纸其他分类均加1,垃圾篓减去1
            var isRemove = note.removed == 1;

            //垃圾篓计数
            _models.TagModel.setTagNoteNumber(_OKConfig.TRASHBIN_ID, isRemove);

            //全部分类计数
            _models.TagModel.setTagNoteNumber(0, !isRemove);

            //如果有其他标签
            if (newNoteData.tags && newNoteData.tags.length > 0) {
              $(newNoteData.tags).each(function (i, gtid) {
                _models.TagModel.setTagNoteNumber(gtid, !isRemove);
              });

              //之前属于无分类
            } else {
              _models.TagModel.setTagNoteNumber(_OKConfig.NO_TAG_ID, !isRemove);
            }
          }

          //被彻底删除,垃圾桶数量减一
          if (note.expunged == 1) {
            _models.TagModel.setTagNoteNumber(_OKConfig.TRASHBIN_ID, false);
          }

          //添加上分类信息
          if (newNoteData && newNoteData.tags) {
            note.tags = newNoteData.tags;
          }

          //返回更新后的属性
          return note;
        },

        /**
         * 贴纸清空垃圾桶接口
         * @param callback   返回修改状态
         */
        noteRemoved: function noteRemoved(callback) {

          _models.Request.get("note/removed", '', function (data) {

            //请求成功后
            if (data && data.status == 1) {

              if (callback) callback.call(null, {
                online: true,
                status: "ok"

              });

              _utils.WindowMessager.notifyAll('data-changed', {
                type: 'new',
                notes: [note]
              });

              // 远程返回失败
            } else {
              if (callback) {
                callback({
                  online: true,
                  status: 0,
                  message: "error",
                  list: []
                });
              }
            }
          },
          //拉取失败，断网或者协议问题等等，取本地tag对应的标
          function () {
            if (callback) {
              callback({
                "status": 0,
                "message": "error"
              });
            }
          });
        },

        /**
         * 按关键字搜索
         * @param {object} [filters] [过滤器: {keywords, rows, offset} ]
         * @param {function} [callback] [回调函数: {status, localdone=>本地是否搜索完, list}]
         */
        search: function search(filters, callback) {
          if (!filters.keywords) return false;

          var _this = this;
          var results = [];
          var resultLastSortby = null;

          var keywords = filters.keywords;

          //搜本地使用小写
          var lowercaseKeywords = keywords.toLowerCase();

          var rows = filters.rows || 30;
          var lastSortby = filters.offset || 0;

          //先从本地搜索
          var sortbys = _models.TagModel.getNotesCollection();
          var sortbyIndex = sortbys.indexOf(lastSortby);

          var sortbyRange = sortbys.slice(sortbyIndex + 1);

          sortbyRange.sort(function (a, b) {
            return b - a;
          });

          $(sortbyRange).each(function (i, sortby) {
            var note = _this.getNoteBySortby(sortby);

            if (note && note.removed == 0 && (note.title.toLowerCase().indexOf(lowercaseKeywords) >= 0 || note.content.toLowerCase().indexOf(lowercaseKeywords) >= 0)) {

              if (results.length <= rows) {
                results.push(note);
                resultLastSortby = sortby;
              } else {
                return false;
              }
            }
          });

          //在线搜索
          if (results.length < rows) {

            //本地数据少于需要的,则本地搜完了
            if ($.isFunction(callback) && results.length >= 0) callback.call(null, {
              status: 1,
              localdone: true,
              list: results
            });

            //则从远程取
            rows = rows - results.length;
            filters.rows = rows;
            filters.offset = resultLastSortby || 0;

            _O.log("搜索", "本地搜索出" + results.length + "条,去服务器继续搜索" + filters.rows + "条");

            this.searchOnline(filters, function (data) {
              _O.log("搜索", "服务器继续搜索到" + data.list.length + "条");
              if ($.isFunction(callback)) callback.call(null, data);
            });
          } else {
            //搜索到贴纸，回调
            if ($.isFunction(callback) && results.length > 0) callback.call(null, {status: 1, list: results});
          }
        },

        /**
         * 得到贴纸分享出去的地址
         * @param  {Int} id [贴纸id]
         * @return {String} [分享出去的地址]
         */
        getNoteUrl: function getNoteUrl(id) {
          if (!id) return "";

          var user = _models.UserModel.getLocalUser();

          if (user && user.uid) {
            return _OKConfig.origin + "/paper/" + id + "?u=" + user.uid;
          } else {
            return _OKConfig.origin + "/paper/" + id;
          }
        },

        /**
         * 按关键字搜索远程贴纸
         * @param {object} [filters] [过滤器: {keywords, rows, offset} ]
         * @param {function} [callback] [回调函数: {status, list}]
         */
        searchOnline: function searchOnline(filters, callback) {
          if (!filters.keywords) return false;

          var _this = this;
          var keywords = filters.keywords;
          var rows = filters.rows || 20;
          var lastSortby = filters.offset || 0;

          var results = [];

          _models.Request.get('note/search', {
            offset: lastSortby,
            rows: rows,
            keywords: keywords
          }, function (data) {

            if (data.status == 1) {
              data.online = true;
              data.list = data.data.list;

              //成功返回结果
              if ($.isFunction(callback)) callback.call(null, data);
            } else {
              //搜索失败

            }
          });
        },

        /**
         * 根据scheme数据结构对数据中的字段进行检测
         */
        verify: function verify(note, callback) {

          var i = 0;
          for (i in note) {

            if (note.hasOwnProperty(i) && !(!!this.scheme[i] && this.scheme[i].type == typeof note[i])) {

              !!callback ? callback({
                status: "error"
              }) : '';

              return false;
            }
          }
          return true;
        },
        /**
         * 通过sortby获取本地单个笔记
         * @returns {*}
         */
        getNoteBySortby: function getNoteBySortby(sortby) {
          return _models.LocalKVDB.get('note_' + sortby, '');
        },

        /**
         * 设置本地的笔记数据库
         * @param notes
         * @returns {*}
         */
        setNoteBySortby: function setNoteBySortby(note) {
          _models.LocalKVDB.set('note_' + note.sortby, note);
        },

        /**
         * 删除本地的笔记
         * @param notes
         * @returns {*}
         */
        deleteNoteBySortby: function deleteNoteBySortby(sortby) {
          _models.LocalKVDB.deleteKey('note_' + sortby);
        },

        /**
         * 更新贴纸的sortby及后续处理
         */
        updateSortBys: function updateSortBys(gnid, newNote, oldNote) {
          var newSortby = newNote && parseInt(newNote.sortby, 10);
          var oldSortby = oldNote && parseInt(oldNote.sortby, 10);

          //如果传入的新的sortby和旧的sortby，且新的sortby比旧的sortby小,则直接返回
          if (newSortby > 0 && oldSortby > 0 && newSortby < oldSortby) {
            return false;
          }

          /**
           * 更新gnid 与 sortby的对应关系，删除老关系，添加新关系
           */
          var gnid_sortbys = _models.LocalKVDB.get(_OKConfig.GNID_SORTBY_BIND_KEY_NAME, {});

          //如果没传旧的sortby,程序自动获取,避免sortbys索引重复
          if (!oldSortby) {
            oldSortby = gnid_sortbys[gnid];
          }

          if (oldSortby > 0) {
            //删除旧的关联
            delete gnid_sortbys[gnid];

            //删除原有贴纸
            if (newSortby != oldSortby) this.deleteNoteBySortby(oldSortby);
          }

          if (newSortby > 0) {
            gnid_sortbys[gnid] = newSortby;
          }

          _models.LocalKVDB.set(_OKConfig.GNID_SORTBY_BIND_KEY_NAME, gnid_sortbys);

          /**
           * (根据标签)更新贴纸对应的集合关系
           */
          //所有标签贴纸集合
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
          //"全部"贴纸集合
          var sortbys = _models.LocalKVDB.get(_OKConfig.NOTES_SORTBY_KEY_NAME, []);

          //将旧的sortby关联全部去除
          if (oldSortby > 0) {

            //"全部"中的关联更新
            var index = sortbys.indexOf(oldSortby);

            if (index > -1) {
              sortbys.splice(index, 1);
              // console.log("移除旧的sortby",oldSortby);
            }

            //对应标签下关联更新
            if (oldNote && $.isArray(oldNote.tags) && oldNote.tags.length > 0) {

              var sortbysArr,
              tags = oldNote.tags;

              for (var i = 0; i < tags.length; i++) {

                // 得到当前标签的sortby集合
                sortbysArr = gtid_sortbys[tags[i]] || [];

                if (oldSortby > 0) {
                  // 如果存在oldSortby说明要替换
                  var index = sortbysArr.indexOf(oldSortby);

                  if (index >= 0) {
                    sortbysArr.splice(index, 1);
                  }
                }

                gtid_sortbys[tags[i]] = sortbysArr;
              }

              //未分类下的关联删除
            } else {

              var sortbysArr = gtid_sortbys[_OKConfig.NO_TAG_ID] || [];
              var index = sortbysArr.indexOf(oldSortby);

              if (index >= 0) {
                sortbysArr.splice(index, 1);

                gtid_sortbys[_OKConfig.NO_TAG_ID] = sortbysArr;
              }
            }

            //垃圾桶中sortby更新
            if (oldNote && oldNote.removed == 1) {

              var sortbysArr = gtid_sortbys[_OKConfig.TRASHBIN_ID] || [];
              var index = sortbysArr.indexOf(oldSortby);

              if (index >= 0) {
                sortbysArr.splice(index, 1);

                gtid_sortbys[_OKConfig.TRASHBIN_ID] = sortbysArr;
              }
            }
          }

          if (newSortby > 0) {

            //贴纸被删除,在垃圾桶中添加新关联
            if (newNote && newNote.removed == 1) {

              var sortbysArr = gtid_sortbys[_OKConfig.TRASHBIN_ID] || [];
              var index = sortbysArr.indexOf(newSortby);

              if (index < 0) {
                sortbysArr.unshift(newSortby);

                gtid_sortbys[_OKConfig.TRASHBIN_ID] = sortbysArr;
              }
            } else {

              //全部集合中添加新关联
              var index = sortbys.indexOf(newSortby);
              if (index < 0) {
                sortbys.unshift(newSortby);
              }

              //其他集合中sortby更新,添加newSortby
              //对应标签下关联更新
              if (newNote && $.isArray(newNote.tags) && newNote.tags.length > 0) {

                var sortbysArr,
                tags = newNote.tags;

                for (var i = 0; i < tags.length; i++) {
                  // 得到当前标签的sortby集合
                  sortbysArr = gtid_sortbys[tags[i]] || [];

                  if (sortbysArr.indexOf(newSortby) < 0) {
                    sortbysArr.unshift(newSortby);
                  }

                  gtid_sortbys[tags[i]] = sortbysArr;
                }

                //未分类下的关联添加,添加newSortby
              } else {

                var sortbysArr = gtid_sortbys[_OKConfig.NO_TAG_ID] || [];
                var index = sortbysArr.indexOf(newSortby);

                if (index < 0) {
                  sortbysArr.unshift(newSortby);

                  gtid_sortbys[_OKConfig.NO_TAG_ID] = sortbysArr;
                }
              }
            }
          }

          //所有标签贴纸集合
          _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);
          //"全部"贴纸集合
          _models.LocalKVDB.set(_OKConfig.NOTES_SORTBY_KEY_NAME, sortbys);
        },

        /**
         * 删除sortby对应贴纸的所有标签关联
         *
         * @return {[type]} [description]
         */
        deleteNoteRelation: function deleteNoteRelation(sortby) {
          var note = this.getNoteBySortby(sortby),
          gtid,
          index;
          if (!note) return false;

          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          var tagRelationChanged = false;

          if ($.isArray(note.tags) && note.tags.length > 0) {

            for (var i = 0; i < note.tags.length; i++) {
              gtid = note.tags[i];
              index = gtid_sortbys[gtid].indexOf(sortby);

              if (gtid_sortbys[gtid] && index >= 0) {
                gtid_sortbys[gtid].splice(index, 1);
                tagRelationChanged = true;
              }
            }
          }

          if (tagRelationChanged) {
            _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);
          }
        },

        /**
         * 删除标签
         *
         * @param  {[type]} note [description]
         * @param  {[type]} gtid [description]
         * @return {[type]}      [description]
         */
        removeTag: function removeTag(note, gtid) {
          //贴纸tags字段
          note = this.getNoteBySortby(note.sortby) || note;
          note.tags = note.tags || [];
          var index = note.tags.indexOf(gtid);

          if (index >= 0) {
            note.tags.splice(index, 1);
          }

          //贴纸更新
          note = this.update({gnid: note.gnid, tags: note.tags, sortby: note.sortby});

          //tag关联表
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
          var collection = gtid_sortbys[gtid] || [];
          var index2 = collection.indexOf(note.sortby);

          if (index2 >= 0) {
            collection.splice(index2, 1);
            gtid_sortbys[gtid] = collection;
            _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);
          }

          //标签贴纸数量减1
          _models.TagModel.setTagNoteNumber(gtid, false);

          //如果贴纸此时无标签，则未分类数量加1
          if (note.tags.length == 0) {
            _models.TagModel.setTagNoteNumber(_OKConfig.NO_TAG_ID, true);
          }

          return note;
        },

        /**
         * 给贴纸添加标签
         *
         * 贴纸tags字段,sortby会改变
         * tag关联表
         * 标签的贴纸数量改变
         *
         * @param {[type]} note [description]
         * @param {[type]} gtid [description]
         */
        addTag: function addTag(note, gtid) {
          //如果贴纸之前在未分类之中，则将未分类数量减1
          if (!note.tags || note.tags.length == 0) {
            _models.TagModel.setTagNoteNumber(_OKConfig.NO_TAG_ID, false);
          }

          var localNote = this.getNoteBySortby(note.sortby);
          note = localNote && localNote.sortby > note.sortby ? $.extend(note, localNote) : note;

          //贴纸tags字段
          note.tags = note.tags || [];
          note.tags.push(gtid);

          //贴纸更新
          var newNote = this.update({gnid: note.gnid, tags: note.tags, sortby: note.sortby});

          //将更新后的属性扩展到贴纸上
          note = $.extend(note, newNote);

          //标签贴纸数量加1
          _models.TagModel.setTagNoteNumber(gtid, true);

          return newNote;
        },

        /************************* 第一版队列程序 *******************************/

        /**
         * * 获取队列
         * @param {string} type  创建create,新增update
         * @returns {*}  创建{} ,新增[]
         */
        getQueue: function getQueue(type) {
          if (type == 'create') {
            return _models.LocalKVDB.get(_OKConfig.NOTES_ADD_KEY, {});
          } else if (type == 'update') {
            return _models.LocalKVDB.get(_OKConfig.NOTES_EIDT_KEY, {});
          }
        },

        /**
         * 插入操作放入队列
         *
         * @param {string} [gnid] [贴纸的主键]
         * @param {int} [sortby] [贴纸的排序值，取出贴纸的关键]
         * @return int [队列中的数据数目]
         *
         *
         *
         * !!!!!!注意: 若键名前面没有@符号或者特殊符号，jstorage会将此键清除
         */
        queueInsert: function queueInsert(gnid, sortby) {
          if (!gnid || !sortby) return false;

          var queue = $.extend({}, _models.LocalKVDB.get(_OKConfig.NOTES_ADD_KEY, {}));

          queue["@" + gnid] = sortby;

          _models.LocalKVDB.set(_OKConfig.NOTES_ADD_KEY, queue);

          _models.SyncQueue.notify();

          var size = this.queueSize('create');

          _O.debug('队列:创建:新数据', "数据量有" + size + "条");
          return size;
        },

        /**
         * 队列中剩余元素计数
         *
         * @return {int}
         */
        queueCount: function queueCount() {
          var count = 0;

          var createQueue = this.getQueue('create');

          for (var gnid in createQueue) {
            if (createQueue.hasOwnProperty(gnid)) {
              count++;
            }
          }

          var updateQueue = this.getQueue('update');

          for (var gnid in updateQueue) {
            if (updateQueue.hasOwnProperty(gnid)) {
              count++;
            }
          }

          return count;
        },

        /**
         * 队列中剩余的条目数
         *
         * @param  string type ['update' | 'create']
         * @return int      [条目数]
         */
        queueSize: function queueSize(type) {
          var queue = this.getQueue(type);

          //打印长度
          if (Object.keys) {
            var size = Object.keys(queue).length;
            return size;
          } else {
            var size = 0;

            for (var gnid in queue) {
              if (queue.hasOwnProperty(gnid)) {
                size++;
              }
            }

            return size;
          }
        },

        /**
         * 修改操作放入队列
         * @param {object} [note] [被更新的贴纸数据,gnid属性必需]
         * @return int [队列中的数据数目]
         *
         *
         *
         * !!!!!!注意: 若键名前面没有@符号或者特殊符号，jstorage会将此键清除
         *
         */
        queueUpdate: function queueUpdate(note) {
          if (!note.gnid) return false;

          //如果在创建队列中存在，则无需将此次更新放入更新队列，只需将sortby更新即可
          var insertQueue = _models.LocalKVDB.get(_OKConfig.NOTES_ADD_KEY, {});
          if (insertQueue["@" + note.gnid] && note.sortby) {
            insertQueue["@" + note.gnid] = note.sortby;
            _models.LocalKVDB.set(_OKConfig.NOTES_ADD_KEY, insertQueue);

            _models.SyncQueue.notify();
            return false;
          }

          var queue = _models.LocalKVDB.get(_OKConfig.NOTES_EIDT_KEY, {});

          var existProps = queue["@" + note.gnid];
          if (existProps) {

            //将需要扩展的属性先扩展
            if (note.imglist) {
              existProps.imglist = $.extend([], existProps.imglist, note.imglist);
            }

            note = $.extend(existProps, note);
          }

          queue["@" + note.gnid] = note;
          _models.LocalKVDB.set(_OKConfig.NOTES_EIDT_KEY, queue);

          _models.SyncQueue.notify();

          var size = this.queueSize('update');

          _O.debug('队列:更新:新数据', "数据量有" + size + "条");
          return size;
        },

        /**
         * 删除操作放入队列
         * @param {string} gnid 被删除的贴纸队列索引,
         * @param {string} type 队列的类型
         */
        queueDelete: function queueDelete(gnid, type) {
          if (!gnid) return false;

          if (type == 'create') {
            var queue = _models.LocalKVDB.get(_OKConfig.NOTES_ADD_KEY, {});

            delete queue["@" + gnid];

            _models.LocalKVDB.set(_OKConfig.NOTES_ADD_KEY, queue);
          } else if (type == 'update') {
            var queue = _models.LocalKVDB.get(_OKConfig.NOTES_EIDT_KEY, {});

            delete queue["@" + gnid];

            _models.LocalKVDB.set(_OKConfig.NOTES_EIDT_KEY, queue);
          }
        },

        /**
         * 启动同步
         *
         */
        startQueue: function startQueue() {
          var user = _models.UserModel.getLocalUser();

          if (user && user.uid) _models.SyncQueue.start();
        },

        /**
         * 清空队列
         *
         */
        flushQueue: function flushQueue(callback) {
          var user = _models.UserModel.getLocalUser();

          if (user && user.uid) _models.SyncQueue.flush(callback);
        },

        /**
         * 关闭同步
         *
         */
        stopQueue: function stopQueue() {
          _models.SyncQueue.stop();
        }

        /************************* 第一版队列程序 *******************************/

      };

      exports['default'] = Note;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 170 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $) {
      /**
       * Created by hlwen on 16/4/6.
       *  数据接口
       *  负责远程ajax数据请求
       *
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var tool = {

        getAPIRoot: function getAPIRoot() {
          return _models.AppModel.Globals.protocol + "://" + _OKConfig.API_DOMAIN + "/" + _OKConfig.API_VERSION + "/";
        },

        toQueryPair: function toQueryPair(key, value) {
          if (typeof value == 'undefined') {
            return key;
          }
          return key + '=' + encodeURIComponent(value === null ? '' : String(value));
        },

        /**
         * 将对象转化为url参数
         *toQueryString({name : 'xesam',age : 24}); //name=xesam&age=24
         *toQueryString({name : 'xesam',age : [24,25,26]}); //name=xesam&age=24&age=25&age=26
         */
        toQueryString: function toQueryString(obj) {
          var _this = this;
          var ret = [];
          for (var key in obj) {
            key = encodeURIComponent(key);
            var values = obj[key];
            if (values && values.constructor == Array) {
              //数组
              var queryValues = [];
              for (var i = 0, len = values.length, value; i < len; i++) {
                value = values[i];
                queryValues.push(_this.toQueryPair(key, value));
              }
              ret = ret.concat(queryValues);
            } else {
              //字符串
              ret.push(_this.toQueryPair(key, values));
            }
          }
          return ret.join('&');
        },

        _call: function _call(params) {
          var newFilters = {
            did: 'ZlVsZm11aDArbHExd3RCcE1VZm1TVjVKWkthTHZJY1dPT3Z5aFVWb2Zqb0hHalFYSWFmOGZnRCtURGxqam1IdFpFbjFMbnZwa2xZNTNHNU5QazBKRDNoRUJsMCtib3ZHZkhtbFNuOG4vTlUwbXZWNnVxZTNsaDk0OWFYVklyK3EzQQ',
            dv: _OKConfig.version
          };

          if (!!newFilters) {
            params.url = params.url.indexOf("?") >= 0 ? params.url + '&' + this.toQueryString(newFilters) : params.url + '?' + this.toQueryString(newFilters);
          }

          var successCallback = params.success;
          params.success = function (data) {
            successCallback && successCallback(data);

            //处理用户相关的网络异常
            _models.UserModel.handleNetworkExceptions(data);
          };

          var errorCallback = params.error;
          params.error = function ($xhr, m, statusText) {
            errorCallback && errorCallback($xhr);

            //服务器错误
            if ($xhr.status >= 500) {
              // alert("方片收集: 抱歉,服务器状态异常,建议您暂时不对数据进行操作,有数据问题,请联系程序员: 88659108@qq.com");
            }
          };

          params.crossDomain = true;
          params.xhrFields = {withCredentials: true};

          $.ajax(params);
        }
      };

      var Request = {

        /**
         *
         * @param url
         * @param filters 需要的参数
         * @param callback 成功回调
         * @param failure 失败回调
         * @param confg 特殊配置传入对象
         *
         */
        get: function get(url, filters, callback, failure, confg) {
          if ($.isFunction(filters)) {
            callback = filters;
            failure = callback;
            confg = failure;
          }

          var params = {
            type: "GET",
            url: tool.getAPIRoot() + url,
            data: $.isFunction(filters) ? '' : filters,
            success: callback ? callback : '',
            error: failure ? failure : ''
          };

          if (!!confg) {
            params = $.extend(params, confg);
          }

          tool._call(params);
        },

        /**
         * @param data  json对象
         * @param filters  需要带在url后面的参数传入对象{},[]
         * @param callback  成功回调
         * @param failure  失败回调
         * @param confg  jQuery特殊配置传入对象{}
         */
        put: function put(url, data, callback, failure, filters, confg) {

          if ($.isFunction(data)) {
            data = '';
            callback = data;
            failure = callback;
            filters = failure;
            confg = filters;
          }

          if (!!filters) {
            url = url.indexOf("?") >= 0 ? '&' + url + tool.toQueryString(filters) : url + '?' + tool.toQueryString(filters);
          }

          var params = {
            type: "PUT",
            url: tool.getAPIRoot() + url,
            data: data,
            success: callback ? callback : '',
            error: failure ? failure : ''
          };

          if (!!confg) {
            params = $.extend(params, confg);
          }

          tool._call(params);
        },

        /**
         * @param data  json对象
         * @param filters  需要带在url后面的参数传入对象{},[]
         * @param callback  成功回调
         * @param failure  失败回调
         * @param confg  jQuery特殊配置传入对象{}
         */
        post: function post(url, data, callback, failure, filters, confg) {

          if ($.isFunction(data)) {
            data = '';
            callback = data;
            failure = callback;
            filters = failure;
            confg = filters;
          }

          if (!!filters) {
            url = url.indexOf("?") >= 0 ? '&' + url + tool.toQueryString(filters) : url + '?' + tool.toQueryString(filters);
          }

          var params = {
            type: "POST",
            url: tool.getAPIRoot() + url,
            data: data,
            success: callback ? callback : '',
            error: failure ? failure : ''
          };

          if (!!confg) {
            params = $.extend(params, confg);
          }

          tool._call(params);
        },

        /**
         * @param data  json对象
         * @param filters  需要带在url后面的参数传入对象{},[]
         * @param callback  成功回调
         * @param failure  失败回调
         * @param confg  jQuery特殊配置传入对象{}
         */
        'delete': function _delete(url, data, callback, failure, filters, confg) {

          if ($.isFunction(data)) {
            data = '';
            callback = data;
            failure = callback;
            filters = failure;
            confg = filters;
          }

          if (!!filters) {
            url = url.indexOf("?") >= 0 ? '&' + url + tool.toQueryString(filters) : url + '?' + tool.toQueryString(filters);
          }
          var params = {
            type: "DELETE",
            url: tool.getAPIRoot() + url,
            data: data,
            success: callback ? callback : '',
            error: failure ? failure : ''
          };

          tool._call(params);
        },

        head: function head(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.open('head', url, true);

          var xhrTimeout = setTimeout(function () {
            xhr.abort();
          }, 3000);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              clearTimeout(xhrTimeout);

              var type = xhr.getResponseHeader("Content-Type");
              if (callback && callback.call) callback.call(null, type);
            }
          };

          xhr.send(null);
        }
      };

      exports['default'] = Request;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161)))

    /***/
  },
  /* 171 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $) {
      /**
       *
       *  用户模型
       *  负责用户数据的增删改查
       *
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var Request = __webpack_require__(170),
      AppModel = __webpack_require__(172),
      TagModel = __webpack_require__(177),
      NoteModel = __webpack_require__(169),
      LocalKVDB = __webpack_require__(178);

      var User = {
        /**
         *
         * 本地数据存储结构
         *
         * */
        scheme: {
          'uid': {
            'type': 'number'
          },
          'nickname': {
            'type': 'string'
          },
          'signature': {
            'type': 'string'
          },
          'mail': {
            'type': 'string'
          },
          'created': {
            'type': 'number'
          },
          'avatar': {
            'type': 'number'
          },

          'avatar_url': {
            'type': 'string'
          }
        },

        /**
         * 数据变化监听处理函数
         */
        dataChangeHandlers: [],

        /**
         * 获取远程用户数据
         */
        userInfo: function userInfo(callback) {

          var _this = this;
          Request.get("user/info/", '', function (data) {

            //请求成功后
            if (data && data.status == 1) {

              // 设置本地用户数据
              _this.setLocalUser(data.data);

              if (callback) {
                callback({
                  online: true,
                  status: data.status,
                  message: data.message,
                  data: data.data
                });
              }

              // 远程返回失败
            } else {
              if (callback) {
                callback({
                  online: true,
                  message: data.message,
                  status: data.status,
                  data: {}
                });
              }
            }
          },
          //拉取失败，断网或者协议问题等等，取本地tag对应的标
          function () {

            if (callback) {
              callback({
                status: 0,
                message: "error",
                data: {}
              });
            }
          });
        },

        /**
         * 用户被屏蔽之后的处理
         *
         * @return {[type]} [description]
         */
        handleNetworkExceptions: function handleNetworkExceptions(data) {
          if (!data) return false;
          var status = parseInt(data.status, 10);

          switch (status) {
          //用户被屏蔽
            case -1014:

              //如果用户处于登录状态则强制退出清除本地数据
              var user = this.getLocalUser();
              if (user && user.uid) {
                alert("方片收集: 您的账号目前处于被屏蔽状态,申诉请联系support@quickwis.com");

                AppModel.clearLocalDB();

                this.logout(function () {
                  location.reload();
                });

                //用户没处于登录状态，可能是调用的user/info登录接口，让登录那边处理
              } else {
              }
              break;

          //令牌过期自动退出
            case -1012:
              var user = this.getLocalUser();

              if (user && user.uid) {
                this.setLocalUser(null);
                this.tokenExpired();
              }
              break;

          //账户被合并
            case -1015:
              var that = this;
              // 重新获取用户数据
              this.userMerged();

              break;
          }
        },

        /**
         * 认证令牌过期提示
         *
         * @return {[type]} [description]
         */
        tokenExpired: function tokenExpired() {
          //通知UI提醒用户
          _utils.NotificationUtil.popupDialog({
            title: "重要提醒",
            content: "您当前的账户认证已经过期,需要重新登录,建议刷新当前界面",
            callback: function callback() {
              //关闭
              _utils.NotificationUtil.closeDialog();

              //清除本地数据
              AppModel.clearLocalDB();

              //重新加载
              location.reload();
            }
          });
        },

        /**
         * 账户被合并,清除贴纸的deadline, 标签的max_version, 所有标签的min_sortby
         *
         */
        userMerged: function userMerged() {
          // 拉取用户信息
          this.userInfo(function () {
            //清除deadline
            LocalKVDB.deleteKey('deadline');

            //清除标签的max_version
            LocalKVDB.deleteKey('max_tag_version');

            //清除所有标签的min_sortby
            TagModel.clearMinSortbys();

            //通知UI提醒用户
            _utils.NotificationUtil.popupDialog({
              title: "重要提醒",
              content: "您当前的账户已经与另一账户合并，建议刷新当前界面以获取新数据",
              callback: function callback() {
                //关闭
                _utils.NotificationUtil.closeDialog();

                _utils.NotificationUtil.showMessage("正在刷新数据...", 'loading', false);
                NoteModel.notePull(function () {
                  _utils.NotificationUtil.showMessage("刷新完成!", 'success');

                  //重新加载
                  location.reload();
                });
              }
            });
          });
        },

        /**
         * 获取本地用户数据
         */
        getLocalUser: function getLocalUser() {

          return LocalKVDB.get(_OKConfig.USER_KEY_NAME, {});
        },

        /**
         * 设置本地用户数据
         */
        setLocalUser: function setLocalUser(user) {
          var newUser = {};

          if (user) {
            var LocalUser = this.getLocalUser();

            newUser = $.extend(LocalUser, user);
          } else {
            //null
          }

          $(this.dataChangeHandlers).each(function (i, callback) {
            callback(newUser);
          });

          return LocalKVDB.set(_OKConfig.USER_KEY_NAME, newUser);
        },

        /**
         * 监听用户数据改变
         *
         * @param function callback [用户数据改变之后的回调函数]
         */
        listenProfileChange: function listenProfileChange(callback) {
          if ($.isFunction(callback)) this.dataChangeHandlers.push(callback);
        },

        /**
         * 用户登出
         * @param callback
         */
        logout: function logout(callback) {
          Request.get('user/loginout', '', function (data) {
            callback && callback(data);
            AppModel.clearLocalDB();
          });
        },

        /**
         * 是否是离线模式,无网络或者用户未登录则使用离线模式
         *
         * @return {Boolean} [description]
         */
        isOfflineMode: function isOfflineMode() {
          var user = this.getLocalUser();
          var uid = user.uid;
          return !navigator.onLine || !uid;
        },

        getUserCdnAvatarUrl: function getUserCdnAvatarUrl(uid) {
          return _OKConfig.img_origin + '/avatar/' + uid;
        },

        /**
         * 根据scheme数据结构对数据中的字段进行检测
         */
        verify: function verify(user, callback) {

          var i = 0;
          for (i in user) {

            if (user.hasOwnProperty(i) && !(!!this.scheme[i] && this.scheme[i].type == typeof user[i])) {

              !!callback ? callback({
                status: "error"
              }) : '';

              return false;
            }
          }
          return true;
        }

      };
      exports['default'] = User;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161)))

    /***/
  },
  /* 172 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $, _O) {
      /**
       * Created by hlwen on 16/4/15.
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _md5 = __webpack_require__(173);

      var _md52 = _interopRequireDefault(_md5);

      var app = {

        Globals: {
          protocol: "https"
        },

        /**
         * 为贴纸生成id
         */
        generateIDAlpha: function generateIDAlpha(sortby) {

          var user = _models.UserModel.getLocalUser();

          var uid = '';
          if (user && user.uid) {
            uid = user.uid;
          }

          var seconds = new Date(Date.now()).getSeconds();
          seconds = seconds > 9 ? seconds : "0" + seconds;

          return (0, _md52['default'])(Date.now() + "" + uid + "" + sortby ? sortby : '') + "" + seconds;
        },

        //生成贴纸全局唯一id
        generateID: function generateID(dataStr, sortby) {
          var user = _models.UserModel.getLocalUser();

          var uid;
          if (user && user.uid) {
            uid = user.uid;
          } else {
            uid = this.generateUuid();
          }

          var clientID = "1";
          var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          var randomChar = chars[Math.floor(Math.random() * 26)];

          //系统信息，浏览器，屏幕，
          var sysInfo = navigator.userAgent + "" + (window.devicePixelRatio || 1) + "" + window._ENV.screen + "" + window._ENV.device;
          var uniqueStr = (0, _md52['default'])(Date.now() + "" + sortby + "" + uid + "" + dataStr + "" + sysInfo);
          chars = null;

          return clientID + "" + randomChar + "" + uniqueStr;
        },

        //随机生成全局唯一id,主要为未登录用户生成uid
        generateUuid: (function () {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }

          return function () {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          };
        })(),

        /**
         * 生成排序值
         */
        // generateSortby: function () {

        //
        //     var hits = parseInt(Date.now() / 1000, 10) - 1452212501 + this._sortby_incrementor;

        //     this._sortby_incrementor++;

        //     return hits
        // },
        generateSortby: function generateSortby() {

          var lastSortby = _models.LocalKVDB.get(_OKConfig.NOTES_LAST_SORTBY, null);

          var sortby = parseInt(Date.now() / 1000, 10) - 1452212501; //unix时间戳  1452212501==2016/1/8 8:21:41

          if (lastSortby >= sortby) {
            sortby = lastSortby + 1;
          }

          lastSortby = sortby;
          _models.LocalKVDB.set(_OKConfig.NOTES_LAST_SORTBY, lastSortby);
          return sortby;
        },

        generateVersion: function generateVersion() {

          var lastVersion = _models.LocalKVDB.get(_OKConfig.NOTES_LAST_VERSION, null);

          var version = parseInt(Date.now() / 1000, 10) - 1452212501; //unix时间戳  1452212501==2016/1/8 8:21:41

          if (lastVersion >= version) {
            version = lastVersion + 1;
          }

          lastVersion = version;
          _models.LocalKVDB.set(_OKConfig.NOTES_LAST_VERSION, lastVersion);
          return version;
        },

        getAPIRoot: function getAPIRoot() {
          return this.Globals.protocol + "://" + _OKConfig.API_DOMAIN + "/" + _OKConfig.API_VERSION + "/";
        },

        getVersion: function getVersion(callback) {
          _models.Request.get('/', callback);
        },

        signRequest: function signRequest(callback) {
          if (this.signature && Date.now() < (this.signature.expire - 10) * 1000) {
            //如果签名还有效则使用旧签名
            callback(this.signature);
          } else {
            _models.Request.get('images/sign_request', callback);
          }
        },

        ossupload: function ossupload(url, binaryImage, name, callback, progress) {
          var fd = new FormData();
          var api = this;

          //参数前移
          if ($.isFunction(name)) {
            progress = callback;

            callback = name;

            name = _utils.ImageUtil.getCDNImageName(url, binaryImage.size);
          } else if (!name) {
            if (url) {
              name = _utils.ImageUtil.getCDNImageName(url, binaryImage.size);
            } else {
              //url和name必须提供一个
              return false;
            }
          }

          this.signRequest(function (signature) {

            if (signature && signature.policy) {
              api.signature = signature;
              // OSSAccessKeyId: ""
              // Signature: ""
              // expire:
              // host: ""
              // policy: ""
              fd.append("policy", signature.policy);
              fd.append("OSSAccessKeyId", signature.OSSAccessKeyId);
              fd.append("Signature", signature.Signature);
              fd.append("key", name);
              fd.append("file", binaryImage);
              fd.append("success_action_status", 200);

              var params = {
                url: signature.host,
                type: 'POST',
                data: fd,
                processData: false,
                contentType: false,
                complete: function complete() {
                  if ($.isFunction(callback)) callback("complete");
                },
                success: function success() {
                  if ($.isFunction(callback)) callback("success");
                },
                error: function error() {
                  if ($.isFunction(callback)) callback("error");
                },
                xhr: function xhr() {
                  // get the native XmlHttpRequest object
                  var xhr = $.ajaxSettings.xhr();
                  // set the onprogress event handler
                  xhr.upload.onprogress = progress;
                  // set the onload event handler
                  xhr.upload.onload = function () {
                    _O.log('DONE!');
                  };
                  // return the customized object
                  return xhr;
                }
              };

              $.ajax(params);
            }
          });
        },

        //清空本地数据库,当用户登出的时候清除

        clearLocalDB: function clearLocalDB() {
          var version = _models.LocalKVDB.get('version', ''); //清空本地贴纸
          _models.LocalKVDB.flush();
          _models.LocalKVDB.set('version', version);

          //最后打开的标签清空
          _models.LocalKVDB.deleteKey(_OKConfig.LAST_ACCESS_TAG_KEY);
        },
        testClearLocalDB: function testClearLocalDB() {

          // LocalKVDB.set(_OKConfig.NOTES_KEY_NAME,{});//清空本地贴纸
          _models.LocalKVDB.set(_OKConfig.NOTES_SORTBY_KEY_NAME, []); //清空本地贴纸排序
          _models.LocalKVDB.set(_OKConfig.GNID_SORTBY_BIND_KEY_NAME, {}); //清除gnid更sortby关联
          // LocalKVDB.set(_OKConfig.TAGS_KEY_NAME,{});//清空本地标签
          //
          // LocalKVDB.set(_OKConfig.TAGS_LAST_OPENED_KEY_NAME,'');//清空最后打开标签
          // LocalKVDB.set(_OKConfig.TAGS_USAGE_HISTORY_KEY_NAME,[]);//清空历史标签
          // LocalKVDB.set(_OKConfig.USER_KEY_NAME,{logged_in:0});//清空本地用户
          //
          //
          _models.LocalKVDB.set(_OKConfig.NOTES_ADD_KEY, {}); //新增队列
          _models.LocalKVDB.set(_OKConfig.NOTES_EIDT_KEY, {}); //创建队列
          _models.LocalKVDB.set('deadline', 0); //清空deadline
        },

        sendLog: function sendLog(behavior, value) {
          if (!behavior) return false;
          value = value || "";
          new Image().src = this.getAPIRoot() + 'analytics/log?ww=' + window.screen.width + '&wh=' + window.screen.height + '&ua=' + (window._ENV.browser && window._ENV.browser.toLowerCase()) + '&v=' + value + '&b=' + behavior + '&t=image';
        }

      };
      exports['default'] = app;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 173 */,
  /* 174 */,
  /* 175 */,
  /* 176 */,
  /* 177 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, _O, $) {
      /**
       *
       *  标签模型
       *  负责标签数据的增删改查
       *
       *
       *  以tid为键   贴纸sortby集合([])  ->obj
       *  _OKConfig.GTID_SORTBYS_BIND_KEY_NAME
       *
       *
       *  贴纸模型中包含 --> 该贴纸的所有标签
       *  本地库贴纸模型里面的  tags 字段存的是   [tid,tid]
       *
       *
       *
       *
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var Tag = {

        /**
         * 本地数据存储结构
         */
        scheme: {
          'tid': {
            'type': 'string'
          },

          'tname': {
            'type': 'string'
          },

          'created': {
            'type': 'number'
          },

          //修改时间
          'modified': {
            'type': 'number'
          },

          //1删除,0没删除
          'removed': {
            'type': 'number' //'0或1'
          },

          //排序位置
          'position': {
            'type': 'number'
          },

          // 当前标签的  贴纸的最小sortby
          'min_sortby': {
            'type': 'number'
          },

          //标签下帖子数量
          'notes_num': {
            'type': 'number'
          },

          'version': {
            'type': 'string'
          }
        },

        defaultTags: [{
          gtid: _OKConfig.ALL_TAG_ID,
          tname: _OKConfig.ALL_TAG_NAME
        }, {
          gtid: _OKConfig.NO_TAG_ID,
          tname: _OKConfig.NO_TAG_NAME
        }, {
          gtid: _OKConfig.TRASHBIN_ID,
          tname: _OKConfig.TRASHBIN_NAME
        }],

        // 生成版本号
        generateVersion: function generateVersion() {
          var version = _models.AppModel.generateVersion();
          return version;
        },

        /**
         * 得到标签中上次取到的贴纸数据中最小的sortby
         *
         * @return {[type]} [description]
         */
        getMinSortby: function getMinSortby(gtid) {
          gtid = gtid || 0;

          var tag = this.getTagByGtid(gtid);

          if (tag) {
            return parseInt(tag.min_sortby, 10) || 0;
          }

          return 0;
        },

        /**
         * 设置/记录每次同步到的数据中最小的sortby值
         *
         */
        setMinSortby: function setMinSortby(gtid, min_sortby) {
          min_sortby = parseInt(min_sortby, 10);
          var tag = this.getTagByGtid(gtid);

          //此次设置的最小sortby要比现在的小
          var isSmaller = min_sortby < (tag.min_sortby || 0);

          //最小sortby不存在
          var minSortbyNotExist = !tag || !tag.min_sortby;

          if (tag && (minSortbyNotExist || isSmaller)) {
            _O.debug("改变标签最小sortby", gtid, min_sortby);
            tag.min_sortby = min_sortby;

            this.setLocalTagData(tag);
          }
        },

        /**
         * 得到标签中最小的sortby
         *
         * @return {[type]} [description]
         */
        getLastSortby: function getLastSortby(gtid) {
          var tag = this.getTagByGtid(gtid);

          if (tag) {
            return tag.last_sortby || 0;
          }

          return 0;
        },

        /**
         * 设置/记录此标签下最小的sortby
         *
         */
        setLastSortby: function setLastSortby(gtid, last_sortby) {
          var tag = this.getTagByGtid(gtid);

          if (tag) {
            tag.last_sortby = parseInt(last_sortby, 10);

            this.setLocalTagData(tag);
          }
        },

        /**
         * 设置某个tag数据
         *
         */
        setLocalTagData: function setLocalTagData(tagData) {
          if (!tagData || !tagData.hasOwnProperty('gtid')) {
            return false;
          }

          var tag = _models.LocalKVDB.get("gtid_" + tagData.gtid, null);
          if (!tag) {
            //本地没有此标签
            _O.debug("新增标签数据", tagData.gtid);
          } else {
          }

          _models.LocalKVDB.set("gtid_" + tagData.gtid, tagData);

          _utils.WindowMessager.notifyTabs("tags-changed", [tagData]);
        },

        // 通过tid获取贴纸模型
        getTagByGtid: function getTagByGtid(gtid) {
          //特殊标签
          if (gtid <= 0) {
            var tag = _models.LocalKVDB.get("gtid_" + gtid, null);

            if (!tag) {
              var tname = '';

              if (gtid == 0) {
                tname = _OKConfig.ALL_TAG_NAME;
              } else if (gtid == _OKConfig.NO_TAG_ID) {
                tname = _OKConfig.NO_TAG_NAME;
              } else if (gtid == _OKConfig.TRASHBIN_ID) {
                tname = _OKConfig.TRASHBIN_NAME;
              }

              tag = {
                gtid: gtid,
                tname: tname,
                notes_num: 0
              };
            }

            return tag;
          } else {
            return _models.LocalKVDB.get("gtid_" + gtid);
          }
        },

        /**
         * @param {tid}
         * @return sortbys{[type]}
         *
         * 通过tid得到tid下的贴纸的所以贴纸模型的sortby的数组
         * gtid_sortbys_relation:{
	     * tid:[sortby],
	     * tid:[sortby]
	     * }
         *
         */
        getNoteSortbysByGtid: function getNoteSortbysByGtid(gtid) {

          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          if (gtid_sortbys) {
            var sortbys = gtid_sortbys["gtid_" + gtid];
          }

          return sortbys || [];
        },

        /**
         * @param  标签名字
         *
         * @param   标签位置
         *
         * @return tag模型
         *
         * 生成gtid  判断tname不存在
         *
         */
        createTag: function createTag(tname) {
          var version = this.generateVersion();
          var gtid = _models.AppModel.generateID(tname, version);

          //得到当前最大位置，
          var pos = this.getBiggestPosition();
          var newpos = pos + 1;

          // 返回时间到秒
          var now = _utils.TimeUtil.time();
          var tag = {
            gtid: gtid,
            tname: tname,
            created: now,
            modified: now,
            removed: 0,
            position: newpos,
            min_sortby: 0,
            notes_num: 0,
            version: version
          };

          //存入本地库
          this.setLocalTagData(tag);

          //添加集合
          this.createNotesCollection(gtid);

          //放入同步记录表中
          _models.SyncManager.getInstance('tag').dataChanged(tag, tag.version);

          //立即触发同步,贴纸的数据完整性依赖于标签
          _models.SyncManager.getInstance('tag').start(true);

          // 通知收集面板更新数据
          _utils.ExtUtil.sendInfoToExt();

          return tag;
        },

        /**
         *
         * 判断标签名是否已存在   返回 贴纸模型
         * @param {string} [tname] [标签名字]
         * @return {[bool]}
         */
        isTnameExist: function isTnameExist(tname) {
          var tagsArr = this.getLocalTags();
          if (tagsArr.length > 0) {
            for (var i = 0; i < tagsArr.length; i++) {
              if (tagsArr[i].tname == tname) {
                return tagsArr[i];
              }
            }
          } else {
            return false;
          }
        },

        updatePosition: function updatePosition(gtid, position) {
          var now = _utils.TimeUtil.time();
          var version = this.generateVersion();

          //存入同步记录中
          var data = {
            gtid: gtid,
            position: position,
            modified: now,
            version: version
          };

          _models.SyncManager.getInstance('tag').dataChanged(data);

          //存入本地
          var tag = this.getTagByGtid(gtid);

          var newTag = $.extend({}, tag, data);

          this.setLocalTagData(newTag);

          // 通知收集面板更新数据
          _utils.ExtUtil.sendInfoToExt();
        },

        /**
         * @param  标签id  {[type]}
         * @param  标签名字 {[string]}
         * @return  状态(true/false)
         */
        renameTag: function renameTag(gtid, tname) {
          var now = _utils.TimeUtil.time();
          var version = this.generateVersion();

          //存入同步记录中
          var data = {
            gtid: gtid,
            tname: tname,
            modified: now,
            version: version
          };
          _models.SyncManager.getInstance('tag').dataChanged(data);

          //立即触发同步,
          _models.SyncManager.getInstance('tag').start(true);

          //存入本地
          var tag = this.getTagByGtid(gtid);

          var newTag = $.extend({}, tag, data);

          this.setLocalTagData(newTag);

          // 通知收集面板更新数据
          _utils.ExtUtil.sendInfoToExt();
        },

        /**
         * @param  贴纸id
         * @return 状态(true/false)
         */
        deleteTag: function deleteTag(gtid) {

          var now = _utils.TimeUtil.time();
          var version = this.generateVersion();

          //存入同步记录中
          var data = {
            gtid: gtid,
            removed: 1,
            modified: now,
            version: version
          };

          _models.SyncManager.getInstance('tag').dataChanged(data);

          //立即触发同步,
          _models.SyncManager.getInstance('tag').start(true);

          //存入本地库
          var tag = this.getTagByGtid(gtid);

          var newTag = $.extend({}, tag, data);
          //更新标签数据
          this.setLocalTagData(newTag);

          //删除标签关联
          this.deleteTagRelations(gtid);

          //删除标签贴纸集合
          this.removeNotesCollection(gtid);

          // 通知收集面板更新数据
          _utils.ExtUtil.sendInfoToExt();
        },

        /**
         * 删除标签的所有关联
         *
         * @param  {[type]} gtid [description]
         * @return {[type]}      [description]
         */
        deleteTagRelations: function deleteTagRelations(gtid) {
          //找到该标签下的所有贴纸  更新贴纸的tags字段
          var sortbys = this.getNotesCollection(gtid);
          _O.debug("要删除的标签关联", gtid, sortbys);
          if (sortbys && sortbys.length > 0) {

            var note,
            changedNotes = [],
            noTags,
            noTag;

            for (var i = 0; i < sortbys.length; i++) {
              note = _models.NoteModel.getNoteBySortby(sortbys[i]);

              if (note && note.tags) {
                var index = note.tags.indexOf(gtid);
                if (index >= 0) {
                  note.tags.splice(index, 1);

                  _models.LocalKVDB.set('note_' + sortbys[i], note);
                  _O.debug("删除关联之后的贴纸标签", note.tags);

                  //变为无分类,无分类数量加1,并且需要放入无分类
                  if (note.tags.length == 0) {
                    _O.debug("删除标签", "贴纸变为无标签:" + note.gnid);

                    noTag = noTag || this.getTagByGtid(_OKConfig.NO_TAG_ID);
                    noTags = noTags || this.getNotesCollection(_OKConfig.NO_TAG_ID);

                    var delIndex = noTags.indexOf(sortbys[i]);
                    _O.debug("贴纸是否在无分类中", delIndex);
                    if (delIndex < 0) {
                      //放入集合
                      noTags.unshift(sortbys[i]);

                      //数量加1
                      noTag.notes_num = (parseInt(noTag.notes_num, 10) || 0) + 1;
                    }
                  } else {
                    _O.debug("删除标签", "删除后的标签:" + note.tags);
                  }

                  changedNotes.push(note);
                }
              }
            }

            //保存标签集合数据
            if (noTags) {
              var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
              gtid_sortbys[_OKConfig.NO_TAG_ID] = noTags;
              _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);

              _O.debug("删除标签，保存无分类数据");
            }

            //保存标签数据
            if (noTag) {
              this.setLocalTagData(noTag);

              _O.debug("删除标签，保存无分类数量");
            }

            //通知贴纸被更新
            if (changedNotes.length > 0) {
              _utils.WindowMessager.notifyTabs('data-changed', {notes: changedNotes});
            }
          }
        },

        /**
         * 同步创建的标签数据(配合同步程序的方法)
         *
         * @return {[type]} [description]
         */
        syncCreate: function syncCreate(tagsData, callback) {
          this.tagPush(true, tagsData, callback);
        },

        /**
         * 同步更新的标签数据(配合同步程序的方法)
         *
         * @return {[type]} [description]
         */
        syncUpdate: function syncUpdate(tagsData, callback) {
          //对将要同步的数据进行修改时间的排序
          // if($.isArray(tagsData) && tagsData.length > 1){
          //     tagsData = tagsData.sort(function(a,b){
          //         return a.modified > b.modified;
          //     });
          // }

          this.tagPush(false, tagsData, callback);
        },

        /**
         * 推送tag数据到服务器
         *
         * @return {[type]} [description]
         */
        tagPush: function tagPush(iscreate, tagsData, callback) {
          var that = this;

          // 上服务器之前将标签版本号更新，避免其他端拉取不到标签
          $(tagsData).each(function (i, tag) {
            tag.version = that.generateVersion();
          });

          var taglist = JSON.stringify(tagsData);
          var url = iscreate ? "tag/push" : "tag/update";

          _models.Request.post(url, {taglist: taglist}, function (response) {
            if ($.isFunction(callback)) callback.call(null, response);

            //成功执行
            if (response.status == 1) {

              //服务器上有重名的标签，返回了新的gtid，本地相应作更新
              if ($.isArray(response.data) && response.data.length > 0) {
                _O.debug("创建/更新标签，出现冲突", response.data);
                var serverTag = null;
                for (var i = 0; i < response.data.length; i++) {
                  serverTag = response.data[i];

                  var sameNameTag = that.isTnameExist(serverTag.tname);
                  _O.debug("!!!!!!!!!创建/更新标签,存在同名标签!!!!!!!!", sameNameTag);
                  //对于同名标签的处理,如果id不同，则使用服务器端的id覆盖
                  if (sameNameTag && sameNameTag.gtid != serverTag.gtid) {
                    _O.debug("!!!!!!!!!创建/更新标签,存在同名标签且ID不同!!!!!!!!", sameNameTag);

                    var updatedNotes = that.updateGtid(serverTag.gtid, sameNameTag.gtid);

                    if (sameNameTag.version <= serverTag.version) {
                      //覆盖标签数据
                      that.setLocalTagData($.extend(sameNameTag, serverTag));

                      //刷新界面上的贴纸
                      _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: updatedNotes});

                      //服务器端标签被删除,则本地标签数据以及关联必须全部删除
                      if (serverTag.removed == 1) {
                        _O.debug("创建/更新标签,有标签被删除", serverTag);
                        that.deleteTagRelations(serverTag.gnid);
                      }
                    }
                  }
                }
              }
            } else {
            }
          }, function () {
          });
        },

        /**
         * @param   [{tid:"1", position:"111"}, {tid:"2", position:"222"} ]
         * @return 状态(true/false)
         *
         * 通过tid 获取tag模型 更新position 字段
         *
         */
        setTagsPosition: function setTagsPosition(updatedTags) {
          var tag,
          version,
          now = _utils.TimeUtil.time();

          if (updatedTags && updatedTags.length > 0) {

            for (var i = 0; i < updatedTags.length; i++) {

              version = this.generateVersion();

              //放入待同步记录
              updatedTags[i].version = version;
              updatedTags[i].modified = now;
              _models.SyncManager.getInstance('tag').dataChanged(updatedTags[i]);

              //存入本地数据
              tag = this.getTagByGtid(updatedTags[i].gtid);

              if (tag) {
                tag.position = updatedTags[i].position;
                tag.version = version;
                tag.modified = now;

                this.setLocalTagData(tag);
              }
            }
          }
        },

        /**
         * 把tag模型存到本地
         *
         * @param {[obj]} [taglist:[{},{}]] [标签模型   数组]
         *
         */
        setLocalTags: function setLocalTags(taglist) {
          if ($.isArray(taglist) && taglist.length > 0) {
            var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
            var serverTag, sameNameTag, sameIdTag;

            for (var i = 0; i < taglist.length; i++) {
              serverTag = taglist[i];

              //本地同名标签
              sameNameTag = this.isTnameExist(serverTag.tname);

              //本地相同id标签
              sameIdTag = this.getTagByGtid(serverTag.gtid);

              //本地不存在此标签,则创建存入本地
              if (!sameNameTag && !sameIdTag) {

                serverTag.min_sortby = 0;
                this.setLocalTagData(serverTag);

                _O.debug("存入标签,不存在标签", serverTag.tname);

                //为新标签创建集合
                this.createNotesCollection(serverTag.gtid);
                //本地存在此标签
              } else {

                //对于同名标签的处理,如果id不同，则使用服务器端的id覆盖
                if (sameNameTag && sameNameTag.gtid != serverTag.gtid) {
                  _O.debug("!!!!!!!!!存入标签,存在同名不同ID标签!!!!!!!!", sameNameTag, serverTag);

                  if (sameNameTag.version <= serverTag.version) {
                    var updatedNotes = this.updateGtid(serverTag.gtid, sameNameTag.gtid);

                    //覆盖标签数据
                    this.setLocalTagData($.extend(sameNameTag, serverTag));

                    //刷新界面上的贴纸
                    _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: updatedNotes});

                    //服务器端标签被删除,则本地标签数据以及关联必须全部删除
                    if (serverTag.removed == 1) {
                      _O.debug("存入标签,同名标签被删除", serverTag);
                      this.deleteTagRelations(serverTag.gtid);
                    }
                  }
                }

                //对于同id标签的处理,如果服务器版本大于本地,则覆盖本地属性
                if (sameIdTag && sameIdTag.version < serverTag.version) {
                  _O.debug("存入标签,同id标签被更新", sameIdTag, serverTag);
                  this.setLocalTagData($.extend(sameIdTag, serverTag));

                  //服务器端标签被删除,则本地标签数据以及关联必须全部删除
                  if (serverTag.removed == 1) {
                    _O.debug("存入标签,同id标签被删除", serverTag);
                    this.deleteTagRelations(serverTag.gtid);
                  }
                }
              }
            }
          }
        },

        /**
         * 更新 标签id和贴纸关联表  主要是  gtid变化
         *
         * @param  newGtid  要写入表的newGtid
         *
         * @param   oldGtid   本地以存在需要被替换掉得
         *
         * @return {[type]}
         */
        updateGtid: function updateGtid(newGtid, oldGtid) {
          if (!newGtid || !oldGtid) return false;
          _O.debug("更新标签Gtid", newGtid, oldGtid);

          //删除集合
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          gtid_sortbys[newGtid] = gtid_sortbys[oldGtid] || [];
          delete gtid_sortbys[oldGtid];
          _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);

          //删除标签数据
          _models.LocalKVDB.deleteKey('gtid_' + oldGtid);

          //找到标签对应的贴纸，删除旧关联，替换成新的关联
          var note,
          sortbys = gtid_sortbys[newGtid],
          oldIndex;

          var updatedNotes = [];

          for (var i = 0; i < sortbys.length; i++) {
            note = _models.NoteModel.getNoteBySortby(sortbys[i]);
            _O.debug("更新标签Gtid,转移贴纸", note);
            if (note) {
              note.tags = note.tags || [];

              oldIndex = note.tags.indexOf(oldGtid);
              if (oldIndex >= 0) {
                note.tags.splice(oldIndex, 1);
              }

              if (note.tags.indexOf(newGtid) < 0) {
                note.tags.push(newGtid);

                //更新贴纸
                // NoteModel.setNoteBySortby(note);
                _models.NoteModel.update({gnid: note.gnid, sortby: note.sortby, tags: note.tags});
              }

              //修改modified才能让界面渲染
              note.modified = note.modified + 1;
              updatedNotes.push(note);
            }
          }

          return updatedNotes;
        },

        /**
         * 给tid 和sortbys关联表的sortby排序
         * @param  {[array]} sortBys [description]
         * @return {[type]}         [description]
         */
        sortSortBys: function sortSortBys(sortBys) {
          if (sortBys) {
            sortBys.sort(function (a, b) {
              return b - a;
            });
          }

          return sortBys;
        },

        /**
         * 得到gtid对应的标签的sortby集合
         *
         * @return {[type]} [description]
         */
        getNotesCollection: function getNotesCollection(gtid) {
          gtid = gtid || 0;
          var sortbys = [];

          if (gtid) {
            var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});
            sortbys = gtid_sortbys[gtid] || [];
          } else {
            sortbys = _models.LocalKVDB.get(_OKConfig.NOTES_SORTBY_KEY_NAME, []);
          }

          sortbys = sortbys.sort(function (a, b) {
            return b - a;
          });

          return sortbys;
        },

        /**
         * 为新标签添加贴纸数据集合
         *
         * @return {[type]} [description]
         */
        createNotesCollection: function createNotesCollection(gtid, sortbys) {
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          gtid_sortbys[gtid] = sortbys || [];

          _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);
        },

        /**
         * 删除标签的贴纸集合
         *
         * @return {[type]} [description]
         */
        removeNotesCollection: function removeNotesCollection(gtid) {
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          delete gtid_sortbys[gtid];

          _models.LocalKVDB.set(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, gtid_sortbys);
        },

        /**
         * 设置标签的贴纸数量
         *
         * @param string [gnid] [贴纸的id]
         * @param boolean [inc] [是否是增加1，false则减少1，默认减少]
         *
         */
        setTagNoteNumber: function setTagNoteNumber(gtid, inc) {
          gtid = gtid || 0;
          var tag = this.getTagByGtid(gtid);
          var number = tag.notes_num || 0;

          var now = _utils.TimeUtil.time();
          tag.modified = now;

          if (!number) {
            var sortbys = this.getNotesCollection(gtid);
            number = sortbys.length;
            tag.notes_num = number;
          } else {
            tag.notes_num = inc ? parseInt(number, 10) + 1 : parseInt(number, 10) - 1 > 0 ? parseInt(number, 10) - 1 : 0;
          }

          _O.debug("标签数量:" + tag.tname, tag.notes_num);
          this.setLocalTagData(tag);
        },

        /**
         * @return 所有tag模型   数组
         *
         * 剔除掉被删除的标签
         */
        getLocalTags: function getLocalTags() {
          //得到tid和贴纸sortbys的对象
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          var tagsArr = [];

          if (gtid_sortbys) {
            // 通过tid获取贴纸模型
            var tagObj;

            for (var key in gtid_sortbys) {
              if (gtid_sortbys.hasOwnProperty(key)) {
                tagObj = this.getTagByGtid(key);

                // 过滤掉已删除的标签
                if (tagObj && tagObj.removed == 0) {
                  tagsArr.push(tagObj);
                }
              }
            }
          }

          tagsArr = this.sortTags(tagsArr);
          return tagsArr;
        },

        /**
         * 清除所有标签的min_sortby
         * @return {[type]} [description]
         */
        clearMinSortbys: function clearMinSortbys() {
          //得到tid和贴纸sortbys的对象
          var gtid_sortbys = _models.LocalKVDB.get(_OKConfig.GTID_SORTBYS_BIND_KEY_NAME, {});

          if (gtid_sortbys) {
            // 通过tid获取贴纸模型
            var tagObj;

            for (var key in gtid_sortbys) {
              if (gtid_sortbys.hasOwnProperty(key)) {
                tagObj = this.getTagByGtid(key);

                // 过滤掉已删除的标签
                if (tagObj && tagObj.removed == 0) {
                  var newTag = $.extend({}, tagObj, {min_sortby: 0});
                  this.setLocalTagData(newTag);
                }
              }
            }
          }
        },

        /**
         * 或去当前排序的最大值
         * @return {[type]} [description]
         *
         */
        getBiggestPosition: function getBiggestPosition() {
          var tagArr = this.getLocalTags();
          var bp = 0;

          if (tagArr.length > 0) {
            for (var i = 0; i < tagArr.length; i++) {
              tagArr[i].position = isNaN(tagArr[i].position) ? 0 : tagArr[i].position;
              bp = parseInt(tagArr[i].position, 10) > bp ? parseInt(tagArr[i].position, 10) : parseInt(bp, 10);
            }
          } else {
            bp = -1;
          }

          return bp;
        },

        /**
         * @param  {array}     标签模型数组
         * @return {[array]}   排好序的标签数组
         */
        sortTags: function sortTags(tagsArr) {

          if (tagsArr && tagsArr.length > 0) {
            tagsArr = tagsArr.sort(function (a, b) {
              return a.position - b.position;
            });
          }

          return tagsArr;
        },

        /**
         * @return 1: 合法
         *         -1: 有特殊字符
         *         -2：长度超额
         */
        //规则: 1-14个字符，只可以使用中英文，数字，"_"(下划线)和"-"(减号)
        isTnameValid: function isTnameValid(tname) {
          var regexp = /^[0-9a-zA-Z\u4e00-\u9fa5_-]+$/;

          if (!regexp.test(tname)) {
            return -1;
          }

          var length = 0;

          //英文数量
          var charMatch = tname.match(/[0-9a-zA-Z_-]/g);

          if (charMatch) {
            length = length + charMatch.length;
          }

          //中文多少个
          var hanMatch = tname.match(/[\u4e00-\u9fa5]/g);

          if (hanMatch) {
            length = length + hanMatch.length * 2;
          }

          if (length <= 14) {
            return 1;
          } else {
            return -2;
          }
        }

      };

      exports['default'] = Tag;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(162), __webpack_require__(161)))

    /***/
  },
  /* 178 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, $) {
      /**
       * 思路
       * 页面加载时，将硬盘数据载入到缓存storageObj
       * 页面关闭前，用户的读和写都是操作的storageObj
       * 页面关闭时(或固定周期)，将storageObj写入到硬盘
       *
       * 由于用户可以在多个页面中操作数据，所以缓存必须保持更新，即当前操作的界面storageObj一定是最新的数据
       * 那么，
       *     当切换页面时(由A页面切换至B页面)，A页面的缓存需要能及时写入硬盘，B页面的缓存对象需要能够及时刷新
       *         1.B页面已经载入，则监听缓存版本变化，如果版本大于当前载入的数据，并且当前页面活跃，则进行缓存刷新
       *         2.B为新打开页面，则硬盘数据可能还是老数据，因为A页面缓存还没来得及写入，读出来的缓存也不是最新的，
       *     当从页面A打开新的窗口/Tab B时，是同样的流程，即确保数据库缓存时最新，用户操作的是最新数据
       */
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {"default": obj};
      }

      var _utilsPageJs = __webpack_require__(179);

      var _utilsPageJs2 = _interopRequireDefault(_utilsPageJs);

      var LocalKVDB = (function () {

        // 捕获异常，避免因为不支持localStorage而导致页面直接挂掉
        var localsto = {};
        try {
          localsto = window.localStorage;
        } catch (e) {
        }
        ;

        var storageContainer = localsto,
        storageKey = "FPCacheStorage",
        versionKey = "fpcache_version",
        cacheVersion = 0,
        cacheInvalidated = false,
        pageActive = false,
        storageObj = {};

        // 初始化方法
        function init() {
          notifyTabs();

          loadStorage();

          listenEvents();
        }

        // 通知替他tab赶紧将cache写入到硬盘如果cache的version大于硬盘的version
        function notifyTabs() {
          storageContainer['readyinitcache'] = Date.now();
        }

        // 监听页面的隐藏状态
        function onPageStateChange(state) {
          // 提示页面/tab可见
          if (state === "visible") {
            if (!pageActive) {
              pageActive = true;

              _O.debug("LocalKVDB", "页面切换至可见状态，是否需要刷新缓存:" + cacheInvalidated);

              // 页面由不可见转为可见
              // 如果缓存已经不是最新，则从新读取到缓存
              if (cacheInvalidated) {
                loadStorage();
              }
            }

            // 提示页面/tab被隐藏
          } else if (state === "hidden") {
            if (pageActive) {
              pageActive = false;

              _O.debug("LocalKVDB", "页面切换至不可见状态，数据缓存...");

              // 页面由可见转为不可见
              backupIfNeed();
            }
          }
        }

        // 监听事件，
        function listenEvents() {
          // 页面关闭之前，需要将数据写入本地
          $(window).on("beforeunload", function (e) {
            backupIfNeed();
          });

          // 切换页面需要将缓存内容写入本地
          // writecache由程序手动触发，页面重新加载的时候可触发此事件
          $(window).on("storage", function (e) {
            e = e.originalEvent;

            if (e.key === "readyinitcache") {
              _O.debug("LocalKVDB", "接收到类被其他页面实例化的通知: " + e.newValue);
              backupIfNeed();

              // 本地数据版本改变, 而且当前页面处于活跃状态，则对缓存进行刷新
            } else if (e.key === versionKey) {
              _O.debug("LocalKVDB", "缓存版本号更新: " + (e.newValue > cacheVersion));
              if (e.newValue > cacheVersion) {
                if (pageActive) {
                  _O.debug("LocalKVDB", "刷新缓存");
                  loadStorage();
                } else {
                  invalidateCache();
                }
              }
            }
          });

          // 监听页面的隐藏状态
          _utilsPageJs2["default"].pageActiveDetect(onPageStateChange);

          /******************
           以下可能会导致进入编辑器时卡顿, 因为编辑器时iframe, 编辑器聚焦时, 可能会写硬盘
           *****************/
          // 监听窗口聚焦
          $(window).on("focus topfocus", function (e) {
            if (cacheInvalidated) {
              loadStorage();
            }
          });

          // 监听窗口失焦
          $(window).on("blur topblur", function (e) {
            backupIfNeed();
          });
        }

        // 从硬盘中加载数据到缓存
        function loadStorage() {
          if (storageContainer[storageKey]) {
            try {
              storageObj = JSON.parse(String(storageContainer[storageKey]));
              cacheVersion = storageContainer[versionKey];
              cacheInvalidated = false;

              _O.debug("LocalKVDB", "加载数据...");
            } catch (e) {
              storageContainer[storageKey] = '{}';
            }
          } else {
            storageContainer[storageKey] = '{}';
          }
        }

        // 标识缓存已经不是最新的
        function invalidateCache() {
          cacheInvalidated = true;
        }

        // 更新数据版本号
        function updateVersion() {
          cacheVersion = generateVersion();
        }

        // 将缓存备份至硬盘，在有必要的时候
        function backupIfNeed() {
          var version = storageContainer[versionKey] || 0;

          if (version < cacheVersion) {
            _O.debug("LocalKVDB", "!!!!!!!!!!硬盘版本小于缓存版本，进行写入write...");
            write();
          }
        }

        // 将缓存写到硬盘
        function write() {
          try {
            storageContainer[storageKey] = JSON.stringify(storageObj);
            storageContainer[versionKey] = cacheVersion;
          } catch (e) {
          }
        }

        // 生成版本号
        function generateVersion() {
          var lastVersion = cacheVersion || 0;

          var version = parseInt(Date.now() / 1000, 10) - 1452212501; //unix时间戳  1452212501==2016/1/8 8:21:41

          if (lastVersion >= version) {
            version = lastVersion + 1;
          }

          lastVersion = version;
          cacheVersion = lastVersion;
          return version;
        }

        // 公开接口
        var publicInterfaces = {
          get: function get(key, def) {
            if (key in storageObj) {
              return storageObj[key];
            }
            return typeof def == 'undefined' ? null : def;
          },

          set: function set(key, value) {
            // undefined values are deleted automatically
            if (typeof value == 'undefined') {
              this.deleteKey(key);
              return value;
            }

            if (typeof value == 'function') {
              return undefined; // functions can't be saved!
            } else if (value && typeof value == 'object') {
              // clone the object before saving to storageObj tree
              value = JSON.parse(JSON.stringify(value));
            }

            storageObj[key] = value;
            updateVersion();
          },

          deleteKey: function deleteKey(key) {
            if (key in storageObj) {
              delete storageObj[key];
              updateVersion();
              return true;
            }
            return false;
          },

          flush: function flush() {
            storageObj = {};
            write();
            updateVersion();
            return true;
          }
        };

        init();

        return publicInterfaces;
      })();

      exports["default"] = LocalKVDB;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(161)))

    /***/
  },
  /* 179 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _OKConfig) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var PageUtil = {

        //页面是否为可见状态
        isHidden: function isHidden() {
          var hidden = "hidden";

          // Standards:
          if (hidden in document) return document[hidden]; else if ((hidden = "mozHidden") in document) return document[hidden]; else if ((hidden = "webkitHidden") in document) return document[hidden]; else if ((hidden = "msHidden") in document) return document[hidden];
        },

        //实时监测页面的可见状态
        pageActiveDetect: function pageActiveDetect(onPageActive, onPageInActive) {
          var activeStateOnChange = function activeStateOnChange(evt) {
            var v = "visible",
            h = "hidden",
            evtMap = {
              focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
            };

            evt = evt || window.event;
            var state;
            if (evt.type in evtMap) {
              state = evtMap[evt.type];
            } else {
              state = this[hidden] ? "hidden" : "visible";
            }

            if (state == "visible") {
              if ($.isFunction(onPageActive)) onPageActive(state);
            } else {
              if ($.isFunction(onPageInActive)) {
                onPageInActive(state);
              } else if ($.isFunction(onPageActive)) {
                onPageActive(state);
              }
            }
          };

          var hidden = "hidden";

          // Standards:
          if (hidden in document) document.addEventListener("visibilitychange", activeStateOnChange); else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", activeStateOnChange); else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", activeStateOnChange); else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", activeStateOnChange);
          // IE 9 and lower:
          else if ("onfocusin" in document) {
            document.onfocusin = document.onfocusout = activeStateOnChange;
          }

          //focus out问题有bug，实际上用户仍然在input(输入文字)，但是会出现focusout事件
          // window.onpageshow = window.onpagehide = window.onfocus = window.onblur = activeStateOnChange;
          window.onpageshow = window.onpagehide = activeStateOnChange;
        },

        //得到某个网页的信息
        getPageInfo: function getPageInfo(url, callback) {
          callback = $.isFunction(callback) ? callback : null;

          //可通过扩展传递信息,
          //也可通过跨域ajax请求得到
          $.get(url, function (source) {
            var div = document.createElement("div");
            div.innerHTML = source;
            var title = $("title", div).text() || _OKConfig.default_page_title;
            var favicon = $("link[href*='.ico']", div).attr("href") || _OKConfig.default_favicon;

            if (callback) callback({favicon: favicon, title: title});
          });

          var testPageInfo = {favicon: _OKConfig.default_favicon, title: _OKConfig.default_page_title};
          if (callback) callback(testPageInfo);
        },

        toggleHvr: function toggleHvr(selectors) {
          $(document).on("mouseenter", selectors, function () {
            $(this).addClass("hvr").one("mouseleave", function () {
              $(this).removeClass("hvr");
            });
          });
        },

        preventOuterScroll: function preventOuterScroll(domOrSelector) {
          $(domOrSelector).bind('mousewheel', function (e) {

            if (this.scrollHeight > this.offsetHeight) {
              $(this).scrollTop($(this).scrollTop() - (e.originalEvent.wheelDeltaY || -e.originalEvent.deltaY)); //e.originalEvent.deltaY for firefox

              //prevent page fom scrolling
              return false;
            }
          });
        }
      };

      exports["default"] = PageUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(163)))

    /***/
  },
  /* 180 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _O, _OKConfig) {
      /**
       * Created by hlwen on 16/4/12.
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var image = {

        Globals: {
          imagesData: {},
          uploadingList: {},
          _imageSrcCache: {},
          imagesNotSaved: []
        },

        cacheImagesData: function cacheImagesData(images) {
          var _this = this;
          var key = "";
          if (images && $.isArray(images)) {
            $(images).each(function () {
              if (this.size) {
                var imageData = _this.Globals.imagesData[this.url];

                if (!imageData) _this.Globals.imagesData[this.url] = this; else {
                  if ($.isArray(imageData)) {
                    _this.Globals.imagesData[this.url].push(this);
                  } else {
                    _this.Globals.imagesData[this.url] = [imageData, this];
                  }
                }
              }
            });
          }
        },

        getImageData: function getImageData(src) {
          var _this = this;
          var imageData = _this.Globals.imagesData[src];
          if (!imageData) return null;

          if (!$.isArray(imageData)) {
            return imageData;
          } else {
            if (imageData.length > 1) {
              return imageData.shift();
            } else if (imageData.length == 1) {
              _this.Globals.imagesData[src] = imageData[0];
              return _this.Globals.imagesData[src];
            }
          }
        },

        /**
         * 上传图片到服务器
         * @param url
         * @param binaryImage   blob
         * @param name
         * @param callback
         * @param progress
         * @returns {boolean}
         */
        ossupload: function ossupload(img, name, callback, progress) {

          var fd = new FormData();
          var _this = this;

          var url = img.url,
          binaryImage = img.blob,
          width = img.width,
          height = img.height;

          //参数前移
          if ($.isFunction(name)) {
            progress = callback;

            callback = name;

            name = _utils.ImageUtil.getCDNImageName(url, binaryImage.size, width, height, binaryImage.type.indexOf('gif') > -1);
          } else if (!name) {
            if (url) {
              name = _utils.ImageUtil.getCDNImageName(url, binaryImage.size, width, height, binaryImage.type.indexOf('gif') > -1);
            } else {
              //url和name必须提供一个
              return false;
            }
          }

          this.signRequest(function (signature) {

            if (signature && signature.policy) {
              _this.signature = signature;
              // OSSAccessKeyId: ""
              // Signature: ""
              // expire:
              // host: ""
              // policy: ""
              fd.append("policy", signature.policy);
              fd.append("OSSAccessKeyId", signature.OSSAccessKeyId);
              fd.append("Signature", signature.Signature);
              fd.append("key", name);
              fd.append("file", binaryImage);
              fd.append("success_action_status", 200);

              var params = {
                url: signature.host,
                type: 'POST',
                data: fd,
                processData: false,
                contentType: false,
                complete: function complete() {
                  if ($.isFunction(callback)) callback("complete");
                },
                success: function success() {
                  if ($.isFunction(callback)) callback("success");
                },
                error: function error() {
                  if ($.isFunction(callback)) callback("error");
                },
                xhr: function xhr() {
                  // get the native XmlHttpRequest object
                  var xhr = $.ajaxSettings.xhr();
                  // set the onprogress event handler
                  xhr.upload.onprogress = progress;
                  // set the onload event handler
                  xhr.upload.onload = function () {
                    _O.log('DONE!');
                  };
                  // return the customized object
                  return xhr;
                }
              };

              $.ajax(params);
            }
          });
        },

        signRequest: function signRequest(callback) {
          if (this.signature && Date.now() < (this.signature.expire - 10) * 1000) {
            //如果签名还有效则使用旧签名
            callback(this.signature);
          } else {
            _models.Request.get("auth/cdncode", {app: 1}, callback);
          }
        },

        /**
         * 获取图片二进制
         * @param url
         * @param callback
         */
        getBlobViaAjax: function getBlobViaAjax(url, callback) {
          var _this = this;

          var xhr = new XMLHttpRequest();
          xhr.open("get", url, true);
          xhr.responseType = "blob";

          xhr.onload = function () {
            if (this.status == 200) {
              var blob = this.response;

              // 有些图片取下来为text/xml，这里做强制的转换
              if (blob.type.indexOf("image") < 0) {
                blob = new Blob([blob], {type: "image/png"});
              }

              // if(blob){
              //     callback(blob,url);
              // }
              // return false;

              if (blob && blob.type) {
                //是gif则直接上传,其他进行选择处理上传
                if (blob.type == 'image/gif' && blob.size < 10 * 1024 * 1024) {
                  callback(blob, url);
                } else {

                  //判断图片大小尺寸
                  _utils.ImageUtil.resizeImage(blob, function (_blob, width, height) {
                    callback(_blob, url, width, height);
                  });
                }
              }
            }
          };

          xhr.send(null);
        },

        directSendBlobImages: function directSendBlobImages(imagesData, callback) {
          var length = imagesData.length;
          var _this = this;
          _O.debug("图片上传", "开始上传图片数据...");
          _O.log(imagesData);

          $(imagesData).each(function (i, img) {

            // if (!_this.Globals.uploadingList[img.url + "_" + img.blob.size]) {
            //     _this.Globals.uploadingList[img.url + "_" + img.blob.size] = img;

            _O.debug("图片上传", "第" + (i + 1) + "张图片上传开始...");
            // 发送服务器
            _this.ossupload(img, function (status) {
              if (status == "complete") {
                _O.debug("图片上传", img.url + "上传完成");

                delete _this.Globals.uploadingList[img.url + "_" + img.blob.size];

                if ($.isFunction(callback)) callback.call(null, img);
              } else if (status == "success") {

                _this.Globals._imageSrcCache[img.url] = _utils.ImageUtil.getSidebarImgViaSrc(img.url, img.blob.size, img.width, img.height);
              }
            }, function (e) {
              var percentage = parseInt(e.loaded / e.total * 100, 10) + "%";
              _O.debug("图片上传", percentage);
            });
            // }
          });
        },

        /**
         * 批量发送
         * @param imagesData
         * @param callback
         */
        sendBlobImages: function sendBlobImages(imagesData, callback) {
          //组成符合格式的参数
          var fd = new FormData();
          var hasNew = false;

          $(imagesData).each(function (i, img) {
            if (!_this.Globals.uploadingList[img.url + "_" + img.blob.size]) {
              fd.append("image" + i, img.blob);
              fd.append("image" + i, img.url);
              _this.Globals.uploadingList[img.url + "_" + img.blob.size] = img;
              hasNew = true;
            }
          });

          if (!hasNew) return;

          $.ajax({
            url: _models.AppModel.getAPIRoot() + '/images/upload',
            type: 'POST',
            data: fd,
            processData: false,
            contentType: false,
            success: callback,
            complete: function complete() {
              $(imagesData).each(function (i, img) {
                delete _this.Globals.uploadingList[img.url + "_" + img.blob.size];
              });
            }
          });
        },

        getCachedCDNSrc: function getCachedCDNSrc(src) {
          if (src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
            return src;
          }
          return _this.Globals._imageSrcCache[src] ? _this.Globals._imageSrcCache[src] : "";
        },

        /**
         * uploadImagesInNote           上传贴纸中的图片: 在数据库中加入图片记录，上传二进制到阿里云oss
         * @param  {int} id             贴纸在服务器上的真实id
         * @param  {string} content     贴纸的内容
         * @callback                    图片上传创建成功之后促发imagesuploaded事件，并将所有images以对象作为参数给出
         */
        uploadImagesInNote: function uploadImagesInNote(id, content) {
          if (!id || !content) {
            return false;
          }

          var _this = this;
          var images = _utils.ContentUtil.getImagesInContent(content, function (urls, images) {

            if (images && images.length > 0) {

              //在数据库上保存记录
              _this.createImages(id, images, function () {
                //通知应用某些图片已经上传成功
                $(window).trigger("imagesuploaded", {
                  images: images
                });
              });
            }
          });
        },

        /**
         * 将贴纸新的图片数据上传并将图片资料保存到数据库,上传成功后回调
         * @param  int   id                     贴纸的服务器id
         * @param  array images                 图片数据 如 [{url:'',width:'',height:''}]
         * @param  function callback    回调,图片全部上传完成之后的回调
         * @return null
         */
        uploadImages: function uploadImages(images, callback) {
          callback = $.isFunction(callback) ? callback : null;
          var _this = this;
          var imagesData = [];
          var count = 0;
          var length = images.length;
          _O.debug("图片上传", "开始获取二进制数据");

          $(images).each(function (i, img) {
            var url = img.url;

            //无协议图片则加上协议
            if (url && url.indexOf("//") == 0) {
              url = _models.AppModel.Globals.protocol + ":" + url;
            }

            _this.getBlobViaAjax(url, function (blob, url, width, height) {
              count++;

              _O.debug("图片上传", "第" + count + "张二进制");

              imagesData.push({
                blob: blob,
                url: url,
                height: height ? height : img.height,
                width: width ? width : img.width
              });

              img.size = blob.size;
              img.type = blob.type;

              //将图片资料缓存起来
              _this.Globals.imagesData[url] = img;

              if (count == length) {

                _O.debug("图片上传", "最后一张完成,准备开始上传");
                _O.log(imagesData);

                //保存图片二进制数据
                _this.directSendBlobImages(imagesData, callback);
              }
            });
          });
        },

        /**
         * 单个图片发送
         * @param data
         * @param url
         * @param callback
         */
        sendBlobImage: function sendBlobImage(data, url, callback) {
          var f = new FormData();
          f.append("images", data);
          f.append("url", url);
          $.ajax({
            url: _models.AppModel.getAPIRoot() + '/images/upload',
            type: 'POST',
            data: f,
            processData: false,
            contentType: false,
            success: callback
          });
        }
      };

      exports['default'] = image;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(162), __webpack_require__(163)))

    /***/
  },
  /* 181 */
  /***/ function (module, exports) {

    /**
     *
     *  数据接口
     *  负责本地数据库接口
     *
     *
     */

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JStoreKVDB = {
      get: function get() {
        return jStorage.get.apply(jStorage, arguments);
      },

      set: function set() {
        return jStorage.set.apply(jStorage, arguments);
      },

      deleteKey: function deleteKey() {
        return jStorage.deleteKey.apply(jStorage, arguments);
      },

      listenKeyChange: function listenKeyChange() {
        return jStorage.listenKeyChange.apply(jStorage, arguments);
      },

      stopListening: function stopListening() {
        return jStorage.stopListening.apply(jStorage, arguments);
      },

      flush: function flush() {
        return jStorage.flush.apply(jStorage, arguments);
      },

      index: function index() {
        return jStorage.index.apply(jStorage, arguments);
      },

      storageAvailable: function storageAvailable() {
        return jStorage.storageAvailable.apply(jStorage, arguments);
      }

    };

    exports["default"] = JStoreKVDB;
    module.exports = exports["default"];

    /***/
  },
  /* 182 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, $) {
      /**
       *
       *  数据同步程序
       *  功能：检测本地数据状态，定时同步至服务器
       *
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var sync = {

        /**
         * 一次同步最大的数据量
         * @type {Number}
         */
        syncMax: 200,

        /**
         * 触发同步程序：离最后操作，最大时间间隔
         * 设置越大，性能越好，数据丢失风险越大
         *
         * @type {Number}
         *
         */
        timeMax: 3000,

        /**
         * 定时器，句柄
         *
         * @type {[type]}
         *
         */
        timeId: null,

        /**
         * 最后操作时间
         *
         * @type {String}
         *
         */
        timeKey: 'key-nowtime-last',

        /**
         * 正在被处理的创建数据
         *
         * @type {Array}
         *
         */
        _createRunningList: [],

        /**
         * 正在被处理的更新数据
         *
         * @type {Array}
         *
         */
        _updateRunningList: [],

        /**
         * 正在被上传的数据
         *
         * @type {Array}
         *
         */
        _uploadRunningList: [],

        /**
         * 数据是否正在被处理
         *
         * @param  {sting}  gnid 贴纸id
         * @param  {string}  type 队列处理类型
         * @return {Boolean}
         *
         */
        isInRunningList: function isInRunningList(gnid, type) {
          if (type == 'create') {
            return this._createRunningList.indexOf(gnid) >= 0;
          } else if (type == 'update') {
            return this._updateRunningList.indexOf(gnid) >= 0;
          } else if (type == 'upload') {
            return this._uploadRunningList.indexOf(gnid) >= 0;
          }
        },

        /**
         * 将数据加入到处理列表中
         *
         * @param  {sting}  gnid 贴纸id
         * @param  {string}  type 队列处理类型
         *
         */
        addToRunningList: function addToRunningList(gnid, type) {
          if (type == 'create') {
            return this._createRunningList.push(gnid);
          } else if (type == 'update') {
            return this._updateRunningList.push(gnid);
          } else if (type == 'upload') {
            return this._uploadRunningList.push(gnid);
          }
        },

        /**
         * 将数据从处理列表中移除
         *
         * @param  {sting}  gnid 贴纸id
         * @param  {string}  type 队列处理类型
         *
         */
        removeInRunningList: function removeInRunningList(gnid, type) {
          if (type == 'create') {
            var index = this._createRunningList.indexOf(gnid);

            if (index >= 0) {
              this._createRunningList.splice(index, 1);
            }
          } else if (type == 'update') {
            var index = this._updateRunningList.indexOf(gnid);

            if (index >= 0) {
              this._updateRunningList.splice(index, 1);
            }
          } else if (type == 'upload') {
            var index = this._uploadRunningList.indexOf(gnid);

            if (index >= 0) {
              this._uploadRunningList.splice(index, 1);
            }
          }
        },

        /**
         * 设置最后操作时间
         *
         */
        setLastTime: function setLastTime() {
          var that = this;

          var nowtime = new Date().getTime();
          _models.LocalKVDB.set(that.timeKey, nowtime);

          _O.log('通知操作:' + nowtime);
        },

        /**
         * 检测是否执行同步
         *
         * @return {Boolean} [description]
         *
         */
        isSync: function isSync() {
          var that = this;

          var nowtime = new Date().getTime();
          var lasttime = _models.LocalKVDB.get(that.timeKey, 0);

          //离最后操作，超过设定时间
          var count = nowtime - Number(lasttime);
          return count >= that.timeMax && lasttime != 0 ? true : false;
        },

        /**
         * 执行同步
         *
         * @return {[type]} [description]
         *
         */
        syncFuc: function syncFuc() {

          var isexe = sync.isSync();
          _O.log('监测是否执行:' + (isexe ? 'Y' : 'N'));

          if (isexe) {

            //处理插入队列
            this.syncCreate();

            //处理更新队列
            this.syncUpdate();
          }
        },

        /**
         *
         * 同步所有队列数据(清空队列)
         *
         */
        syncAll: function syncAll(callback) {
          var that = this;

          that.syncCreate(function () {

            that.syncUpdate(callback);
          });
        },

        /**
         * 同步创建队列
         *
         * @param {int|function} [rows] [每次同步请求的数量,如果传入的是函数,则代表跑完队列中的所有数据,不传任何参数取默认]
         * @param {function} [callback] [一次同步完成的回调]
         *
         */
        syncCreate: function syncCreate(rows, callback) {
          //参数前移
          if ($.isFunction(rows)) {
            callback = rows;
            rows = 10000000;
          }

          //一次多少同步未知，则给默认值
          if (isNaN(rows)) {
            rows = this.syncMax;
          }

          var that = this;

          var createQueue = _models.NoteModel.getQueue('create');
          var sortby,
          note,
          noteList = [],
          gnid;

          //打印长度
          if (Object.keys) {
            var size = Object.keys(createQueue).length;
            if (size > 0) _O.debug("队列:创建", "队列包含" + size + "贴纸需要被创建");
          }

          for (var prop in createQueue) {
            gnid = prop.replace("@", "");

            if (createQueue.hasOwnProperty(prop) && !that.isInRunningList(gnid, 'create')) {
              that.addToRunningList(gnid, 'create');
              _O.debug("队列:创建", gnid);

              sortby = createQueue[prop];
              note = _models.NoteModel.getNoteBySortby(sortby);

              //有图片要上传
              if (note.upload && note.imglist && note.imglist.length > 0) {

                if (!that.isInRunningList(gnid, 'upload')) {

                  that.addToRunningList(gnid, 'upload');

                  _O.debug("队列:创建:图片上传", gnid + "," + note.imglist.length);

                  //需要上传图片
                  // NoteModel.uploadImagesInNote(note,function(note){

                  //     that.removeInRunningList(note.gnid,'upload');

                  //     that.removeInRunningList(note.gnid,'create');
                  // });

                  _models.NoteModel.uploadImagesInNote(note.imglist, note, function (note) {

                    //获取封面
                    if (!note.images) {
                      $(note.imglist).each(function (i, image) {
                        // 添加cdn图片到封面
                        if (image.width >= 300) {
                          _O.debug("图片上传", "获取封面图为:" + image.url);
                          note.images = image;
                          return false;
                        }
                      });
                    }

                    //更新贴纸数据
                    delete note.upload;
                    note.modified = note.modified + 1;
                    _models.NoteModel.setNoteBySortby(note);

                    //图片上传完成，通知界面更新内容
                    _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [note]});

                    that.removeInRunningList(note.gnid, 'upload');

                    that.removeInRunningList(note.gnid, 'create');
                  });
                }
              } else {
                if (note && noteList.length < rows) {
                  noteList.push(note);
                } else {

                  break;
                }
              }
            } else {
              _O.debug("队列:创建", prop + "在队列中运行，这里跳过");
            }
          }

          if (noteList.length > 0) {
            _O.debug("队列:创建", "总共" + noteList.length + "条开始插入服务器");
            _models.NoteModel.syncCreate(noteList, function (data) {

              if (data.status == 1) {
                //创建成功回调,清除队列
                $(noteList).each(function (i, note) {
                  _models.NoteModel.queueDelete(note.gnid, 'create');

                  that.removeInRunningList(note.gnid, 'create');

                  _O.debug("队列:创建:成功", note.gnid + "," + noteList.length + "条");
                });
              } else {
              }

              if ($.isFunction(callback)) callback();
            });
          } else {
            if ($.isFunction(callback)) callback();
          }
        },

        /**
         * 同步修改队列
         *
         * @param {int} [rows] [每次同步请求的数量,如果传入的是函数,则代表跑完队列中的所有数据,不传任何参数取默认]
         * @param {function} [callback] [一次同步完成的回调]
         *
         */
        syncUpdate: function syncUpdate(rows, callback) {
          //参数前移
          if ($.isFunction(rows)) {
            callback = rows;
            rows = 10000000;
          }

          //一次多少同步未知，则给默认值
          if (isNaN(rows)) {
            rows = this.syncMax;
          }

          var that = this;

          var updateQueue = _models.NoteModel.getQueue('update');
          var updatedProps,
          updateList = [],
          gnid;

          //打印长度
          if (Object.keys) {
            var size = Object.keys(updateQueue).length;
            if (size > 0) _O.debug("队列:修改", "队列包含" + size + "贴纸需要被修改");
          }

          for (var prop in updateQueue) {
            gnid = prop.replace("@", "");

            if (updateQueue.hasOwnProperty(prop) && !that.isInRunningList(gnid, 'update')) {
              that.addToRunningList(gnid, 'update');
              _O.debug("队列:修改", gnid);

              updatedProps = updateQueue[prop];

              if (updatedProps && updateList.length < rows) {
                updateList.push(updatedProps);
              } else {

                break;
              }
            } else {
              _O.debug("队列:修改", prop + "在队列中运行，这里跳过");
            }
          }

          if (updateList.length > 0) {

            _models.NoteModel.syncUpdate(updateList, function (data) {

              if (data.status == 1) {

                //更新成功回调,清除队列
                $(updateList).each(function (i, note) {
                  _models.NoteModel.queueDelete(note.gnid, 'update');

                  that.removeInRunningList(note.gnid, 'update');

                  _O.debug("队列:修改:成功", note.gnid + "," + updateList.length + "条");
                });
              } else {
              }

              if ($.isFunction(callback)) callback();
            });
          } else {

            if ($.isFunction(callback)) callback();
          }
        }

      };

      var queue = {

        /**
         * 轮询时间
         *
         * @type {Number}
         *
         */
        time: 1000,

        /**
         * 运行状态
         *
         * @type {Number}
         *
         */
        status: 1,

        /**
         * 接收通知
         *
         * @return {[type]} [description]
         *
         */
        notify: function notify() {

          /**
           * 记录当前时间戳
           *
           */
          sync.setLastTime();
        },

        /**
         * 跑完所有数据
         *
         * @return {[type]} [description]
         *
         */
        flush: function flush(callback) {
          var that = this;

          /**
           * 暂停队列
           */
          this.stop();

          sync.syncAll(function () {

            _O.log('清空队列: DONE!');

            //队列处理完成,重新开启
            that.start();

            if ($.isFunction(callback)) callback();
          });

          _O.log('清空队列:' + queue.status);
        },

        /**
         * 启动检查
         *
         * @return {[type]} [description]
         *
         */
        start: function start() {

          /**
           * 启动监听器
           *
           */
          var that = this;
          that.stop();

          queue.status = 1;
          sync.timeId = window.setInterval(function () {
            sync.syncFuc();
          }, that.time);

          _O.log('开启队列:' + queue.status);
        },

        /**
         * 停止检查
         *
         * @return {[type]} [description]
         *
         */
        stop: function stop() {

          /**
           * 关闭监听器
           *
           */
          if (!sync.timeId) return false;

          var that = this;

          queue.status = 0;
          window.clearInterval(sync.timeId);

          _O.log('关闭队列:' + queue.status);
        }

      };

      // window.onstorage = function(event){
      //     if(event.key == "note_update_queue"){
      //         try{
      //             console.error("note_update_queue:new:",JSON.parse(event.newValue))
      //             console.error("note_update_queue:old:",JSON.parse(event.oldValue))
      //         }catch(e){
      //             console.log(e);
      //         }
      //     }
      // }

      exports['default'] = queue;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(161)))

    /***/
  },
  /* 183 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, $, _OKConfig) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      /**
       *
       *   gnid      iscreate       data      buffered_data (data以及buffered_data为被修改的贴纸属性)
       *
       *
       *   gtid      iscreate       data      buffered_data (data以及buffered_data为被修改的标签属性)
       *
       */

      var SyncManager = (function () {

        //同步程序实例
        var _instances = {},
        idstrMap = {
          'note': 'gnid',
          'tag': 'gtid'
        };

        var SyncProto = function SyncProto(type) {

          this.resource = type;

          this.idstr = idstrMap[type];

          this.syncingList = [];

          if (!this.idstr) {
            return false;
          }

          return this;
        };

        //通知同步程序有数据被更新或者创建
        SyncProto.prototype.dataChanged = function (data, createVersion) {
          if (!data || !data[this.idstr]) return false;

          //开启同步程序
          this.start();

          // _O.debug("添加同步记录:"+(createVersion ? "创建" : "修改")+":"+this.resource, data);

          //当前同步库的记录
          var record = this.getRecord(data[this.idstr]); //id,data,buffered_data

          if (!record) {
            record = {};
            record[this.idstr] = data[this.idstr];
          }

          //创建数据
          if (createVersion) {

            var newRecord = {};
            newRecord[this.idstr] = data[this.idstr];
            newRecord.iscreate = createVersion;

            //记录创建时的数据
            newRecord.data = data;

            //添加放入创建队列
            this.addRecord(newRecord);

            //修改数据
          } else {

            //如果数据正在同步到服务器的过程中,则将更新放到
            if (this.isInSyncingList(data[this.idstr])) {

              // //正在同步的是创建数据,则将数据合并入data
              // if(record.iscreate){

              //     record.data = $.extend(record.data || {}, data);
              //     this.addRecord(record);

              // //正在同步的是更新数据
              // }else{

              // }

              _O.debug("数据被更新,贴纸在正在同步列表中,放入buffered_data", data[this.idstr]);

              //更新合并到buffered_data
              if (record.buffered_data && record.buffered_data.imglist) {
                //将需要扩展的属性先扩展
                record.buffered_data.imglist = $.extend(record.buffered_data.imglist, data.imglist);
              }

              record.buffered_data = $.extend(record.buffered_data || {}, data);
              this.addRecord(record);

              //非正在同步状态,
            } else {

              //更新,合并到data
              if (record.data && record.data.imglist) {
                //将需要扩展的属性先扩展
                record.data.imglist = $.extend(record.data.imglist, data.imglist);
              }

              record.data = $.extend(record.data || {}, data);

              //还未创建,则更新createVersion
              if (record.iscreate) {

                if (this.resource == 'note') {
                  record.iscreate = data.sortby;
                } else if (this.resource == 'tag') {
                  record.iscreate = data.version;
                }

                this.addRecord(record);
              } else {

                this.addRecord(record);
              }
            }
          }
        };

        /**
         * 开启同步程序
         *
         * @return {[type]} [description]
         */
        SyncProto.prototype.start = function (nodelay, callback) {
          if (this.deferTimer) clearTimeout(this.deferTimer);

          var user = _models.UserModel.getLocalUser();
          //用户为登陆
          if (!user || !user.uid) {
            return false;
          }

          if (nodelay) {
            //及时运行同步程序，并返回待同步的数目
            return this.run();
          } else {
            var that = this;
            var timeout = _OKConfig.environment == 'debug_env' ? 3000 : 5000;

            //延时同步
            this.deferTimer = setTimeout(function () {
              that.run();
            }, timeout);
          }
        };

        /**
         * 打印同步记录
         *
         * @return {[type]} [description]
         */
        SyncProto.prototype.printRecords = function () {
          var records = this.getAllRecords();

          if (window.console && console.table) console.table(records);
        };

        /**
         * 同步程序
         *
         * @return {[type]} [description]
         */
        SyncProto.prototype.run = function () {

          var allRecords = this.getAllRecords(),
          paper,
          record;
          var createList = [],
          updateList = [];

          _O.debug("开始跑同步程序:" + this.resource, "总共" + Object.keys(allRecords).length + "条" + this.resource + "数据要同步");
          this.printRecords();

          for (var resID in allRecords) {
            record = allRecords[resID];

            //如果没有正在同步
            if (!this.isInSyncingList(resID)) {

              //加入正在同步列表
              this.addToSyncingList(resID);

              if (this.resource == "tag") {

                if (record.iscreate) {
                  var tag = _models.TagModel.getTagByGtid(resID);
                  createList.push(tag);
                } else {
                  updateList.push(record.data);
                }
              } else if (this.resource == "note") {

                //如果是贴纸

                //创建贴纸
                if (record.iscreate) {

                  var note = _models.NoteModel.getNoteBySortby(record.iscreate) || record.data;

                  if (note) {

                    //检测是否有需要上传的图片
                    var imgsNeedUpload = _models.NoteModel.getImagesNeedUpload(note);

                    if (imgsNeedUpload.length > 0) {

                      //同步图片文件
                      this.syncImages(imgsNeedUpload, note);
                    } else {
                      if (note.hasOwnProperty('tags')) {
                        note.taglist = [];

                        if ($.isArray(note.tags) && note.tags.length > 0) {
                          var tag;
                          $(note.tags).each(function () {
                            tag = _models.TagModel.getTagByGtid(this);

                            if (tag && tag.removed != '1') note.taglist.push(tag);
                          });
                        }
                      }

                      //放入待创建的同步数据中
                      createList.push(note);
                    }
                  } else {
                    _O.debug("开始跑同步程序", "创建贴纸" + record.gnid + ",但没找到本地贴纸");
                  }

                  //更新贴纸
                } else {

                  //修改时没有data，但是有buffered_data，则替换
                  if (!record.data && record.buffered_data) {
                    record.data = record.buffered_data;
                    record.buffered_data = null;

                    //更新此同步记录record
                    this.addRecord(record);
                  }

                  if (record.data) {

                    record.data.gnid = record.gnid;
                    var note = _models.NoteModel.getNoteBySortby(record.data.sortby);

                    //检测是否有需要上传的图片
                    var imgsNeedUpload = _models.NoteModel.getImagesNeedUpload(note);

                    if (note && imgsNeedUpload.length > 0) {

                      //同步图片文件
                      this.syncImages(imgsNeedUpload, note);

                      //没有图片要上传，或者没有找到本地贴纸就直接上传数据
                    } else {

                      //如果标签有被更新，则替换为完整模型
                      if (record.data.hasOwnProperty('tags')) {
                        record.data.taglist = [];

                        if ($.isArray(record.data.tags) && record.data.tags.length > 0) {

                          // //判断要更新的标签属性和当前贴纸模型标签的属性是否相同,不同则用贴纸模型的标签
                          // if(record.data.tags.length != note.tags.length){
                          //     record.data.tags = note.tags;

                          // //判断标签详情是否相同,不同则使用贴纸模型的属性,因为中途可能
                          // }else{
                          //     $(note.tags).each(function(i,gtid){
                          //         if(record.data.tags.indexOf(gtid) < 0){
                          //             record.data.tags = note.tags;
                          //             return false;
                          //         }
                          //     });
                          // }

                          var tag;
                          $(record.data.tags).each(function () {
                            tag = _models.TagModel.getTagByGtid(this);

                            //放入未被删除的标签
                            if (tag && tag.removed != '1') record.data.taglist.push(tag);
                          });
                        }

                        delete record.data.tags;
                      }

                      //放入待同步的更新数据中
                      updateList.push(record.data);
                    }
                  }
                }
              }
            } else {
              _O.debug("同步时，贴纸在正在同步列表中,不做处理", resID);
            }
          }

          if (createList.length > 0) {
            this.syncCreate(createList);
          }

          if (updateList.length > 0) {
            this.syncUpdate(updateList);
          }

          //需要被同步的数目
          return this.syncingList.length;
        };

        /**
         * 根据类型得到数据模型
         *
         * @return {[type]} [description]
         */
        SyncProto.prototype.getModel = function () {
          if (this.resource == 'tag') {
            return _models.TagModel;
          } else if (this.resource == 'note') {
            return _models.NoteModel;
          }
        },

        /**
         * 一条记录已经同步完成
         *
         * @return {[type]} [description]
         */
        SyncProto.prototype.syncFinished = function (record) {

          //同步完成之后的同步记录
          var newRecord = this.getRecord(record[this.idstr]);

          //如果是创建
          if (record.iscreate) {

            //标识为非创建
            newRecord.iscreate = 0;

            //将创建data清除
            newRecord.data = null;

            //更新记录被完成
          } else {

            //将更新data清除，
            newRecord.data = null;
          }

          //检测是否有buffered_data
          //如果有buffered_data，证明在同步过程中产生了修改
          if (newRecord.buffered_data) {
            newRecord.data = newRecord.buffered_data;
            newRecord.buffered_data = null;

            //更新记录
            this.addRecord(newRecord);

            //继续同步
            this.start();
          } else {
            this.removeRecord(record[this.idstr]);
          }
        };

        /**
         * 同步创建到服务器
         *
         * @param  {[type]} list [description]
         * @return {[type]}      [description]
         */
        SyncProto.prototype.syncCreate = function (list) {
          var that = this;

          var model = this.getModel(),
          record;

          if (model && model.syncCreate) {
            model.syncCreate(list, function (data) {

              for (var i = 0; i < list.length; i++) {
                record = list[i];

                //一条记录同步完成
                if (data.status == 1) {
                  that.syncFinished(record);

                  //一条记录同步失败
                } else {
                }

                //从正在同步列表中移除
                that.removeFromSyncingList(record[that.idstr]);
              }
            }, function () {

              //网络错误

            });
          }
        },

        /**
         * 同步更新数据到服务器
         *
         * @param  {[type]} list [description]
         * @return {[type]}      [description]
         */
        SyncProto.prototype.syncUpdate = function (list) {
          var that = this;
          var model = this.getModel(),
          record;

          if (model && model.syncUpdate) {
            model.syncUpdate(list, function (data) {

              for (var i = 0; i < list.length; i++) {
                record = list[i];

                //一条记录同步完成
                if (data.status == 1) {
                  that.syncFinished(record);

                  //一条记录同步失败
                } else {
                }

                //从正在同步列表中移除
                that.removeFromSyncingList(record[that.idstr]);
              }
            }, function () {

              //网络错误

            });
          }
        },

        /**
         * 同步上传图片
         *
         * @param  {[type]} images [description]
         * @param  {[type]} note   [description]
         * @return {[type]}        [description]
         */
        SyncProto.prototype.syncImages = function (images, note) {
          var that = this;

          _models.NoteModel.uploadImagesInNote(images, note, function () {
            //获取封面
            if (!note.images) {
              $(note.imglist).each(function (i, image) {
                // 添加cdn图片到封面
                if (image.width >= 300) {

                  note.images = image;
                  return false;
                }
              });
            }

            //更新贴纸数据
            delete note.upload;
            note.modified = note.modified + 1;
            _models.NoteModel.setNoteBySortby(note);

            //图片上传完成，通知界面更新内容
            _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [note]});

            //同步完成之后，从正在同步列表中移除
            that.removeFromSyncingList(note.gnid);

            //上传完成之后立马同步
            that.start(true);
          });
        };

        //添加记录,有createVersion代表是创建
        SyncProto.prototype.addRecord = function (data) {
          var allRecords = _models.LocalKVDB.get(this.resource + "_queue", {});

          allRecords[data[this.idstr]] = data;

          _models.LocalKVDB.set(this.resource + "_queue", allRecords);

          return this;
        };

        //删除记录
        SyncProto.prototype.removeRecord = function (id) {
          var allRecords = _models.LocalKVDB.get(this.resource + "_queue", {});

          if (allRecords[id]) {
            delete allRecords[id];

            _models.LocalKVDB.set(this.resource + "_queue", allRecords);
          }

          return this;
        };

        //得到某条需要同步的数据记录
        SyncProto.prototype.getRecord = function (id) {

          var allRecords = _models.LocalKVDB.get(this.resource + "_queue", {});

          return allRecords[id];
        };

        //得到所有同步记录
        SyncProto.prototype.getAllRecords = function () {
          return _models.LocalKVDB.get(this.resource + "_queue", {});
        };

        //数据是否正在同步中
        SyncProto.prototype.isInSyncingList = function (id) {
          return this.syncingList.indexOf(id) >= 0;
        };

        //添加到正在同步列表中
        SyncProto.prototype.addToSyncingList = function (id) {
          this.syncingList.push(id);

          return this;
        };

        //从正在同步列表中移除
        SyncProto.prototype.removeFromSyncingList = function (id) {
          var index = this.syncingList.indexOf(id);

          if (index >= 0) {
            this.syncingList.splice(index, 1);
          }

          if (this.syncingList.length == 0) {
            _utils.WindowMessager.notifyCurrentPage('sync-finished');
            _O.debug("同步完成!!!!!!", "");
          }

          return this;
        };

        //得到同步实例
        var getInstance = function getInstance(type) {
          if (!_instances[type]) {
            _instances[type] = new SyncProto(type);
          }

          return _instances[type];
        };

        return {
          getInstance: getInstance
        };
      })();

      exports['default'] = SyncManager;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(161), __webpack_require__(163)))

    /***/
  },
  /* 184 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_Note"] = __webpack_require__(169);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 185 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_User"] = __webpack_require__(171);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 186 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_Tag"] = __webpack_require__(177);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 187 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_LocalStorage"] = __webpack_require__(178);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 188 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_Request"] = __webpack_require__(170);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 189 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_App"] = __webpack_require__(172);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 190 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, $) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var CaretUtil = {

        insertTextAtCursor: function insertTextAtCursor(el, text) {
          var val = el.value,
          endIndex,
          range;
          if (typeof el.selectionStart != "undefined" && typeof el.selectionEnd != "undefined") {
            endIndex = el.selectionEnd;
            el.value = val.slice(0, el.selectionStart) + text + val.slice(endIndex);
            el.selectionStart = el.selectionEnd = endIndex + text.length;
          } else if (typeof document.selection != "undefined" && typeof document.selection.createRange != "undefined") {
            el.focus();
            range = document.selection.createRange();
            range.collapse(false);
            range.text = text;
            range.select();
          }
        },

        printRange: function printRange(where) {
          if (window.getSelection) {

            var sel = window.getSelection();

            if (sel.rangeCount > 0) {
              var range = sel.getRangeAt(0);
              _O.log(where, range.startContainer, range.startOffset, range.endContainer, range.endOffset);
            }
          }
        },

        optimizeEditor: function optimizeEditor(selector, win) {
          var _this = this;
          win = win || window;
          $(win.document).on("keydown", selector, function (event) {
            // 点击tab键空四个
            if (event.keyCode === 9) {
              event.preventDefault();
              _this.pasteHtmlAtCaret("&nbsp;&nbsp;&nbsp;&nbsp;", win);
            }
          });
        },

        //将光标放入可编辑的元素中，默认放在末尾，否则放打头的地方
        placeCaretInEl: function placeCaretInEl(el, atStart) {
          var atEnd = false;
          atStart = atStart ? atStart : atEnd;
          el.focus();
          if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(atStart);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(atStart);
            textRange.select();
          }
        },

        highlightCaret: function highlightCaret() {
          var sel = window.getSelection();
          var range = sel.getRangeAt(0);
          if (range.isCollapsed) range.deleteContents();

          var span = document.createElement("span");
          span.style.borderLeft = "1px solid red";
          span.text = "";
          var frag = document.createDocumentFragment();
          frag.appendChild(span);

          range.insertNode(frag);
          range.setStartAfter(span);

          sel.removeAllRanges();
          sel.addRange(range);
        },

        pasteHtmlAtCaret: function pasteHtmlAtCaret(html, win) {
          win = win || window;
          var sel, range;
          if (win.getSelection) {
            // IE9 and non-IE
            sel = win.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
              range = sel.getRangeAt(0);
              range.deleteContents();

              // Range.createContextualFragment() would be useful here but is
              // only relatively recently standardized and is not supported in
              // some browsers (IE9, for one)
              var el = win.document.createElement("div");
              el.innerHTML = html;
              var frag = win.document.createDocumentFragment(),
              node,
              lastNode;
              while (node = el.firstChild) {
                lastNode = frag.appendChild(node);
              }
              range.insertNode(frag);

              // Preserve the selection
              if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
              }
            }
          } else if (win.document.selection && win.document.selection.type != "Control") {
            // IE < 9
            win.document.selection.createRange().pasteHTML(html);
          }
        },

        //获取光标的dom容器
        getCaretContainer: function getCaretContainer() {
          var container = null;

          if (window.getSelection) {
            var sel = window.getSelection();

            if (sel.rangeCount > 0) {
              var rng = sel.getRangeAt(0);
              container = rng.startContainer;
            }
          }

          return container;
        },

        getCaretCharacterOffsetWithin: function getCaretCharacterOffsetWithin(element) {
          var caretOffset = 0;
          var doc = element.ownerDocument || element.document;
          var win = doc.defaultView || doc.parentWindow;
          var sel;
          if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
              var range = win.getSelection().getRangeAt(0);
              var preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              caretOffset = preCaretRange.toString().length;
            }
          } else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
          }
          return caretOffset;
        },

        setCaretPosition: function setCaretPosition(element, offset) {
          var range = document.createRange();
          var sel = window.getSelection();

          //select appropriate node
          var currentNode = null;
          var previousNode = null;

          for (var i = 0; i < element.childNodes.length; i++) {
            //save previous node
            previousNode = currentNode;

            //get current node
            currentNode = element.childNodes[i];
            //if we get span or something else then we should get child node
            while (currentNode.childNodes.length > 0) {
              currentNode = currentNode.childNodes[0];
            }

            //calc offset in current node
            if (previousNode != null) {
              offset -= previousNode.length;
            }
            //check whether current node has enough length
            if (offset <= currentNode.length) {
              break;
            }
          }
          //move caret to specified offset
          if (currentNode != null) {
            range.setStart(currentNode, offset);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        },

        saveSelection: function saveSelection() {
          if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
              return sel.getRangeAt(0);
            }
          } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange();
          }
          return null;
        },

        restoreSelection: function restoreSelection(range, win) {
          win = win || window;
          if (range) {
            if (win.getSelection) {
              sel = win.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } else if (document.selection && range.select) {
              range.select();
            }
          }
        },

        removeHighlightStyle: function removeHighlightStyle(el) {
          if (!el) return false;

          $(".kws-highlight", el).each(function () {
            if (this.childNodes.length == 1) {
              $(this).after(this.childNodes);
              $(this).remove();
            } else {
              $(this).removeClass("kws-highlight");
            }
          });
        },

        //高亮搜索文字
        highlightText: function highlightText(keyword, parentel, exclass) {
          if (keyword == "") return false;
          exclass = !!exclass ? exclass : "kws-highlight";
          if (document.createRange) {
            if (!parentel) parentel = document.body;
            var childs = parentel.childNodes;
            var ran_arr = [];
            if (parentel.className == exclass) return;

            for (var i = 0, len = childs.length; i < len; i++) {
              var child = childs[i];

              if (child.childNodes.length > 0) {
                this.highlightText(keyword, child);
              } else {
                //在子节点中找关键字
                if (child.textContent) {
                  var start = 0;

                  while (child.textContent.indexOf(keyword, start) >= 0) {
                    var ran = document.createRange();

                    ran.setStart(child, child.textContent.indexOf(keyword, start));
                    ran.setEnd(child, child.textContent.indexOf(keyword, start) + keyword.length);

                    start = child.textContent.indexOf(keyword, start) + keyword.length;
                    ran_arr.push(ran);
                  }
                } else if (child.innerText) {
                  var start = 0;
                  while (child.innerText.indexOf(keyword, start) >= 0) {
                    var ran = document.createRange();

                    ran.setStart(child, child.innerText.indexOf(keyword, start));
                    ran.setEnd(child, child.innerText.indexOf(keyword, start) + keyword.length);
                    start = child.innerText.indexOf(keyword, start) + keyword.length;
                    ran.surroundContents(b);
                  }
                }
              }
            }

            for (var j = 0, len = ran_arr.length; j < len; j++) {
              var range = ran_arr[j];
              var wrapper = document.createElement("span");
              wrapper.className = exclass;
              range.surroundContents(wrapper);
            }
          }
        }
      };

      exports["default"] = CaretUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(161)))

    /***/
  },
  /* 191 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _OKConfig, jQuery) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var ContentUtil = {
        /**
         * //module content process
         */
        EMAIL_FIELD_REGEXP: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,

        //网址正则表达式
        LINK_REGEXP: /((http\:\/\/|https\:\/\/|ftp\:\/\/|\/\/)?([a-z0-9\-]+\.){0,5}[a-z0-9\-]+\.(?:com|edu|cn|hr|io|org|do|fr|jp|tv|name|mobi|pro|it|de|us|st|fm|asia|net|gov|tel|la|travel|so|biz|info|hk|im|me|cc|in|at|bz|ag|eu|in|co|ly)\b(?:\:[\d+])?[^\<\>\s\,\"\'\[\]\{\}\<\u4E00-\u9FA5]{0,})/ig,

        //host为ip的网址表达式
        IP_LINK_REGEXP: /((http\:\/\/|https\:\/\/|ftp\:\/\/|\/\/)?[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b(?:\:[\d+])?[^\<\>\)\(\s\"\'\[\]\{\}\<\u4E00-\u9FA5]{0,})/ig,

        //支持的html属性
        supported_attrs: {
          "img": ["src", "_src", "data-width", "data-height", "data-media", "data-type", "title", "alt"],
          "a": ["target", "title", "href", "data-media", "data-duration", "data-type", "data-translated"],
          "div": ["contenteditable", "class"],
          "li": ["class"],
          "span": ["style"]
        },

        //支持的class
        supported_classes: ["fp-merge-source", "fp-more", "media", "res", "todo-item", "fromtxt", "done", "font-size-1", "font-size-2", "font-size-3", "font-size-4", "font-size-5"],

        //支持的样式规则
        supported_style: {
          "font-size": ["12px", "16px", "18px", "22px", "28px"]
        },

        //i|b|u|ul|ol|li|br|hr|strong|img|sub|sup|pre|a|em|span|p|div|h1|h2|h3|h4|h5|h6|small|code|section|article|blockquote
        //支持的html标签
        supported_tags: ["i", "b", "u", "ul", "ol", "li", "br", "hr", "strong", "img", "sub", "sup", "pre", "a", "em", "span", "p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "small", "code", "section", "article", "blockquote"],

        /**
         * 对内容进行展示前的过滤美化处理
         *
         */
        processContent: function processContent(content) {
          if (!content) return "";

          var _this = this;

          //去除代码中的空格
          content = this.removeSpaceBetweenTags(content);

          var loc_origin = "http://m.okay.do";

          //若是网址的话则变成链接
          content = content.replace(this.LINK_REGEXP, function (match, whole, scheme, rou, offset, string) {
            if (match && match.indexOf(loc_origin) < 0) {

              //只有是纯文本才给上链接，已经被标签包住的链接不再给其加上a标签
              if (string[offset - 1] == ">" || string[offset + match.length] == "<") {
                if (string.substr(offset + match.length, 4).indexOf('</a>') >= 0) return match;
              }

              //如果链接前面是本站附加的地址，也直接返回
              if (string.substr(offset - 2 - loc_origin.length, loc_origin.length) == loc_origin) return match;

              //如果链接是被转义过的链接，也直接返回
              if (string.substr(offset, 2).toLowerCase() == "2f" && string.substr(offset - 1, 1) == "%") return match;

              //如果是href，也直接返回
              if (string.substr(offset - 7, 7).indexOf("href") >= 0) return match;

              //如果是作为图片的src或者链接的href等属性页直接返回
              if ((content[offset - 1] == '"' || content[offset - 1] == "'") && content[offset - 2] == "=") return match;

              //如果链接是图片链接
              if (match.match(/[^\/]+\.(?:png|jpg|jpeg|svg|bmp|gif|tiff)\b/i)) {
                return "[[img src=\"" + match + "\" _src=\"" + match + "\" style=\"max-width:100%;\" class=\"fromtxt\"]]";
              }

              var href = match;
              //没有协议
              if (!scheme) {
                if (match.indexOf("//") != 0) {
                  href = "http://" + match;
                } else {
                  href = _models.AppModel.Globals.protocol + ":" + match;
                }
              }

              return "[[a class=\"open encoded-link\" href=\"" + href + "\"]]" + match + "[[/a]]";
            }
            return match;
          });

          content = this.cleanContent(content);

          content = this.ensureHtmlTagClosed(content);

          return content;
        },

        /**
         * 过滤外部进来的内容
         */
        filterContentFromOutside: function filterContentFromOutside(code) {
          if (!code) return "";

          var _this = this;

          //去除代码中的空格
          code = this.removeSpaceBetweenTags(code);

          //去除系统处理内容时带上的标签
          code = this.ensureSystemTagStripped(code);

          code = this.cleanContent(code);

          //将多行空格转为一行
          code = code.replace(/(\<br\>|\<br[\s]\/\>|\<br\/\>){2,}/g, "<div><br></div>");

          //去除空标签
          code = this.removeEmptyTag(code);

          //Ensure that all html tags are closed
          code = this.ensureHtmlTagClosed(code);

          return code;
        },

        cleanContent: function cleanContent(content) {
          if (!content) return "";
          var _this = this;

          //去除用户不可见元素,例如noscript,script,注释<!-- -->
          content = content.replace(/\<(noscript|script|style)[^>]{0,}\>[^><]{0,}\<\/(noscript|script|style)\>/ig, '');
          content = content.replace(/\<\!\-\-[^>]+\-\-\>/g, '');

          //需要保留的标签进行替换
          //开标签,有些开标签需要特殊处理, 例如div ,img , span,
          //无属性的特殊开标签
          content = content.replace(/\<(div|span|a|li)\>/ig, "[[$1]]");
          //不允许有属性的开标签全部去除属性
          content = content.replace(/\<(h6|h5|h4|h3|h2|h1|blockquote|p|u|i|b|strong|em|ul|ol|br|hr|sub|sup|pre|small|code|section|article)\b[^>]{0,}\>/ig, '[[$1]]');
          //闭标签
          content = content.replace(/\<\/(a|h6|h5|h4|h3|h2|h1|blockquote|p|span|u|i|b|strong|em|ul|ol|li|div|sub|sup|pre|small|code|section|article)\b[^>]{0,}\>/ig, '[[\/$1]]');

          //有属性的开标签
          content = content.replace(/\<(div|a|img|span|li)\s([^><]{0,})\>/ig, function (match, tag, propsString, i, string) {
            var props = propsString.match(/[a-z0-9\-\_]+\=['"][^'"]{0,}['"]/g),
            propValue,
            supported_attrs = "";

            if (props) {
              $(props).each(function (i, propValueStr) {
                propValue = propValueStr.replace("=", "==fp-separator==").split("==fp-separator==");

                if (propValue.length == 2) {

                  if (_this.supported_attrs[tag].indexOf(propValue[0]) >= 0) {
                    //源，则将协议补上
                    if (propValue[0] == "href") {

                      //无协议
                      if (propValue[1].match(/^[\'\"]?\/\//)) {
                        //不加g修饰符替换第一个出现的//
                        propValueStr = propValueStr.replace("//", "http://");
                      }
                    } else if (propValue[0] == "class") {
                      //需要保留的特殊类
                      var classes = propValue[1].replace(/[\"\']/g, "").split(" ");

                      //去除不合法的类
                      $(classes).each(function (i, str) {
                        if (str && _this.supported_classes.indexOf($.trim(str)) < 0) {
                          propValue[1] = propValue[1].replace(str, "");
                        }
                      });

                      //还有合法的类
                      if ($.trim(propValue[1])) {
                        propValueStr = "";
                        supported_attrs += "class=" + propValue[1] + " ";
                      }
                    } else if (propValue[0] == "src" || propValue[0] == "_src") {

                      //无协议
                      if (propValue[1].match(/^[\'\"]?\/\//)) {
                        //不加g修饰符替换第一个出现的//
                        propValueStr = propValueStr.replace("//", "http://");
                      }
                    } else if (propValue[0] == "href") {

                      //无协议
                      if (propValue[1].match(/^[\'\"]?\/\//)) {
                        //不加g修饰符替换第一个出现的//
                        propValueStr = propValueStr.replace("//", "http://");
                      }
                    } else if (propValue[0] == "style") {
                      if (tag.toLowerCase() == "span") {
                        var newStyle = "";
                        var keyvaluePairs = propValue[1].replace(/[\'\"]/g, "").split(";");

                        if ($.isArray(keyvaluePairs) && keyvaluePairs.length > 0) {
                          newStyle = "";

                          //目前只允许fontsize的样式
                          $(keyvaluePairs).each(function (i, styleDesc) {
                            if ($.trim(styleDesc).indexOf("font-size") == 0) {

                              var keyvalue = styleDesc.split(":");
                              if ($.isArray(keyvalue) && keyvalue.length == 2) {
                                //判断value是否属于合法的
                                if (_this.supported_style["font-size"].indexOf($.trim(keyvalue[1])) >= 0) {
                                  newStyle = " style=\"";
                                  newStyle += styleDesc;
                                  newStyle += "\"";
                                }
                              }

                              return false;
                            }
                          });
                        }

                        propValueStr = newStyle;
                      } else {
                        propValueStr = "";
                      }
                    }

                    if (propValueStr) supported_attrs += propValueStr + " ";
                  }
                }
              });
            }

            return "[[" + tag + " " + $.trim(supported_attrs) + "]]";
          });

          // content = content.replace(/\<a\s([^><]{0,})\>([^<>]{0,})\<\/a\>/ig,function(match,propsString,title,i,string){
          //     var props = propsString.match(/[a-z0-9\-\_]+\=['"][^'"]{0,}['"]/g),propValue,supported_attrs = "";

          //     if(props){
          //         $(props).each(function(i,propValueStr){
          //             propValue = propValueStr.replace("=","==fp-separator==").split("==fp-separator==");

          //             if(propValue.length == 2){

          //                 if(_this.supported_attrs["a"].indexOf(propValue[0]) >= 0){

          //                     //源，则将协议补上
          //                     if( propValue[0] == "href" ){

          //                         //无协议
          //                         if(propValue[1].match(/^[\'\"]?\/\//)){
          //                             //不加g修饰符替换第一个出现的//
          //                             propValueStr = propValueStr.replace("//","http://");
          //                         }
          //                     }

          //                     supported_attrs += propValueStr + " ";
          //                 }
          //             }
          //         });
          //     }

          //     return "[[a "+supported_attrs+"]]" + title + "[[/a]]";
          // });

          //保存图片
          // content = content.replace(/\<img\s([^><]{0,})\/?\>/ig,function(match,propsString,i,string){
          //     var props = propsString.match(/[a-z0-9\-\_]+\=['"][^'"]{0,}['"]/g),propValue,supported_attrs = "";

          //     if(props){
          //         $(props).each(function(i,propValueStr){
          //             propValue = propValueStr.replace("=","==fp-separator==").split("==fp-separator==");

          //             if(propValue.length == 2){

          //                 if(_this.supported_attrs["img"].indexOf(propValue[0]) >= 0){

          //                     //源，则将协议补上
          //                     if(propValue[0] == "src" || propValue[0] == "_src"){

          //                         //无协议
          //                         if(propValue[1].match(/^[\'\"]?\/\//)){
          //                             //不加g修饰符替换第一个出现的//
          //                             propValueStr = propValueStr.replace("//","http://");
          //                         }
          //                     }

          //                     supported_attrs += propValueStr + " ";
          //                 }
          //             }
          //         });
          //     }

          //     return "[[img "+supported_attrs+"]]";
          // });

          //span标签处理
          // content = content.replace(/\<span[^\>\/]{0,}\sstyle\=[\'\"]([^\'\"]+)[\'\"][^\>\/]{0,}\>/ig,function(match,styleString,i,string){
          //     var newStyle = "";
          //     var keyvaluePairs = styleString.split(";");

          //     if($.isArray(keyvaluePairs) && keyvaluePairs.length > 0){
          //         newStyle = " style=\"";

          //         $(keyvaluePairs).each(function(i,styleDesc){
          //             if($.trim(styleDesc).indexOf("font-size") == 0){

          //                 var keyvalue = styleDesc.split(":");
          //                 if( $.isArray(keyvalue) && keyvalue.length == 2 ){
          //                     //判断value是否属于合法的
          //                     if( _this.supported_style["font-size"].indexOf( $.trim(keyvalue[1]) ) >= 0 ){
          //                         newStyle += styleDesc;
          //                     }
          //                 }

          //                 return false;
          //             }
          //         });

          //         newStyle += "\"";
          //     }

          //     return "[[span"+newStyle+"]]";
          // });

          //去除其他标签,但是保留其中内容
          content = content.replace(/(<([^>]+)>)/ig, "");

          //将[[换<等等
          content = content.replace(/\[\[/ig, '<');
          content = content.replace(/\]\]/ig, '>');
          content = content.replace(/\/\]\]/ig, '/>');

          return content;
        },

        stripHTML: function stripHTML(s) {
          return s.replace(/[&<>"'\/]/g, '');
        },

        escape: function escape(string) {
          // List of HTML entities for escaping.
          var htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;'
          };

          // Regex containing the keys listed immediately above.
          var htmlEscaper = /[&<>"'\/]/g;

          return ('' + string).replace(htmlEscaper, function (match) {
            return htmlEscapes[match];
          });
        }, // escape() [stolen from _.js]

        wrapBlockContent: function wrapBlockContent(content) {
          if (!content) return "";
          var _this = this;

          var div = document.createElement("div");
          div.innerHTML = content;

          var tagName;
          $(div.childNodes).each(function () {
            tagName = this.tagName;

            //包含图片的容器，并且还包含其他文字则特殊处理
            if ($(this).find("img").length > 0 && $.trim($(this).text()) != "") {
              this.innerHTML = _this.wrapBlockContent(this.innerHTML);
            }

            if (tagName == "IMG" || $.trim($(this).text()) == "" || tagName == "BR" || $(this).hasClass("img") || $(this).hasClass("dl") || $(this).hasClass("pad-block") || $(this).find("img").length > 0) {
              //让其撑满笔记的不做处理,例如图片.img以及加上.pad-block类的容器

            } else {
              var hasInnerWrap = $(this).find(".pad-block").length > 0;
              if (hasInnerWrap) $(this).find("pad-block").removeClass("pad-block");

              //使用特殊类div包裹
              if (tagName == "DIV") {
                $(this).addClass("pad-block");
              } else {
                $(this).wrap($("<div>", {'class': "pad-block"}));
              }
            }
          });

          content = div.innerHTML;
          div = null;

          return content;
        },

        //移除html标签之间的任何空格
        removeSpaceBetweenTags: function removeSpaceBetweenTags(content) {
          if (!content) return "";
          content = content.replace(/>\s+</g, "><");

          return content;
        },

        ensureSystemTagStripped: function ensureSystemTagStripped(content) {
          if (!content) return "";

          var div = document.createElement("div");
          div.innerHTML = content;

          //还原视频图片
          $(".video-img", div).each(function () {
            var that = this;

            //删除播放按钮
            $(".vmask", this).remove();

            if ($('img', this).length > 0) {
              $(this.childNodes).each(function () {
                if (this.tagName != 'img') {
                  if ($(this).hasClass('img')) $(this).removeClass('img');

                  $(that).after(this);
                }
              });

              //将图片从.video-img中取出
              $(this).replaceWith($("img", this));
            } else {
              $(this).removeAttr('class');
            }
          });

          //上传进度条去除
          $(".uploadbar", div).each(function () {
            $(this).remove();
          });

          //还原图片
          $(".img", div).each(function () {
            var that = this;

            //删除下载按钮
            $(".dl", this).remove();

            if ($('img', this).length > 0) {

              //将.img div中的非img内容全部放在.img div后面
              $(this.childNodes).each(function () {
                if (this.tagName != 'img') {
                  if ($(this).hasClass('img')) $(this).removeClass('img');

                  $(that).after(this);
                }
              });

              //将图片从.img div中移出来
              $(this).replaceWith($("img", this));
            } else {
              $(this).removeAttr('class');
            }
          });

          //还原cdn尺寸
          $("img", div).each(function () {

            //如果是cdn图片，
            if (this.src.indexOf('//' + _OKConfig.img_cdn_domain) >= 0) {
              this.src = this.src.replace(/\@.+/, '');
            } else if (!this.src || this.src.indexOf('data:') == 0) {

              //无源或者是被替换了src的情况，找data-origin
              if ($(this).data("origin")) {

                if ($(this).data("origin").indexOf('//' + _OKConfig.img_cdn_domain) >= 0) {
                  this.src = $(this).data("origin").replace(/\@.+/, '');
                } else {
                  this.src = $(this).data("origin");
                }
              }
            }
          });

          //换行div,如果为空则删除
          $(".newline", div).each(function () {
            if ($(this).text() == '') {
              if (this.childNodes.length == 1 && this.childNodes[0].tagName.toLowerCase() == 'br') {
                $(this).remove();
              }
            } else {
              $(this).removeClass("newline");
            }
          });

          //删除下载,gif按钮
          $(".dl,.icon-font,.gif", div).remove();

          //还原转换过的链接文字为纯文字
          $(".encoded-link", div).each(function () {
            $(this).replaceWith($(this).text());
          });

          //空span
          $("span", div).each(function () {
            if (!this.getAttribute("class") && $(this).text() == "" && $(this).find("img").length == 0) {
              $(this).remove();
            }
          });

          //编辑器为空标签生成的代码
          // $("p",div).each(function(){
          //     if(!$(this).html() || $(this).html() == '&nbsp;'){
          //         $(this).remove();
          //     }
          // });

          return div.innerHTML;
        },

        ensureHtmlTagClosed: function ensureHtmlTagClosed(content) {
          var div = document.createElement("div");
          div.innerHTML = content;

          var newContent = div.innerHTML;
          $(div).find("img").attr('src', '');

          div = null;
          return newContent;
        },

        restoreContent: function restoreContent(editable) {
          if (!editable) return "";

          //还原视频图片
          $(".video-img", editable).each(function () {
            //删除播放按钮
            $(".vmask", this).remove();

            //将图片从.video-img中取出
            $(this).replaceWith($("img", this));
          });

          //还原图片
          $(".img", editable).each(function () {
            //删除下载按钮
            $(".dl", this).remove();

            //将图片从.img div中移出来
            // $(this).replaceWith($("img",this));
          });

          //还原转换过的链接文字为纯文字
          $(".encoded-link", editable).each(function () {
            $(this).replaceWith($(this).text());
          });
        },

        //得到内容中的链接,返回结构化的数据{title:'',url:''}
        getLinksInContent: function getLinksInContent(content, callback) {
          var dom = $.parseHTML(content);
          var linkObjs = [];

          var links = [];

          $(dom).find("a").each(function () {
            if (links.indexOf(this.href) == -1) {
              links.push(this.href);
              linkObjs.push({
                url: this.href,
                title: $(this).text() || this.href
              });
            }
          });

          if ($.isFunction(callback)) callback(links, linkObjs);
          return linkObjs;
        },

        getImageLinksInContent: function getImageLinksInContent(content, callback) {
          var image_urls = [];

          var div = document.createElement('div');
          div.innerHTML = content;
          $('img', div).each(function (i) {
            image_urls.push(this.src);

            this.src = '';
          });

          var matches = content.match(this.LINK_REGEXP) || [];
          var ip_matches = content.match(this.IP_LINK_REGEXP) || [];
          var links = matches.concat(ip_matches);

          links = $.unique(links);

          //1.去除无协议的链接
          //2.去除已经在image_urls中的链接
          //3.去除后缀为特定类型的链接
          links = $.grep(links, function (link) {
            return link.indexOf("//") >= 0 && image_urls.indexOf(link) < 0 && !/\.(html|php|py|mp4|mp3|webm)/.test(link);
          });

          if (links.length == 0) {
            if ($.isFunction(callback)) callback(image_urls);
          } else {
            if ($.isFunction(callback)) callback(image_urls);

            var test_image_urls = [];
            var j = 0;
            $(links).each(function (i, link) {

              _utils.UrlUtil.getUriType(link, function (type) {
                j++;

                if (type && type.indexOf('image') >= 0) {
                  test_image_urls.push(link);
                }

                if (j == links.length) {
                  test_image_urls = $.unique(test_image_urls);
                  if ($.isFunction(callback)) callback(test_image_urls);
                }
              });
            });
          }
        },

        getImagesInContent: function getImagesInContent(content, callback) {

          this.getImageLinksInContent(content, function (image_urls) {

            var j = 0,
            imageObjs = [];
            $(image_urls).each(function (i, url) {

              _utils.ImageUtil.isImageUrl(url, function (url, img) {
                j++;

                if (img) {
                  imageObjs.push({
                    url: img.src,
                    width: img.naturalWidth || img.width,
                    height: img.naturalHeight || img.height
                  });
                }

                if (j == image_urls.length) {
                  if ($.isFunction(callback)) callback(imageObjs);
                }
              });
            });
          });
        },

        //分析文本中的内容,找到链接,是图片则进行加载
        getImagesInContentAlpha: function getImagesInContentAlpha(content, callback) {
          var _this = this;
          var matches = content.match(this.LINK_REGEXP) || [];
          var ip_matches = content.match(this.IP_LINK_REGEXP) || [];
          var links = matches.concat(ip_matches);

          links = $.unique(links);

          //去除无协议的链接
          links = $.grep(links, function (link) {
            return link.indexOf("//") >= 0;
          });

          if (links.length > 0) {
            var imageUrls = [];
            var imageObjs = [];
            var linkUrls = [];

            var j = 0;
            $(links).each(function (i, url) {
              //如果没有协议则加上
              if (url.indexOf("//") == 0) url = "http:" + url;

              //是否有协议
              // if(url.indexOf("://") > 0){}

              _utils.ImageUtil.isImageType(this, function (url, img) {
                j++;

                //是图片
                if (img) {
                  imageUrls.push(url);
                  imageObjs.push({
                    url: img.src,
                    width: img.naturalWidth || img.width,
                    height: img.naturalHeight || img.height
                  });
                } else {
                  linkUrls.push(url);
                }

                if (j == links.length) {
                  //遍历到最后一条链接调用回调
                  if ($.isFunction(callback)) callback(imageUrls, imageObjs);
                }
              });
            });
          } else {
            if ($.isFunction(callback)) callback([]);
          }
        },

        /**
         * 根据内容截取标题
         * @param content
         * @returns {*}
         */
        getTitle: function getTitle(content) {
          if (!content) return "无标题";
          //纯文本分享，将所有html tag去除，将html实体去除如&nbsp;
          content = content.replace(/\&nbsp\;/ig, " ");

          //先将<br>换成\n
          content = content.replace(/\<br[^<>]{0,}\>/, "\n");

          //去掉所有html标签
          content = content.replace(/(<([^>]+)>)/ig, "");

          var title = "";
          //第一句话为标题
          //以一个标点符号作为一句的结束
          if (content.match(/^[^\n\,\;\'\"\，\。\、\；\’\”]+/)) {
            title = content.match(/^[^\n\,\;\'\"\，\。\、\；\’\”]+/)[0];
          }

          if (title) {
            title = title.substr(0, 24);
          } else {
            title = content.substr(0, 24);
          }

          return $.trim(title) || "无标题";
        },

        /**
         * 得到摘要文本
         * @param content
         * @returns {*}
         */
        getSummaryData: function getSummaryData(content) {
          if (!content) return "";

          var $content = $($.parseHTML(content));
          $content = $("<div>").append($content);
          var $imgs = $content.find("img");

          var feature_img = null;
          var feature_video = null;
          var width = 0;
          var height = 0;
          var sizeMatch;

          /**
           * 音频
           *
           */
          $content.find("a").each(function () {
            var media = $(this).data("media");

            if (media) {

              var type = $(this).data("type");
              var duration = $(this).data("duration");

              feature_img = {url: media, type: type, duration: duration, featured: 1};

              return false;
            }
          });

          /**
           * 取封面图/视频
           *
           */
          $imgs.each(function () {
            //如果第一张是cdn上面的图片，从url获取宽高
            if (this.src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
              sizeMatch = this.src.match(/\_W(\d+)\_H(\d+)/);

              if (sizeMatch) {
                width = sizeMatch[1];
                height = sizeMatch[2];
              }
            }

            //从dom上获取宽高
            if (!width) {
              width = this.naturalWidth || this.width;
              height = this.naturalHeight || this.height;
            }

            //没得到宽高度
            if (width == 0) {
              feature_img = {url: this.getAttribute('_src') || this.src, type: "image/png", featured: 1};
            } else if (width > 120) {
              feature_img = {
                url: this.getAttribute('_src') || this.src,
                type: "image/png",
                width: width,
                height: height,
                featured: 1
              };
            }

            //获取视频
            if (feature_img) {

              if ($(this).data("video")) {
                feature_video = {url: $(this).data("video"), type: "video", featured: 1};
              }

              return false;
            }
          });

          /**
           * 取摘要html,摘要html中包含a,p标签
           *
           */
          //保存链接
          content = content.replace(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}\>[^<>]{0,}\<\/a\>/ig, function (match, href, i, string) {
            var title = match.match(/\<a[^><]{0,}\>([^<>]{0,})\<\/a\>/i);

            title = title ? title[1] : null;

            if (href && title) {
              match = "[[a href=\"" + href + "\"]]" + title + "[[/a]]";
            }

            return match;
          });

          //将块级元素全部替换为换行
          content = content.replace(/\<\/(div|p|h1|h2|h3|h4|h5|h6|section|code|blockquote|li|ul|ol|article)\>/g, "\n");
          content = content.replace(/\<br[\s\/]{0,2}\>/g, "\n");

          //多行换行替换为1个
          content = content.replace(/\n{2,}/g, "\n");

          //去除其他标签
          content = content.replace(/(<([^>]+)>)/ig, "");
          //将[[换<等等
          content = content.replace(/\[\[/ig, '<');
          content = content.replace(/\]\]/ig, '>');

          //经过处理的content变成了只包含a标签的内容,
          var $textcontent = $($.parseHTML(content));

          //移除掉音频
          $textcontent.find(".media").remove();

          var charnum = 0;
          var text = "";
          var summaryText = "";

          //确保摘要在100字以内，不包括html
          $textcontent.each(function () {
            if (charnum < 100 && $(this).text()) {
              //将多个空格替换成一个空格
              text = $.trim($(this).text().replace(/\s+/, " "));

              if (this.href) {
                if (text.length < 100) {
                  charnum += text.length;
                  $(this).text(text);
                  summaryText += $("<div>").append(this).html();
                } else {
                  $(this).text(text.slice(0, 100 - charnum));
                  summaryText += $("<div>").append(this).html();
                  charnum = 100;
                }
              } else {
                var clipText = text.slice(0, 100 - charnum);
                summaryText += clipText;
                charnum += clipText.length;
              }
            }
          });

          var summaryHtml = this.ensureHtmlTagClosed(feature_img ? "<p>" + summaryText + "</p>" : "<p class=\"noimage\">" + summaryText + "</p>");

          //常见实体替换
          summaryHtml = summaryHtml.replace(/\&nbsp\;/g, " ");

          var summaryData = {
            text: summaryHtml,
            feature_img: feature_img,
            feature_video: feature_video
          };

          return summaryData;
        },

        getSummary: function getSummary(content) {
          if (!content) return "";

          var $content = $(jQuery.parseHTML(content));
          $content = $("<div>").append($content);
          var $imgs = $content.find("img");

          var feature_img = null;
          var width = 0;
          var height = 0;
          $imgs.each(function () {
            width = this.naturalWidth || this.width;
            height = this.naturalHeight || this.height;

            //没得到宽高度
            if (width == 0) {
              feature_img = this;
            } else if (width > 120) {
              feature_img = this;
              feature_img.setAttribute("data-width", width);
              feature_img.setAttribute("data-height", height);
              return false;
            }
          });

          //保存链接
          content = content.replace(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}\>[^<>]{0,}\<\/a\>/ig, function (match, href, i, string) {
            var title = match.match(/\<a[^><]{0,}\>([^<>]{0,})\<\/a\>/i);

            title = title ? title[1] : null;

            if (href && title) {
              match = "[[a href=\"" + href + "\"]]" + title + "[[/a]]";
            }

            return match;
          });

          //去除其他标签
          content = content.replace(/(<([^>]+)>)/ig, "");
          //将[[换<等等
          content = content.replace(/\[\[/ig, '<');
          content = content.replace(/\]\]/ig, '>');

          //经过处理的content变成了只包含a标签的内容,
          var $textcontent = $($.parseHTML(content));

          var charnum = 0;
          var text = "";
          var summaryText = "";

          //确保摘要在100字以内，不包括html
          $textcontent.each(function () {
            if (charnum < 100 && $(this).text()) {
              //将多个空格替换成一个空格
              text = $.trim($(this).text().replace(/\s+/, " "));

              if (this.href) {
                if (text.length < 100) {
                  charnum += text.length;
                  $(this).text(text);
                  summaryText += $("<div>").append(this).html();
                } else {
                  $(this).text(text.slice(0, 100 - charnum));
                  summaryText += $("<div>").append(this).html();
                  charnum = 100;
                }
              } else {
                var clipText = text.slice(0, 100 - charnum);
                summaryText += clipText;
                charnum += clipText.length;
              }
            }
          });

          var summary = feature_img ? $("<div>").append(feature_img).html() + "<p>" + summaryText + "</p>" : "<p class=\"noimage\">" + summaryText + "</p>";

          return this.ensureHtmlTagClosed(summary);
        },

        /**
         * 处理图片文件的插入/上传/黏贴
         *
         * @param {blob} [blob] [上传的图片二进制]
         * @param {function} [onUploaded] [上传完成的回调函数]
         * @param {function} [onProgress] [上传的过程通知,参数为: progressEvent]
         */
        handleImageFileInsert: function handleImageFileInsert(blob, onUploaded, onProgress) {
          var url = URL.createObjectURL(blob);
          var img = new Image();

          img.onload = function () {
            var progressID = btoa(Math.random() + Date.now()).replace(/\=/g, "");

            var htmlFunc = function htmlFunc(data) {
              var gif = '';

              //gif图片不进行压缩
              if (data.type == 'image/gif') {
                gif = ' gif';
              }

              //上传成功,插入贴纸
              var html = '<div class="img' + gif + '">' + '<img src="' + data.src + '" _src="' + data.src + '" data-width="' + data.width + '" data-height="' + data.height + '" _src="' + data.url + '"></div><br>';
              return html;
            };

            URL.revokeObjectURL(url);

            //gif图片不进行压缩
            if (blob.type == 'image/gif') {
              var saveUrl = _utils.ImageUtil.getFullsizeImgViaSrc(url, blob.size, img.width, img.height, true);
              var image = {
                url: url,
                width: img.width,
                height: img.height,
                type: blob.type,
                size: blob.size,
                blob: blob
              };

              //上传二进制
              _models.ImageModel.ossupload(image, function (status) {
                if (status == 'complete') {
                  var src = _utils.ImageUtil.getFullsizeImgViaSrc(saveUrl, blob.size, image.width, image.height, true);
                  image.src = src;
                  image.url = src;

                  var data = {};
                  data.image = image;
                  data.html = htmlFunc(image);

                  if ($.isFunction(onUploaded)) onUploaded(data);
                }
              }, function (e) {
                e.okprogressID = progressID;
                if ($.isFunction(onProgress)) onProgress(e);
              });

              img = null;
            } else {
              _utils.ImageUtil.resizeImage(blob, function (_blob) {
                var saveUrl = _utils.ImageUtil.getFullsizeImgViaSrc(url, _blob.size, img.width, img.height, false);

                var image = {
                  url: url,
                  width: img.width,
                  height: img.height,
                  type: _blob.type,
                  size: _blob.size,
                  blob: _blob
                };

                //上传二进制
                _models.ImageModel.ossupload(image, function (status) {
                  if (status == 'complete') {
                    var src = _utils.ImageUtil.getFullsizeImgViaSrc(saveUrl, _blob.size, image.width, image.height, false);

                    image.src = src;
                    image.url = src;

                    var data = {};
                    data.image = image;
                    data.html = htmlFunc(image);
                    if ($.isFunction(onUploaded)) onUploaded(data);
                  }
                }, function (e) {
                  e.okprogressID = progressID;
                  if ($.isFunction(onProgress)) onProgress(e);
                });

                img = null;
              });
            }
          };

          img.src = url;
        },

        /**
         * 接收剪贴板数据，返回处理之后的合法数据
         *
         * @param {event} [event] [黏贴事件]
         * @param {function} [receiveContent] [回调函数,接收参数为处理完成后的可置入合法内容]
         * @param {function} [fileProgress] [如果是文件，此回调函数会给出详细进程progressEvent]
         */

        handleClipdataPaste: function handleClipdataPaste(event, receiveContent, fileProgress) {
          var dt = event.clipboardData;

          var _this = this;

          var dt = event.clipboardData;

          var _this = this;

          //firefox图片处理
          //针对火狐图片黏贴做特殊处理
          //思路：不知道黏贴内容是什么的时候，让所有内容都黏贴到一个span中(黏贴之前将光标放到span中)
          if ($("body").hasClass("firefox")) {

            if (!dt.getData('text/html') && !dt.getData('text/plain')) {
              var doc = event.target.ownerDocument;
              var win = doc.defaultView || doc.parentWindow;

              //如果没有任何内容，可能是黏贴的图片，则不阻止默认事件，让其黏贴到指定的容器中
              var span = doc.createElement('span');
              span.style.opacity = 0;
              span.style.width = 0;
              span.style.height = 0;
              span.style.overflow = "hidden";
              span.style.position = 'absolute';
              var sel = win.getSelection();
              if (sel.rangeCount > 0) {
                var range = sel.getRangeAt(0);
                var rangeBackup = null;

                //将span插入到光标处
                if (range && range.startContainer) {
                  if (!range.collapsed) {
                    range.deleteContents();
                  }

                  rangeBackup = range.cloneRange();

                  range.insertNode(span);
                  var newRange = doc.createRange();
                  newRange.setStart(span, 0);
                  newRange.setEnd(span, 0);
                  newRange.collapse();

                  var selection = win.getSelection();
                  selection.removeAllRanges();
                  selection.addRange(newRange);
                }

                //监听黏贴导致的内容改变
                $(doc.body).one("input", function (e) {
                  var src = $("img", span).attr("src");
                  $(span).remove();

                  //恢复选区
                  if (rangeBackup) {
                    var selection = win.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(rangeBackup);
                  }

                  if (src) {
                    if (/data:/.test(src)) {
                      var blob = null;
                      try {
                        var blob = _utils.ImageUtil.dataURItoBlob(src);
                      } catch (e) {
                        console.log("dataurl->blob错误", e);
                      }

                      if (blob) {
                        _this.handleImageFileInsert(blob, function (data) {
                          var image = data.image;
                          data.images = [image];
                          if ($.isFunction(receiveContent)) receiveContent(data);
                        }, fileProgress);
                      }
                    }
                  }
                });
              }

              return true;
            }
          }

          event.preventDefault();

          if (!dt.types.indexOf) {
            DOMStringList.prototype.indexOf = function (val) {
              var index = -1;
              $(this).each(function (i, v) {
                if (v == val) {
                  index = i;
                  return true;
                }
              });
              return index;
            };
          }

          var content = "";

          //图片处理
          if (dt.types.indexOf && dt.types.indexOf('Files') >= 0 || dt.types.contains && dt.types.contains("Files")) {
            if (dt.items.length > 0) {
              for (var index in dt.items) {
                var item = dt.items[index];

                if (item.getAsFile) {
                  var blob = item.getAsFile();

                  if (blob && blob.type.indexOf('image') >= 0) {
                    _this.handleImageFileInsert(blob, function (data) {
                      var image = data.image;
                      data.images = [image];
                      if ($.isFunction(receiveContent)) receiveContent(data);
                    }, fileProgress);
                  }
                }
              }
            }

            return;
          }

          if (!content) {
            if (dt.types.indexOf && dt.types.indexOf('text/html') >= 0 || dt.types.contains && dt.types.contains("text/html")) {
              content = dt.getData("text/html");
            }
          }

          if (!content) {
            content = dt.getData("text/uri-list");

            if (!content) content = dt.getData("text/plain"); else {
              content = "<a href=\"" + content + "\">" + content + "</a>";
            }
          }

          //拖入的内容来自word或excel等软件
          if (content.toLowerCase().indexOf("schemas-microsoft-com:office:office") >= 0 || content.toLowerCase().indexOf("mso-") >= 0) {
            content = dt.getData("text/plain");
          }

          //找到光标位置插入
          content = $.trim(content);

          var originalContent = content;

          //对外部放入的内容先进行过滤
          content = this.filterContentFromOutside(content);

          if (content) {
            // 替换换行为br
            content = content.replace(/\n/g, "<br />");
            if ($.isFunction(receiveContent)) receiveContent({html: content, images: []});

            return content;
          }
        },

        //去除代码中的空标签(非单闭合标签,即<img /><hr><br>标签不会被删除,会删除<div></div><span></span>)
        removeEmptyTag: function removeEmptyTag(content) {
          if (content) {
            var matched = content.match(/\<([^\>\/]+)\>\<\/([^\>]+)\>/);
            while (matched && matched[1] == matched[2]) {
              content = content.replace(/\<([^\>\/]+)\>\<\/([^\>]+)\>/g, function (match, firstMatch, secondMatch, firstMatchIndex, wholeString) {

                if (firstMatch == secondMatch) {
                  return "";
                } else {
                  return match;
                }
              });

              matched = content.match(/\<([^\>\/]+)\>\<\/([^\>]+)\>/);
            }
          }

          return content;
        },

        //对特殊标签进行处理,格式进行统一,nowrap为不对内容进行pad-block包裹
        processContentAlpha: function processContentAlpha(content, nowrap) {
          if (!content) return "";

          //去除代码中的空格
          content = this.removeSpaceBetweenTags(content);

          //确保内容中没有系统插入的内容再插入，以免重复叠加
          var content = this.ensureSystemTagStripped(content);

          //现将需要保留的转格式，以免误删
          content = content.replace(/\<(li class\=\"[a-z0-9\-\s]{0,}todo\-item(\sdone)?[a-z0-9\-\s]{0,}\")[^>]{0,}\>/ig, '[[$1]]');
          content = content.replace(/\<(h5|h4|h3|h2|h1|blockquote|p|span|u|i|b|strong|em|div|ul|ol|li|br|hr)\b([^>]{0,})\>/ig, '[[$1$2]]');
          content = content.replace(/\<\/(h5|h4|h3|h2|h1|blockquote|p|span|u|i|b|strong|em|div|ul|ol|li)\b[^>]{0,}\>/ig, '[[\/$1]]');

          //将图片或者视频poster转化
          content = content.replace(/\<img[^><]{0,}\ssrc\=["']?([^'"><]+)["']?[^><]{0,}\>/ig, function (match, src, index, str) {
            var width, height;
            var width_match = match.match(/\<img[^><]{0,}data\-width\=["']?([^'"><]+)["']?[^><]{0,}\>/i);
            var height_match = match.match(/\<img[^><]{0,}data\-height\=["']?([^'"><]+)["']?[^><]{0,}\>/i);
            var video_match = match.match(/\<img[^><]{0,}data\-video\=["']?([^'"><]+)["']?[^><]{0,}\>/i);
            var _src = match.match(/\<img[^><]{0,}_src\=["']?([^'"><]+)["']?[^><]{0,}\>/i);

            var finalSrc = _utils.ImageUtil.getCachedCDNSrc(src);

            if (!finalSrc) {
              src = _src ? _src[1] : src ? src : _OKConfig.img_placeholder;
              finalSrc = _utils.ImageUtil.getCachedCDNSrc(src) || src;
            }

            //如果检测到图片无协议，则加上
            if (finalSrc.indexOf("//") == 0 && finalSrc.indexOf('data') == 0) finalSrc = "http:" + finalSrc;

            if (width_match && width_match.length > 1) {
              width = width_match[1];
            }

            if (height_match && height_match.length > 1) {
              height = height_match[1];
            }

            var widthHeight = width && height ? " data-width=\"" + width + "\" data-height=\"" + height + "\"" : "";
            var video = video_match ? " data-video=\"" + video_match[1] + "\"" : "";

            //小图，用cdn原图显示，而不是加了参数裁剪的
            if (width < 128) {
              if (finalSrc.indexOf(_OKConfig.img_cdn_domain) >= 0) {
                finalSrc = _utils.ImageUtil.getFullsizeImgViaSrc(finalSrc);
              }
            }

            if (video) {
              return match.replace(/\<img[^><]{0,}src\=["']?([^'"><]+)["']?[^><]{0,}\>/ig, "<div class=\"img video-img\" >" + "<img src=\"" + finalSrc + "\" " + widthHeight + video + " _src=\"$1\">" + "<a class=\"vmask okmemo-link\" href=\"" + video_match[1] + "\"" + video + "></a>" + "</div>");
            }

            var gif = "";
            if (_src) {
              var checkGifSrc = _src[1];

              if (checkGifSrc) {
                if (_models.ImageModel.getImageData(checkGifSrc)) {

                  if (_models.ImageModel.getImageData(checkGifSrc).type == "image/gif") gif = "gif";
                }
              }
            }

            return match.replace(/\<img[^><]{0,}src\=["']?([^'"><]+)["']?[^><]{0,}\>/ig, "<div class=\"img " + gif + "\">" + "<img src=\"" + finalSrc + "\" " + widthHeight + " _src=\"$1\">" + "<a class=\"dl okmemo-link ok-tooltips\" data-tooltip=\"下载图片\" data-placement=\"top\" href=\"#\"><span class=\"gifmark\">GIF</span><span class=\"ok-icon-font ok-extension-download\"></span></a>" + "</div>");
          });

          //链接替换
          content = content.replace(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}\>([^><]{0,})(?:\<\/a\>)?/ig, function (match, url, title, offset, string) {
            if (match.match(/okmemo\-link/)) {
              return match;
            } else if (match.match(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}rel\=["']?image["']?[^><]{0,}\>([^><]{0,})(?:\<\/a\>)?/)) {
              //如果是图片链接
              return match.replace(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}rel\=["']?image["']?[^><]{0,}\>([^><]{0,})(?:\<\/a\>)?/ig, "<div class=\"img\">" + "<img class=\"open type-image\" src=\"$1\" _src=\"$1\">" + "<a class=\"dl okmemo-link\" href=\"#\"><span class=\"ok-extension-download ok-icon-font\"></span></a>" + "</div>");
            } else {
              if (url == "#") return match;

              return match.replace(/\<a[^><]{0,}href\=["']?([^'"><]+)["']?[^><]{0,}\>([^><]{0,})(?:\<\/a\>)?/ig, "<a class=\"open\" href=\"$1\" rel=\"link\">$2</a>");
            }
          });

          var loc_origin = "http://m.okay.do";

          //若是网址的话则变成链接
          content = content.replace(this.LINK_REGEXP, function (match, whole, scheme, rou, offset, string) {
            if (match && match.indexOf(loc_origin) < 0) {

              //只有是纯文本才给上链接，已经被标签包住的链接不再给其加上a标签
              if (string[offset - 1] == ">" || string[offset + match.length] == "<") {
                if (string.substr(offset + match.length, 4).indexOf('</a>') >= 0) return match;
              }

              //如果链接前面是本站附加的地址，也直接返回
              if (string.substr(offset - 2 - loc_origin.length, loc_origin.length) == loc_origin) return match;

              //如果链接是被转义过的链接，也直接返回
              if (string.substr(offset, 2).toLowerCase() == "2f" && string.substr(offset - 1, 1) == "%") return match;

              //如果是href，也直接返回
              if (string.substr(offset - 7, 7).indexOf("href") >= 0) return match;

              //如果是作为图片的src或者链接的href等属性页直接返回
              if ((content[offset - 1] == '"' || content[offset - 1] == "'") && content[offset - 2] == "=") return match;

              //如果链接是图片链接
              if (match.match(/[^\/]+\.(?:png|jpg|jpeg|svg|bmp|gif|tiff)\b/i)) {
                return "<div class=\"img\"><img src=\"" + match + "\" _src=\"" + match + "\" style=\"max-width:100%;\" class=\"fromtxt\"><a class=\"dl\" href=\"#\"><span class=\"ok-download icon-font\"></span></a></div>";
              }

              var href = match;
              //没有协议
              if (!scheme) {
                if (match.indexOf("//") != 0) {
                  href = "http://" + match;
                } else {
                  href = _models.AppModel.Globals.protocol + ":" + match;
                }
              }

              return "<a class=\"open encoded-link\" href=\"" + href + "\">" + match + "</a>";
            }
            return match;
          });

          //将[[换<
          content = content.replace(/\[\[/ig, '<');
          content = content.replace(/\]\]/ig, '>');
          content = content.replace(/\/\]\]/ig, '/>');

          return content;
        },

        /**
         * 黏贴html到可编辑区域
         *
         * @param  string content  [需要被黏贴进去的内容]
         * @param  dom    editable [被黏贴到的可编辑区域]
         * @param  function insertFunc [插入内容的函数，接收content，会将content直接插入到光标位置]
         */
        pasteHtmlInEditable: function pasteHtmlInEditable(content, editable, insertFunc) {
          var _this = this;
          var doc = editable.ownerDocument;
          var sel = doc.getSelection();

          if (sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);

            //删除选区的内容
            if (!range.collapsed) {
              range.deleteContents();
            }

            //如果光标处于列表中，则进行特殊处理，否则直接插入
            var $li = $(range.startContainer).closest('li');

            if ($li.length > 0) {

              //将内容分解插入其中
              var wrapper = document.createElement("div");
              wrapper.innerHTML = content;

              //如果全部是内联元素，则直接插入即可
              var isAllInline = true;

              $(wrapper.childNodes).each(function () {

                if (this.tagName && _utils.DomUtil.isBlockTag(this.tagName)) {
                  isAllInline = false;
                  return false;
                }
              });

              //全是行内元素，则直接插入
              if (isAllInline) {
                if ($.isFunction(insertFunc)) insertFunc(content);
                return true;
              }

              //内容中有列表元素,则黏贴进来的内容全部转换为li
              var curLi = $li.get(0);
              var curList = $li.closest("ul").length > 0 ? $li.closest("ul").get(0) : $li.closest("ol").get(0);

              var liText = curLi.innerText || curLi.textContent;

              //换行
              if (liText && liText.match(/\n/) && curLi.childNodes.length == 1) {
                var lastEl = curLi;
                curLi.innerHTML = "";
              } else {
                //先将li拆开
                var newLi = _utils.DomUtil.splitNode(curLi, range.startContainer, range.startOffset);
                var lastEl = newLi;
              }

              $(wrapper.childNodes).each(function () {

                //如果黏贴的内容中是列表(li)，则覆盖，
                if (this.tagName == 'UL' || this.tagName == 'OL' || $("ul,ol", this).length > 0) {
                  var thisList = $("ul,ol", this).length > 0 ? $("ul,ol", this).get(0) : this;

                  //判断是否是相同类型list
                  if (curList.tagName != thisList.tagName) {

                    //list类型不同，则将curList拆开，然后将thisList放在其中
                    var newList = _utils.DomUtil.splitNode(curList, range.startContainer, range.startOffset);

                    if (newList) {
                      newList.parentNode.insertBefore(thisList, newList.nextSibling);
                      lastEl = newList;
                    }
                  } else {
                    //将其中的内容全部提出来
                    $(thisList.childNodes).each(function () {

                      if (this.tagName == "LI") {
                        if (this.lastChild && this.lastChild.tagName == "BR") {
                          $(this.lastChild).remove();
                        }

                        lastEl.parentNode.insertBefore(this, lastEl.nextSibling);
                        lastEl = this;
                      } else {
                        //黏贴到当前的li节点是空节点
                        if (curLi.childNodes.length == 0) {
                          curLi.appendChild(this);
                          li = curLi;
                        } else {
                          var li = document.createElement("li");
                          li.setAttribute("class", curLi.getAttribute("class"));
                          li.appendChild(this);

                          //放到最后一个li的后面
                          lastEl.parentNode.insertBefore(li, lastEl.nextSibling);
                        }

                        lastEl = li;
                      }
                    });

                    $(thisList).remove();
                  }

                  //仍有子节点
                  if (this.childNodes.length > 0) {
                    //黏贴到当前的li节点是空节点
                    if (curLi.childNodes.length == 0) {
                      curLi.appendChild(this);
                      li = curLi;
                    } else {
                      var li = document.createElement("li");
                      li.setAttribute("class", curLi.getAttribute("class"));
                      li.appendChild(this);

                      //放到最后一个li的后面
                      lastEl.parentNode.insertBefore(li, lastEl.nextSibling);
                    }

                    lastEl = li;
                  }
                } else {
                  //黏贴到当前的li节点是空节点
                  if (curLi.childNodes.length == 0) {
                    curLi.appendChild(this);
                    li = curLi;
                  } else {
                    var li = document.createElement("li");
                    li.setAttribute("class", curLi.getAttribute("class"));
                    li.appendChild(this);

                    //放到最后一个li的后面
                    lastEl.parentNode.insertBefore(li, lastEl.nextSibling);
                  }

                  lastEl = li;
                }
              });

              //将空列表元素删除
              $("li", editable).each(function () {
                if (this.childNodes.length == 0 || this.childNodes.length == 1 && this.childNodes[0].nodeValue == "") {
                  $(this).remove();
                }
              });
            } else {

              //直接插入内容中
              if ($.isFunction(insertFunc)) insertFunc(content);
            }
          }
        }

      };

      /**
       * //module content process end
       */
      exports['default'] = ContentUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(163), __webpack_require__(161)))

    /***/
  },
  /* 192 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var DomUtil = {

        //判断某个dom节点是否是文本换行
        isTextBlock: function isTextBlock(node) {
          if (!node) return false;
          if ($(node).is('br')) return false;
          return !this.isBlock(node) && ($(node).next().is('br') || $(node).find('br,div').length > 0 || $(node).is('img') || this.isBlock(node.nextSibling));
        },

        isBlockTag: function isBlockTag(tag) {
          var cStyle,
          t = document.createElement(tag),
          gcs = ("getComputedStyle" in window);

          document.body.appendChild(t);
          cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
          document.body.removeChild(t);

          return cStyle == "block" || cStyle == "list-item";
        },

        //判断某个dom节点是否是block元素
        isBlock: function isBlock(node) {
          if (!node || !node.tagName) return false;
          var display = $(node).css('display');
          return display == 'block' || display == 'list-item';
        },

        //判断某个节点是否包含有block(或textBlock)
        containsBlock: function containsBlock(node) {
          var containsBlock = false;
          var _this = this;
          if (node) {
            $(node.childNodes).each(function () {
              if (_this.isBlock(this)) {
                containsBlock = true;
                return false;
              }
            });
          }

          return containsBlock;
        },

        //判断某个节点是否包含有block(或textBlock)
        textBlockInNode: function textBlockInNode(node) {
          var blocks = [];
          var _this = this;
          if (node) {
            $(node.childNodes).each(function () {
              if (_this.isTextBlock(this)) {
                blocks.push(this);
              }
            });
          }

          return blocks;
        },

        //在指定位置分割list，并在指定位置放入新的节点如果第三个参数给定的话
        splitList: function splitList(listNode, breakNode, newList) {
          if (listNode) {

            var breakPoint = listNode.childNodes.length;

            var firstList = document.createElement(listNode.tagName);
            var secondList = null;

            listNode.parentNode.insertBefore(firstList, listNode);
            if (newList) listNode.parentNode.insertBefore(newList, listNode);

            $(listNode.childNodes).each(function (i, node) {
              if (node != breakNode && !$.contains(node, breakNode)) {
                if (i < breakPoint) {
                  firstList.appendChild(node);
                } else {
                  if (!secondList) {
                    secondList = document.createElement(listNode.tagName);
                    listNode.parentNode.insertBefore(secondList, listNode);
                  }
                  secondList.appendChild(node);
                }
              } else {
                breakPoint = i;
                if (!secondList) {
                  secondList = document.createElement(listNode.tagName);
                  listNode.parentNode.insertBefore(secondList, listNode);
                }
                secondList.appendChild(node);
              }
            });

            if (firstList && firstList.childNodes.length == 0) {
              $(firstList).remove();
            }

            if (secondList && secondList.childNodes.length == 0) {
              $(secondList).remove();
            }

            $(listNode).remove();

            return [firstList, secondList, newList];
          }
        },

        //将节点最外层去除,即将子节点全部拿出来
        //例子: <div>dsddsdsd<span>dsd</span></div> -> dsddsdsd<span>dsd</span>
        unwrapNode: function unwrapNode(node) {
          if (!node) return;

          if (node.childNodes.length > 0) {
            $(node.childNodes).each(function () {
              node.parentNode.insertBefore(this, node);
            });

            $(node).remove();
          }
        },

        splitNode: function splitNode(node, breakNode, breakOffset) {
          var parent = node.parentNode;
          var parentOffset = this.getNodeIndex(parent, node);

          var doc = breakNode.ownerDocument;
          var leftRange = doc.createRange();
          leftRange.setStart(parent, parentOffset);
          leftRange.setEnd(breakNode, breakOffset);

          var left = leftRange.extractContents();
          var newLi = left.childNodes[0];
          parent.insertBefore(left, node);

          return newLi;
        },

        getNodeIndex: function getNodeIndex(parent, node) {
          var index = parent.childNodes.length;
          while (index--) {
            if (node === parent.childNodes[index]) {
              break;
            }
          }
          return index;
        }

      };
      exports['default'] = DomUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 193 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _OKConfig) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var EnvUtil = {

        isFlashAvailable: function isFlashAvailable() {
          var hasFlash = false;
          try {
            var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (fo) {
              hasFlash = true;
            }
          } catch (e) {
            if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] != undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
              hasFlash = true;
            }
          }
          return hasFlash;
        },

        //检测环境
        initENV: function initENV() {
          var _this = this;

          (function (window) {
            {
              var unknown = '-';

              // screen
              var screenSize = '';
              if (screen.width) {
                var width = screen.width ? screen.width : '',
                height = screen.height ? screen.height : '';
                screenSize += '' + width + " x " + height;
              }

              //browser
              var nVer = navigator.appVersion;
              var nAgt = navigator.userAgent;
              var browser = navigator.appName;
              var version = '' + parseFloat(navigator.appVersion);
              var majorVersion = parseInt(navigator.appVersion, 10);
              var nameOffset, verOffset, ix;

              // Opera
              if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                  version = nAgt.substring(verOffset + 8);
                }
              }
              // MSIE
              else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
              }
              // Chrome
              else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
              }
              // Safari
              else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                  version = nAgt.substring(verOffset + 8);
                }
              }
              // Firefox
              else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
              }
              // MSIE 11+
              else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
              }
              // Other browsers
              else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                  browser = navigator.appName;
                }
              }
              // trim the version string
              if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
              if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
              if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

              majorVersion = parseInt('' + version, 10);
              if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
              }

              // mobile version
              var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

              // cookie
              var cookieEnabled = navigator.cookieEnabled ? true : false;

              if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = document.cookie.indexOf('testcookie') != -1 ? true : false;
              }

              // system
              var os = unknown;
              var clientStrings = [{s: 'Windows 3.11', r: /Win16/}, {
                s: 'Windows 95',
                r: /(Windows 95|Win95|Windows_95)/
              }, {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/}, {
                s: 'Windows 98',
                r: /(Windows 98|Win98)/
              }, {s: 'Windows CE', r: /Windows CE/}, {
                s: 'Windows 2000',
                r: /(Windows NT 5.0|Windows 2000)/
              }, {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/}, {
                s: 'Windows Server 2003',
                r: /Windows NT 5.2/
              }, {s: 'Windows Vista', r: /Windows NT 6.0/}, {
                s: 'Windows 7',
                r: /(Windows 7|Windows NT 6.1)/
              }, {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/}, {
                s: 'Windows 8',
                r: /(Windows 8|Windows NT 6.2)/
              }, {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/}, {
                s: 'Windows ME',
                r: /Windows ME/
              }, {s: 'Android', r: /Android/}, {s: 'Open BSD', r: /OpenBSD/}, {s: 'Sun OS', r: /SunOS/}, {
                s: 'Linux',
                r: /(Linux|X11)/
              }, {s: 'iOS', r: /(iPhone|iPad|iPod)/}, {s: 'Mac OS X', r: /Mac OS X/}, {
                s: 'Mac OS',
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
              }, {s: 'QNX', r: /QNX/}, {s: 'UNIX', r: /UNIX/}, {s: 'BeOS', r: /BeOS/}, {
                s: 'OS/2',
                r: /OS\/2/
              }, {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];

              for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                  os = cs.s;
                  break;
                }
              }

              var osVersion = unknown;

              if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
              }

              switch (os) {
                case 'Mac OS X':
                  osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                  break;

                case 'Android':
                  osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                  break;

                case 'iOS':
                  osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                  osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                  break;
              }

              // flash (you'll need to include swfobject)
              /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
              var flashVersion = 'no check';
              if (typeof swfobject != 'undefined') {
                var fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                  flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                } else {
                  flashVersion = unknown;
                }
              }
            }

            window._ENV = {
              screen: screenSize,
              browser: browser,
              browserVersion: version,
              mobile: mobile,
              os: os,
              osVersion: osVersion,
              cookies: cookieEnabled,
              flashVersion: flashVersion,
              flashAvailable: _this.isFlashAvailable(),
              device: os + " " + osVersion + " " + browser
            };
          })(window);

          var $body = $("body");

          //支持触摸设备，需要扩大可点击范围
          if (("ontouchstart" in window || window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && window._ENV.mobile) {
            //enable :active selector
            document.addEventListener("touchstart", function () {
            }, false);
            $body.addClass("touch-device");
          }

          if (document.createElement("a").download != "") $body.addClass("no-attr-dl"); else $body.addClass("attr-dl");

          var browserName = this.getBrowserName();

          /*以类的方式标识用户的浏览环境，如操作系统，移动设备操作系统*/
          if (window._ENV) {
            var os_class = window._ENV.os.replace(/[\s|\_]/g, "-").toLowerCase();
            var browser_class = window._ENV.browser.replace(/[\s|\_]/g, "-").toLowerCase();
            if (browserName) window.browser = browserName;
            $body.addClass(os_class + " " + (browserName || browser_class));
          }

          if (window.innerWidth < 400) {
            $body.addClass("in-sidebar");
          }

          //检测ipad设备
          if (navigator.userAgent.match(/iPad/i) != null) {
            $body.addClass("ipad");
          }

          if (window.top == self) {
            $body.addClass("topwin");
          }

          if ('WebkitAppearance' in document.documentElement.style) {
            $body.addClass("webkit");
          }

          if (_OKConfig.enable_custom_css_scrollbar) {
            $body.addClass("custom-css-scrollbar hover");
          }

          window.isTransformSupported = (function () {
            var test = document.createElement("div");
            return test.style.transform !== undefined || test.style.webkitTransform !== undefined || test.style.msTransform !== undefined || test.style.oTransform !== undefined || test.style.MozTransform !== undefined;
            return false;
          })();
        },

        //检测浏览器
        getBrowserName: function getBrowserName() {
          var browser = null;

          if (typeof window.chrome != "undefined" && navigator.userAgent.toLowerCase().indexOf("qqbrowser") >= 0) {
            return "qq";
          } else if (typeof window.safari != "undefined") {
            return "safari";
          }
          if (typeof window.sogou != "undefined" || window.external && window.external.Sogou404) {
            return "sogou";
          }
          if (typeof InstallTrigger != "undefined" || typeof window.scrollMaxX != "undefined") {
            return "firefox";
          }
          if (navigator.userAgent.toLowerCase().indexOf("opera") >= 0) {
            return "opera";
          } else if (browser == "chrome" && window.external) {
            var keys = Object.keys(window.external);
            if (keys.length > 0) {
              for (var i = 0, len = keys.length; i < len; i++) {
                if (keys[i].toLowerCase().indexOf("liebao") >= 0) {
                  return browser = "liebao";
                }
              }
            }
          } else if (this.is360se()) {
            return "360se";
          }

          //通过特性检测得到浏览器
          if (typeof window.chrome != "undefined" || navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
            browser = "chrome";
          }

          //360极速浏览器
          if (browser == "chrome" && window.external && Object.keys(window.external).length > 2) {
            browser = "360ee";
          }

          return browser;
        },

        is360se: function is360se() {
          if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            if (!!navigator.mimeTypes['application/x-shockwave-flash']) {
              var desc = navigator.mimeTypes['application/x-shockwave-flash'].description.toLowerCase();
              if (desc.indexOf('adobe') > -1) {
                return true;
              }
            }
          }
          return false;
        }
      };

      exports['default'] = EnvUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(163)))

    /***/
  },
  /* 194 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $, _O) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _md5 = __webpack_require__(173);

      var _md52 = _interopRequireDefault(_md5);

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var ImageUtil = {
        /**
         * //module imagedata
         */

        //根据图源得到侧栏的缩略图片
        //return _OKConfig.img_origin+"/"+md5(src) + "@0e_"+width+"w_"+height+"h";
        getSidebarImgViaSrcAlpha: function getSidebarImgViaSrcAlpha(src, size) {
          //得到屏幕像素比例
          var radio = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;

          var width = _OKConfig.sidebar_img_width * radio;
          var height = _OKConfig.sidebar_img_height * radio;

          //如果已经是OK记的侧栏片则直接返回
          if (src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
            if (src.indexOf(width) > 0) {
              return src;
            } else {
              var parts = src.split('@');
              if (parts && parts[0]) return parts[0] + "@0e_" + width + "w";
            }
          }

          return _OKConfig.img_origin + "/" + this.getCDNImageName(src, size) + "@0e_" + width + "w";
        },

        getCDNImageNameAlpha: function getCDNImageNameAlpha(src, size) {
          if (Date.now() > 1449242085158) {
            //如果是改版之后的图片加载
            if (!isNaN(size)) {
              return (0, _md52['default'])(src + "_" + size);
            }

            //得到imagesData中对应的图片信息
            var imageData = _models.ImageModel.getImageData(src);
            if (imageData && imageData.size) {
              return (0, _md52['default'])(src + "_" + imageData.size);
            }
          }

          return (0, _md52['default'])(src);
        },

        getSidebarImgViaSrc: function getSidebarImgViaSrc(src, size, imgWidth, imgHeight, isGif) {
          //得到屏幕像素比例
          var radio = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;

          var width = _OKConfig.sidebar_img_width * radio;
          var height = _OKConfig.sidebar_img_height * radio;

          //如果已经是OK记的侧栏片则直接返回
          if (src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
            if (src.indexOf(width) > 0 || width > imgWidth) {
              return src;
            } else {
              var parts = src.split('@');
              if (parts && parts[0]) return parts[0] + "@0e_" + width + "w";
            }
          }

          //如果原图笔记小则直接输出
          if (width > imgWidth) {
            return _OKConfig.img_origin + "/" + this.getCDNImageName(src, size, imgWidth, imgHeight, isGif);
          } else {
            return _OKConfig.img_origin + "/" + this.getCDNImageName(src, size, imgWidth, imgHeight, isGif) + "@0e_" + width + "w";
          }
        },

        /**
         * 对于src为cdn地址的给上合适的尺寸参数，返回裁剪后的图片地址
         *
         * @param  string cdnsrc [CDN图片src]
         * @return string        [裁剪后的图片地址]
         */
        resizeCDNImageSrc: function resizeCDNImageSrc(cdnsrc) {

          var radio = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;

          var width = parseInt(_OKConfig.sidebar_img_width * radio, 10);

          var originalSrc = cdnsrc.replace(/\@.+/, '');

          var sizeMatch = originalSrc.match(/\_W(\d+)\_H(\d+)\_G([01])/);

          if (sizeMatch && sizeMatch[1] <= width && sizeMatch[3] != 1) {
            return originalSrc;
          }

          return originalSrc + "@0e_" + width + "w";
        },

        getCDNImageName: function getCDNImageName(src, size, width, height, isGif) {

          return (0, _md52['default'])(src + "_" + size) + "_W" + width + "_H" + height + "_G" + (isGif ? 1 : 0);
        },

        //根据图源得到全图
        getFullsizeImgViaSrc: function getFullsizeImgViaSrc(src, size, width, height, isGif) {
          //如果已经是OK记的侧栏片则直接返回无参数的原图
          if (src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
            return src.replace(/\@.+/, '');
          }

          return _OKConfig.img_origin + "/" + this.getCDNImageName(src, size, width, height, isGif);
        },

        getBlobViaAjax: function getBlobViaAjax(url, callback) {
          var _this = this;

          var xhr = new XMLHttpRequest();
          xhr.open("get", url, true);
          xhr.responseType = "blob";

          xhr.onload = function () {
            if (this.status == 200) {
              var blob = this.response;

              // if(blob){
              //     callback(blob,url);
              // }
              // return false;

              if (blob && blob.type) {
                //是gif则直接上传,其他进行选择处理上传
                if (blob.type == 'image/gif') {
                  callback(blob, url);
                } else {
                  //判断图片大小尺寸
                  _this.resizeImage(blob, function (_blob) {
                    window.test = _blob;
                    callback(_blob, url);
                  });
                }
              }
            }
          };

          xhr.send(null);
        },

        resizeImage: (function () {
          //在body上创建 canvas 结构
          function createDoc() {
            var element = $("body");
            element.append('<canvas id="canvas_compress_pictures" style="display: none;"></canvas>');
          }

          //渲染并展示图片
          function render(src, MaximgW, mimetype, callback) {
            //创建canvas dom结构
            createDoc();

            var image = new Image();
            image.onload = function () {
              var canvas = document.getElementById('canvas_compress_pictures');

              var imageWidth, imageHeight;

              //按比例缩放图片
              imageWidth = MaximgW || image.width;
              imageWidth = Math.min(_OKConfig.max_upload_width, imageWidth); //不超过1200像素
              imageWidth = Math.round(imageWidth);
              imageHeight = image.height * (imageWidth / image.width);
              imageHeight = Math.round(imageHeight);

              //设置canvas尺寸并绘制图像
              canvas.width = imageWidth;
              canvas.height = imageHeight;
              var con = canvas.getContext('2d');
              con.clearRect(0, 0, canvas.width, canvas.height);
              con.drawImage(image, 0, 0, imageWidth, imageHeight);

              //利用Uint8Array创建Blob对象
              var type = mimetype && mimetype != 'image/webp' ? mimetype : 'image/jpeg';

              //将canvas元素中的图像转变为DataURL base64 toDataURL(类型,0到1之间图片质量)
              var dataurl = canvas.toDataURL(type, 0.8);

              //抽取DataURL中的数据部分，从Base64格式转换为二进制格式
              var bin = atob(dataurl.split(',')[1]);
              //创建空的Uint8Array
              var buffer = new Uint8Array(bin.length);
              //将图像数据逐字节放入Uint8Array中
              for (var i = 0; i < bin.length; i++) {
                buffer[i] = bin.charCodeAt(i);
              }

              var blob = new Blob([buffer.buffer], {type: type});

              if ($.isFunction(callback)) callback(blob, imageWidth, imageHeight);

              //移除canvas
              if (canvas.remove) canvas.remove();
            };

            image.onerror = callback;
            image.src = src;
          };

          var func = function func(urlOrBlob, width, callback) {
            if (urlOrBlob) {
              if ($.isFunction(width)) {
                callback = width;
                width = null;
              }

              if (typeof urlOrBlob == "object") {
                //Blob 对象
                var src = window.URL.createObjectURL(urlOrBlob);
                return render(src, width, urlOrBlob.type, function (blob, imageWidth, imageHeight) {
                  URL.revokeObjectURL(src);
                  callback(blob, imageWidth, imageHeight);
                });
                // return render(src,width,urlOrBlob.type,callback);
              } else {
                return render(urlOrBlob, width, null, callback);
              }
            }
          };

          return func;
        })(),

        getCachedCDNSrc: function getCachedCDNSrc(src) {
          if (src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
            return src;
          }
          return _models.ImageModel.Globals._imageSrcCache[src] ? _models.ImageModel.Globals._imageSrcCache[src] : "";
        },

        //下载图片
        downloadImages: function downloadImages(urls) {
          var _this = this;
          var item, alink, url;
          if ($("body").hasClass("attr-dl")) {
            for (var i = 0; i < urls.length; i++) {
              url = urls[i];
              if (url) {
                var clickEvent = document.createEvent("MouseEvent");
                clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                alink = document.createElement("a");
                alink.href = url;
                if (url.match(/\.(png|gif|webp|bmp|jpg|jpeg)\b/)) {
                  alink.download = url;
                } else {
                  alink.download = url + ".png";
                }

                alink.dispatchEvent(clickEvent);
              }
            }
          } else if ($(window.parent.document.body).hasClass("firefox") && _utils.ExtUtil.extensionInstalled()) {
            var data = null;
            $(urls).each(function () {
              data = {
                url: this,
                prefix: _this.getCurrentTime()
              };

              var message = {
                type: "dl_img",
                data: data
              };

              if (window.postMessage) window.top.postMessage(JSON.stringify(message), "*");
            });
          } else if ($("body").hasClass("no-attr-dl")) {
            //浏览器不支持a标签的download属性
            var tmp_win = window.open("about:blank");

            var tmp_win_html = "";
            //将图片全部放入临时的frame中供用户下载
            $(urls).each(function () {
              tmp_win_html += "<div style=\"float:left;margin:5px;border:1px solid white;width:200px;height:200px;overflow:hidden;\" onmouseover=\"\"><img src=\"" + this + "\" ></div>";
            });

            tmp_win.document.body.innerHTML = tmp_win_html;
          }
        },

        //单个图片发送
        sendBlobImage: function sendBlobImage(data, url, callback) {
          var f = new FormData();
          f.append("images", data);
          f.append("url", url);
          $.ajax({
            url: AppModel.getAPIRoot() + '/images/upload',
            type: 'POST',
            data: f,
            processData: false,
            contentType: false,
            success: callback
          });
        },

        testImg: function testImg(src, callback) {
          var img = new Image();
          img.onload = function () {
            if (callback) callback(src);
            img = null;
          };

          img.onerror = function () {
            if (callback) callback(null);
            img = null;
          };

          img.src = src;
        },

        /**
         * 判断链接是否为图片
         * @param url
         * @param callback
         * @param context
         */
        isImageType: function isImageType(url, callback, context) {
          var _this = this;

          _models.Request.head(url, function (type) {
            if (type && type.indexOf('image') > -1) {

              _this.isImageUrl(url, function (url, img) {
                if (img) {
                  callback && callback.call(context, url, img);
                }
              });
            } else {
              callback && callback.call(context, url, false);
            }
          });
        },

        //检测链接是否为图片链接
        isImageUrl: function isImageUrl(url, callback, context) {
          if (!!!url) return false;
          var testImg = document.getElementById("testImg");
          var img = document.createElement("img");

          if (testImg) {
            testImg.contentWindow.document.body.appendChild(img);
          } else {
            var fr = document.createElement("iframe");
            fr.id = "testImg";
            fr.width = 0;
            fr.height = 0;
            fr.style.margin = 0;
            fr.style.padding = 0;
            fr.style.visibility = "hidden";
            fr.style.border = "none";
            fr.style.outline = "none";
            fr.style.position = "absolute";
            fr.style.bottom = 0;
            fr.style.left = 0;
            fr.style.height = "0px";
            fr.style.width = "0px";
            document.body.appendChild(fr);
            // fr.contentWindow.document.body.innerHTML += "<img src=\""+url+"\">";
            fr.contentWindow.document.body.appendChild(img);
          }

          try {
            // var img = new Image();
            // context = context ? context : img;
            //如果链接明显是指向的图片
            //svg格式的图片按照容器的大小来展示
            if ($.isFunction(callback)) {
              img.onerror = function () {
                img.onerror = null;
                callback.call(context, url, false);
              };
              ;
              img.onload = function () {
                img.onload = null;
                callback.call(context, url, img);
              };
            }
            img.src = url;
          } catch (e) {
            _O.log(e.message);
          }
        },

        lazyloadImgs: function lazyloadImgs($imgs) {
          var _this = this;

          //加载未加载的图片
          $imgs.each(function (i, img) {
            if (!!!this.okloaded || this.src.indexOf("data") == 0 || this.naturalWidth <= 1) {
              //计算出图片是否进入展示区域，如果进入则进行加载
              if (_this.elementInViewport(img)) {

                if (this.src.indexOf("data") == -1 && _this.isSmallImage(img)) {
                  img.okloaded = true;
                  return true;
                }

                var originalSrc = $(img).attr("_src");

                if (originalSrc) {
                  var $note = $(img).closest(".note");

                  //测试加载cdn图片
                  var sidebarSrc = _this.getSidebarImgViaSrc(originalSrc);

                  var testImg = new Image();

                  //测试cdn图片加载成功,则进行加载
                  $(testImg).one("load", function () {
                    img.okloaded = true;

                    $(img).one("load", function () {
                      $note.trigger("imgloaded", img);

                      // var tmp_imgs = $.grep($imgs,function(img){
                      //     return !!!img.okloaded || img.src.indexOf("data") == 0 || img.naturalWidth <= 1;
                      // });
                      // $imgs = $(tmp_imgs);

                      //记录下来图片对应的cdn网址
                      if (this.src == sidebarSrc) _models.ImageModel.Globals._imageSrcCache[$(img).attr("_src")] = sidebarSrc;
                    });

                    img.src = testImg.src;
                    testImg = null;
                  }).one("error", function () {
                    //cdn图片加载失败,暂时先使用原图
                    img.okloaded = true;

                    // var tmp_imgs = $.grep($imgs,function(img){
                    //     return !!!img.okloaded || img.src.indexOf("data") == 0 || img.naturalWidth <= 1;
                    // });

                    // $imgs = $(tmp_imgs);

                    var tmpsrc = $(img).attr("_src");

                    $(img).one("load", function () {
                      $note.trigger("imgloaded", img);

                      //而且加载cdn图片不成功,找不到原图数据,则trigger imgerror事件，让贴纸重新上传图片
                      var imageData = _models.ImageModel.getImageData($(img).attr("_src"));

                      if (img.src == $(img).attr("_src") && (!imageData || !imageData.size)) {
                        if (_models.ImageModel.Globals.imagesNotSaved.indexOf(img.src) < 0) {
                          $note.trigger("imgerror", img);
                          _models.ImageModel.Globals.imagesNotSaved.push(img.src);
                        }
                      }

                      $(this).closest(".img").removeClass("load-failed");
                    });

                    if (tmpsrc.indexOf("//") == 0) tmpsrc = "http:" + tmpsrc;

                    img.setAttribute("src", tmpsrc);
                    //记录下来图片对应的cdn网址
                    _models.ImageModel.Globals._imageSrcCache[tmpsrc] = tmpsrc;
                    testImg = null;
                  });

                  testImg.setAttribute("src", sidebarSrc);
                }
              }
            }
          });
        },

        elementInViewport: function elementInViewport(elem) {
          var $elem = $(elem);
          var $window = $(window);

          var docViewTop = $window.scrollTop();
          var docViewBottom = docViewTop + $window.height();

          var elemTop = $elem.offset().top;
          var elemBottom = elemTop + $elem.height();

          // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
          return elemTop <= docViewBottom && elemTop >= docViewTop;
        },

        //from http://stackoverflow.com/questions/12168909/blob-from-dataurl
        dataURItoBlob: function dataURItoBlob(dataURI) {
          // convert base64 to raw binary data held in a string
          // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
          var byteString = atob(dataURI.split(',')[1]);

          // separate out the mime component
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

          // write the bytes of the string to an ArrayBuffer
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);
          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          // write the ArrayBuffer to a blob, and you're done
          var blob = new Blob([ab], {type: mimeString});
          return blob;
        },

        isSmallImage: function isSmallImage(img) {
          var imgWidth = img.naturalWidth || img.width;
          var imgHeight = img.naturalHeight || img.height;
          return imgWidth > 5 && imgWidth < 128 && imgHeight > 5 && imgHeight < 128;
        },

        placeImgInNote: function placeImgInNote(img, editable) {
          if (!img) return false;
          var $container = $(img).closest(".img");

          if ($container.length > 0) {
            //还原容器样式
            $container.get(0).style.maxHeight = "";

            var imgWidth = img.naturalWidth || img.offsetWidth;
            var imgHeight = img.naturalHeight || img.offsetHeight;

            if (imgWidth >= _OKConfig.sidebar_img_width * 0.7) {
              //图片宽度大于侧栏最大图片宽度(290)的.7倍
              var resizedWidth = _OKConfig.sidebar_img_width;
              var resizedHeight = imgHeight * (_OKConfig.sidebar_img_width / imgWidth);

              img.style.width = "100%";
            } else if (imgWidth >= _OKConfig.sidebar_img_width * 0.3) {
              //图片宽度小于侧栏最大图片宽度(290)的.7倍大于.3倍,居中处理
              //图片容器的最大高度变化
              $container.get(0).style.maxHeight = imgWidth + "px";
            } else {
              //过于小的图片,不用容器包裹,居左对其
              if ($container.hasClass("video-img")) {
                //删除下载按钮
                $container.find(".dl").remove();

                //将图片从.img div中移出来
                $container.replaceWith(img);
              }
            }
          }
        }

        /**
         * //module imagedata
         */
      };
      exports['default'] = ImageUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 195 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var NotificationUtil = {
        /**
         * //module notification
         */
        popupDialog: function popupDialog(config) {
          config.active = true;
          $(window).trigger("dialog", config);
        },

        closeDialog: function closeDialog() {
          $(window).trigger("closedialog");
        },

        //消息接口,冒泡式
        //默认type: success
        //默认自动关闭
        showMessage: function showMessage(content, type, autoClose) {
          $(window).trigger("show_message", {
            types: type || "success", //type :success  info   warning/error   info
            message: content,
            show: true,
            autoClose: autoClose === true ? true : autoClose === false ? false : true
          });
        },

        hideMessage: function hideMessage() {
          $(window).trigger("show_message", {show: false});
        },

        //提醒用户完善资料
        notifyProfileComplete: function notifyProfileComplete() {
          this.showSysMessage({
            id: Date.now() + parseInt(Math.random() * 10),
            types: "profile-complete",
            icon: "ok-extension-qqmail",
            content: "亲爱的用户，为了您的账号安全请及时完善邮箱资料",
            btnValue: "前往完善",
            onConfirm: function onConfirm(msgComponent) {
              //打开完善资料页面(注册页面)
              _utils.LoginUtil.login(false);

              //监听资料完善情况，如果完善则关闭消息组件
              msgComponent.dismiss();
            }
          });
        },

        showSysMessage: function showSysMessage(message) {
          if (!message) return;
          message.isNew = true;
          message.id = message.id || Date.now() + parseInt(Math.random() * 10);
          message.btnValue = message.btnValue || "我知道了";
          $(window).trigger("sys_message", message);
        },

        hideSysMessage: function hideSysMessage() {
          $(window).trigger("sys_message", {show: false});
        }
        /**
         * //module notification
         */
      };

      exports["default"] = NotificationUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 196 */
  /***/ function (module, exports) {

    // 分享管理插件
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ShareUtil = function ShareUtil(info) {
      info = info || {};
      this.title = info.title || document.title || "";
      this.content = (info.content ? info.content.replace(/(<([^>]+)>)/ig, "") : "") || "";
      this.share_url = info.share_url || location.href;
      this.img_url = info.img_url || "";
      this.extra = info.extra || "";
      this.twitter_name = "funpin";

      this.content += " :分享自方片收集";
    };

    ShareUtil.prototype = {
      setShareInfo: function setShareInfo(info) {
        info = info || {};
        this.title = info.title || document.title || "";
        this.content = (info.content ? info.content.replace(/(<([^>]+)>)/ig, "") : "") || "";
        this.share_url = info.share_url || location.href;
        this.img_url = info.img_url || "";
        this.extra = info.extra || "";
        this.twitter_name = encodeURIComponent("@funpin ");

        this.content += " :分享自方片收集";
      },

      shareTo: function shareTo(app, openWin) {
        var url = "";
        switch (app) {
          case "gplus":
            if (this.share_url && this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=gplus";
            } else {
              this.share_url += "&__backsrc=gplus";
            }

            url = "https://plus.google.com/share?url=" + encodeURIComponent(this.share_url) + this.extra;
            break;
          case "facebook":
            if (this.content.length > 140) {
              this.content = this.content.substr(0, 130) + "......";
            }

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=facebook";
            } else {
              this.share_url += "&__backsrc=facebook";
            }
            this.content = this.content.replace(" ", "+");
            url = "https://wwww.facebook/sharer/sharer.php?u=" + encodeURIComponent(this.share_url) + "&t=" + this.content + this.extra;
            break;
          case "twitter":
            if (this.content.length > 140) {
              this.content = this.content.substr(0, 130) + "......";
            }

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=twitter";
            } else {
              this.share_url += "&__backsrc=twitter";
            }

            url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(this.share_url) + "&text=" + encodeURIComponent(this.content) + " @funpin via=" + this.twitter_name + this.extra;
            break;
          case "tumblr":
            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=weibo";
            } else {
              this.share_url += "&__backsrc=weibo";
            }

            //是否有图片，有图片则以图片形式分享
            if (this.img_url) {
              url = "https://www.tumblr.com/share/photo?source=" + encodeURIComponent(this.img_url) + "&caption=" + encodeURIComponent(this.content) + this.extra;
            } else if (this.share_url) {
              //没图片则分享链接
              url = "https://www.tumblr.com/share/link?url=" + encodeURIComponent(this.share_url) + "&name=" + encodeURIComponent(this.title) + "&description=" + encodeURIComponent(this.content) + this.extra;
            } else {
              url = "https://www.tumblr.com/share/quote?quote=" + encodeURIComponent(this.content) + "&source=" + encodeURIComponent(location.href);
            }
            break;
          case "weibo":
            if (this.content.length > 140) {
              this.content = this.content.substr(0, 130) + "......";
            }

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=weibo";
            } else {
              this.share_url += "&__backsrc=weibo";
            }

            url = "http://service.weibo.com/share/share.php?pic=" + encodeURIComponent(this.img_url) + "&url=" + encodeURIComponent(this.share_url) + "&title=" + encodeURIComponent(this.content) + this.extra;
            break;
          case "douban":
            if (this.content.length > 140) {
              this.content = this.content.substr(0, 130) + "......";
            }

            url = "http://www.douban.com/share/service?image=" + encodeURIComponent(this.img_url) + "&name=" + this.title + "&text=" + this.content + this.extra;
            break;
          case "qqmail":
            var desc = "这是我从方片收集中看到的好东西，分享一下";

            var site_title = document.title;

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=qqmail";
            } else {
              this.share_url += "&__backsrc=qqmail";
            }

            url = "http://mail.qq.com/cgi-bin/qm_share?url=" + encodeURIComponent(this.share_url) + "&to=&pics=" + encodeURIComponent(this.pic_url) + "&desc=" + desc + "&summary=" + encodeURIComponent(this.content) + "&title=" + this.title + "&site=" + document.title + this.extra;
            break;
          case "qq":
            var site_title = document.title;
            url = "http://connect.qq.com/widget/shareqq/index.html" + "?url=" + encodeURIComponent(this.share_url) + "&showcount=1" + "&desc=" + encodeURIComponent(this.content) + "&summary=" + encodeURIComponent(this.content) + "&title=" + encodeURIComponent(this.title) + "&site=" + encodeURIComponent(site_title) + "&pics=" + encodeURIComponent(this.img_url) + this.extra;
            break;
          case "gmail":
            url = "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=&body=" + encodeURIComponent(this.content) + "&shva=1&ov=0";
            break;
          case "qzone":
            var desc = "这是我从方片收集中看到的好东西，分享一下";
            var site_title = document.title;

            // if($.isArray(img_urls)){
            //  $.each(pic_urls,function(i,v,c){pic_urls[i] = encodeURIComponent(v);});
            //  pic_urls = pic_urls.join("|");
            // }else{
            //  pic_urls = encodeURIComponent(pic_urls);
            // }
            var pic_urls = encodeURIComponent(this.img_url);

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=qzone";
            } else {
              this.share_url += "&__backsrc=qzone";
            }
            url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(this.share_url) + "&pics=" + pic_urls + "&title=" + this.title + "&desc=" + desc + "&summary=" + encodeURIComponent(this.content) + "&site=" + site_title + this.extra;
            break;
          case "ttweibo":
            if (this.content.length > 140) {
              this.content = this.content.substr(0, 130) + "......";
            }

            if (this.share_url.indexOf("?") == -1) {
              this.share_url += "?__backsrc=qt";
            } else {
              this.share_url += "&__backsrc=qt";
            }

            url = "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + encodeURIComponent(this.share_url) + "&pic=" + encodeURIComponent(this.img_url) + "&title=" + encodeURIComponent(this.content) + this.extra;
            break;
          default:
            break;
        }

        if (url && openWin !== false) {
          var newwin_height = 500,
          newwin_width = 800,
          newwin_top = (window.screen.height - newwin_height) / 2,
          newwin_left = (window.screen.width - newwin_width) / 2;

          window.open(url, '', 'height=' + newwin_height + ',width=' + newwin_width + ',top=' + newwin_top + ',left=' + newwin_left + ',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no');
        }

        return url;
      }

    };

    exports["default"] = new ShareUtil();
    module.exports = exports["default"];

    /***/
  },
  /* 197 */
  /***/ function (module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }

    var _cookieJs = __webpack_require__(198);

    var _cookieJs2 = _interopRequireDefault(_cookieJs);

    var TimeUtil = {

      //php time()函数
      time: function time() {
        return Math.ceil(Date.now() / 1000, 10);
      },

      getTimezone: function getTimezone() {

        !/* require.ensure */(function (require) {
          var jstz = __webpack_require__(199);

          var tz = jstz.determine(); // Determines the time zone of the browser client
          var timezone = tz.name(); // Returns the name of the time zone eg "Europe/Berlin"

          if (timezone) {
            _cookieJs2['default'].set("tz", timezone, 365);
          }
          _cookieJs2['default'].set("GMT_bias", -new Date().getTimezoneOffset() / 60, 365);
        }(__webpack_require__));
      },

      /**
       * @param {timestamp} [time] [JS毫秒时间戳] 可选 默认使用当前时间戳
       * 返回格式: 2016年05月20日
       */
      getLocaleDate: function getLocaleDate(time) {
        time = time || Date.now();

        var date = new Date(time);

        //safari下面的问题解决
        if (date == "Invalid Date") {
          date = new Date(time.replace(/-/g, "/"));
        }

        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
      },

      /**
       * @param {timestamp} [time] [JS毫秒时间戳] 可选 默认使用当前时间戳
       * 返回格式: 2016-05-20 08:00:00
       */
      getFormattedTime: function getFormattedTime(time) {
        time = time || Date.now();

        var date = new Date(time);

        //safari下面的问题解决
        if (date == "Invalid Date") {
          date = new Date(time.replace(/-/g, "/"));
        }

        var month = parseInt(date.getMonth() + 1) < 10 ? "0" + parseInt(date.getMonth() + 1) : parseInt(date.getMonth() + 1),
        day = parseInt(date.getDate()) < 10 ? "0" + parseInt(date.getDate()) : parseInt(date.getDate()),
        hour = parseInt(date.getHours()) < 10 ? "0" + parseInt(date.getHours()) : parseInt(date.getHours()),
        minutes = parseInt(date.getMinutes()) < 10 ? "0" + parseInt(date.getMinutes()) : parseInt(date.getMinutes()),
        seconds = parseInt(date.getSeconds()) < 10 ? "0" + parseInt(date.getSeconds()) : parseInt(date.getSeconds());

        return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
      },

      getCurrentTimestamp: function getCurrentTimestamp(offset) {
        if (isNaN(offset)) {
          return Date.now();
        } else {
          var today = new Date();

          if (today.getUTCMonth) {
            var month = parseInt(today.getUTCMonth() + 1) < 10 ? "0" + parseInt(today.getUTCMonth() + 1) : parseInt(today.getUTCMonth() + 1),
            day = parseInt(today.getUTCDate()) < 10 ? "0" + parseInt(today.getUTCDate()) : parseInt(today.getUTCDate()),
            hour = parseInt(today.getUTCHours()) < 10 ? "0" + parseInt(today.getUTCHours()) : parseInt(today.getUTCHours()),
            minutes = parseInt(today.getUTCMinutes()) < 10 ? "0" + parseInt(today.getUTCMinutes()) : parseInt(today.getUTCMinutes()),
            seconds = parseInt(today.getUTCSeconds()) < 10 ? "0" + parseInt(today.getUTCSeconds()) : parseInt(today.getUTCSeconds());

            var utcTodayString = today.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;

            var utcToday = new Date(utcTodayString);
            //safari下面的问题解决
            if (utcToday == "Invalid Date") {
              utcToday = new Date(time.replace(/-/g, "/"));
            }

            return utcToday.valueOf() + offset * 60 * 60 * 1000;
          } else {
            return Date.now();
          }
        }
      },

      /**
       * 返回当前的时间，格式 2016-05-20 08:00:00
       */
      getCurrentTime: function getCurrentTime() {
        return this.getFormattedTime();
      },

      /**
       * 根据提供的时间返回JS毫秒时间戳
       */
      getTimestamp: function getTimestamp(datetime) {
        var date = new Date(datetime);

        if (date == "Invalid Date") {
          date = new Date(datetime.replace(/-/g, "/"));
        }

        return date.valueOf();
      },

      //将需要展示的时间格式化
      prettifyTime: function prettifyTime(time) {
        if (!time) return "";

        var today = new Date();

        var date = new Date(time);

        if (date == "Invalid Date") {
          date = new Date(time.replace(/-/g, "/"));
        }

        if (today.getFullYear() == date.getFullYear()) {
          //如果是同一年的,
          //如果是最近两天，则不展示月份，否则展示月份，不展示年份
          if (today.getMonth() == date.getMonth()) {
            //同一个月
            var dayDiff = today.getDate() - date.getDate();

            if (dayDiff == 0) {
              //今日
              var hourDiff = today.getHours() - date.getHours();

              if (hourDiff == 0) {
                //一小时以内
                var minuteDiff = today.getMinutes() - date.getMinutes();

                if (minuteDiff == 0) {
                  var secondDiff = today.getSeconds() - date.getSeconds();
                  return secondDiff + "秒钟以前";
                } else {
                  return minuteDiff + "分钟以前";
                }
              } else if (hourDiff <= 6) {
                return hourDiff + "小时以前";
              } else {
                return date.getHours() + ":" + date.getMinutes();
              }

              return date.getHours() + ":" + date.getMinutes();
            } else if (dayDiff == 1) {
              return "昨天 " + date.getHours() + ":" + date.getMinutes();
            } else {
              return date.getMonth() + 1 + "月" + date.getDate() + "日 " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            }
          } else {
            return date.getMonth() + 1 + "月" + date.getDate() + "日 " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          }
        } else {
          //如果不是这一年的时间则展示全部时间
          return time;
        }

        return time;
      }
    };

    exports['default'] = TimeUtil;
    module.exports = exports['default'];

    /***/
  },
  /* 198 */
  /***/ function (module, exports) {

    //简单Cookie工具类
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CookiesUtil = {};
    CookiesUtil.set = function (name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
      this[name] = value;
    };

    CookiesUtil.remove = function (name) {
      if (name) document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    };

    CookiesUtil.get = function (name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    };

    exports["default"] = CookiesUtil;
    module.exports = exports["default"];

    /***/
  },
  /* 199 */,
  /* 200 */
  /***/ function (module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var ValidatorUtil = {
      isValid: function isValid(field, value) {
        switch (field) {
        //1.邮箱 邮箱格式合法性
          case "email":

            if (/^[0-9a-z_][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/.test(value)) {
              if (value && value != "" && value.indexOf("@") != -1) {
                var t = value.indexOf("@"),
                n = value.substring(0, t);
                return n.length > 64 || value.length > 256 ? false : true;
              }
            }
            break;

        //2.密码 6-16位字符（不限制任何特殊字符、不必英文数字混合），区分英文大小写
          case "password":
            if (value.length < 16 && value.length > 3) {
              return true;
            }
            break;

        //3.用户名
        //a.4-14个字符，只可以使用中英文(包括阿拉伯语系列)数字"_"(下划线)和"-"(减号)
        //游客默认用户名: "游客_" + 6位随机字符
        //已注册用户默认用户名: "Ok_" + 6位随机字符
        //用户名不得重复(若用第三方登录后用户名重复，则在原用户名后+6位随机字符)
          case "nickname":
            var nicknameRegExp = /^[0-9a-zA-Z\u4e00-\u9fa5_-]+$/; //
            if (value.length > 0 && value.length < 15) {
              if (nicknameRegExp.test(value)) {
                return true;
              }
            }
            break;

        //4.简介
        //1-48个字符(1-24个汉字)，首尾的空格自动清空
        //默认简介："这个家伙很懒，什么都没有留下。"，清空简介则会自动出现这一句。
          case "introduction":
            if (value.length < 49) {
              return true;
            }
            break;

        //5.贴纸标题
        //1-48个字符（1-24个汉字），首尾的空格自动清空
        //清空标题会placeholder"无标题"，后台数据显示为空
          case "noteTitle":
            if (value.length < 49) {
              return true;
            }
            break;

        //1-14个字符（1-7个汉字），只可以使用中英文(包括阿拉伯语系列)数字"_"(下划线)和"-"(减号)
          case "tagName":
            var tagNameRegExp = /^[0-9a-zA-Z\u4e00-\u9fa5_-]+$/;
            if (value.length > 0 && value.length < 15) {

              if (tagNameRegExp.test(value)) {
                return true;
              }
            }
            break;

          default:
            return false;
        }
      }
    };

    exports["default"] = ValidatorUtil;
    module.exports = exports["default"];

    /***/
  },
  /* 201 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var VideoUtil = {

        //支持的视频网站
        supportedVideoSites: ["www.youtube.com", "vimeo.com", "viddler.com", "hulu.com", "www.ted.com", "youku.com", "v.youku.com", "youtu.be", "56.com", "v.qq.com", "tudou.com", "www.letv.com", "tv.sohu.com", "video.sina.com.cn"], //国内视频站点

        //不同视频提供站的播放信息
        videoSitesInfo: {
          "www.youtube.com": {
            player: "#player-api",
            idRegexp: /\?v\=([0-9a-z\-]+)/i,
            frameSrc: "https://www.youtube.com/embed/{{id}}"
          },

          "youtu.be": {
            player: "#player-api",
            idRegexp: /youtu\.be\/([0-9a-z\-]+)/i,
            frameSrc: "https://www.youtube.com/embed/{{id}}"
          },

          "vimeo.com": {
            player: "#video",
            idRegexp: /\.com\/([0-9]+)\b/,
            frameSrc: "https://player.vimeo.com/video/{{id}}"
          },

          "v.youku.com": {
            player: "#playerBox",
            idRegexp: /id_(.+)\.html/,
            frameSrc: "http://player.youku.com/embed/{{id}}"
          },

          "www.letv.com": {player: "#fla_box", idRegexp: /vplay\/(.+)\.html/, frameSrc: ""},

          "v.qq.com": {
            player: "#mod_inner",
            idRegexp: /(?:([0-9a-z]{8,14})\.html$|\?vid\=([0-9a-z]{8,14}))/i,
            frameSrc: "http://v.qq.com/iframe/player.html?vid={{id}}&tiny=0&auto=0"
          },

          "www.ted.com": {
            player: ".player__container",
            idRegexp: /talks\/([0-9a-z\_\-]+)(?:\.html|\?)/i,
            frameSrc: "https://embed-ssl.ted.com/talks/{{id}}.html"
          }
        },

        //判断url是否是可播放的视频链接
        isVideoLink: function isVideoLink(url) {
          if (!url) return false;

          var a = document.createElement("a");
          a.href = url;
          var host = a.host;
          a = null;

          if (this.supportedVideoSites.indexOf(host) >= 0) {
            var siteInfo = this.videoSitesInfo[host];

            if (siteInfo) {
              var id_match = url.match(siteInfo.idRegexp);

              if (id_match && id_match.length > 0) {
                $(id_match).each(function (i, v) {
                  if (!v) id_match.splice(i, 1);
                });

                if (id_match.length >= 2) {
                  var id = id_match[1];

                  if (siteInfo.frameSrc && id) {
                    return siteInfo.frameSrc.replace("{{id}}", id);
                  }

                  return true;
                }
              }
            }
          }

          return false;
        }

      };

      exports["default"] = VideoUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 202 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      //页面之间的相互通信
      var WindowMessager = {
        EVENT_NAMESPACE: '.okmemo',

        //通知顶层窗口
        notifyTop: function notifyTop(data) {
          if (window.postMessage) window.top.postMessage(data, "*");
          return this;
        },

        //通知当前页面
        notifyCurrentPage: function notifyCurrentPage(evtString, data) {

          $(window).trigger(evtString + this.EVENT_NAMESPACE, data);
          return this;
        },

        listenPageEvent: function listenPageEvent(evtString, callback) {

          $(window).on(evtString + this.EVENT_NAMESPACE, function (event, data) {

            if ($.isFunction(callback)) callback.call(null, data);
          });
          return this;
        },

        stopListenPageEvent: function stopListenPageEvent() {
          $(window).off(evtString + this.EVENT_NAMESPACE);
        },

        //通知其他不可见标签页
        notifyTabs: function notifyTabs(evtString, data) {
          data = data || "";

          _models.JStoreKVDB.set(evtString + this.EVENT_NAMESPACE, data);
          return this;
        },

        listenGlobalEvent: function listenGlobalEvent(evtString, callback) {
          _models.JStoreKVDB.listenKeyChange(evtString + this.EVENT_NAMESPACE, function (key, operation) {
            var data = _models.JStoreKVDB.get(key, {});

            if ($.isFunction(callback)) callback.call(null, data, operation);
          });
          return this;
        },

        stopListenGlobalEvent: function stopListenGlobalEvent(evtString) {
          _models.JStoreKVDB.stopListening(evtString + this.EVENT_NAMESPACE);
        },

        //通知各个tab及当前页面
        notifyAll: function notifyAll(evtString, data) {
          this.notifyTabs(evtString, data);
          this.notifyCurrentPage(evtString, data);

          return this;
        },

        //监听所有
        ListenAllEvent: function ListenAllEvent(evtString, callback) {
          $(window).on(evtString + this.EVENT_NAMESPACE, function (event, data) {
            if ($.isFunction(callback)) callback.call(null, data);
          });

          _models.JStoreKVDB.listenKeyChange(evtString + this.EVENT_NAMESPACE, function (key, operation) {
            var data = _models.JStoreKVDB.get(key, {});

            if ($.isFunction(callback)) callback.call(null, data, operation);
          });

          return this;
        }

      };
      exports['default'] = WindowMessager;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 203 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ui = function ui() {

        this.init();
      };

      ui.prototype = {
        init: function init() {
          var _this = this;
          var updateUIVarsTimeout = null;
          $(window).on("resize", function () {
            if (updateUIVarsTimeout) clearTimeout(updateUIVarsTimeout);

            updateUIVarsTimeout = setTimeout(function () {
              _this.winHeight = $(window).height();
            }, 500);
          });
        },

        winHeight: $(window).height(),

        preventOverscroll: function preventOverscroll(bindEle) {
          //对绑定的binEle滚到最下面的时候禁止往下滚动，滚动到最上面的时候禁止继续往上滚
          $(bindEle).on("mousewheel DOMMouseScroll", function (e) {

            e.stopPropagation();

            var delta = e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1) || // chrome & ie
            e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1); // firefox

            if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
              if (delta < 0) {
                // 滚动到最下面的时候，禁止继续向下滚
                e.preventDefault();
              }
            } else if ($(bindEle).get(0).scrollTop == 0) {

              if (delta > 0) {
                //滚动最上面的时候，禁止继续往上滚
                e.preventDefault();
              }
            }
          });
        },

        stopPreventOverScroll: function stopPreventOverScroll(bindEle) {
          $("body").off("mousewheel DOMMouseScroll", bindEle);
        }

      };

      var Ui = new ui();

      exports["default"] = Ui;

      // var Ui = {

      //         init: (function(){

      //         })();

      // openEditorWindow: function(){
      //     $("body").addClass("open-editor");
      //     $("#editor").showWithAnim("anim");
      // },

      // closeEditorWindow: function(){
      //     $("#editor").hide().removeClass("anim");
      //     $("body").removeClass("open-editor");
      // },

      // closePreviewWindow: function(){
      //     $("#mini_browser").hide().removeClass("anim");
      //     $("body").removeClass("open-link");
      // },

      // openPreviewWindow: function(){
      //     $("body").addClass("open-link");
      //     $("#mini_browser").showWithAnim("anim");
      // },

      // animPreviewWindowWhenSwitch: function(){
      //     $("body").addClass("switch-link");

      //     setTimeout(function(){
      //         $("body").removeClass("switch-link");
      //     },200);
      // },

      // isPreviewWindowOpen: function(){
      //     return $("body").hasClass("open-link");
      // },

      // openImageViewer: function(){
      //     $("body").addClass("view-image");
      //     $("#image_viewer").showWithAnim("anim");
      // },

      // closeImageViewer: function(){
      //     $("body").removeClass("view-image");

      //     $("#image_viewer").hide().removeClass("anim");
      // },

      //切换设置页面或者消息页面的可见性
      // showPage: function(page){
      //     $("#pages").addClass(page).showWithAnim("page-on");
      //     $("body").addClass("page-covered");
      // },

      // hidePage: function(page){
      //     $("#pages").removeClass(page).hide().removeClass("page-on");
      //     $("body").removeClass("page-covered");
      // },

      // openEditorWindow: function(){
      //     $("body").addClass("open-editor");
      //     $("#editor").showWithAnim("anim");
      // },

      // toggleSidebar: function(){
      //     $("body").toggleClass("hide-sidebar");
      //     $(window).trigger("resize");
      // }

      // //关闭编辑器
      // minimizeNote: function(noteComponent){
      //     $(window).trigger("minimize");
      // },

      // maximizeNote: function(noteComponent){
      //     //打开编辑器
      //     this.ui.openEditorWindow();

      //     //通知编辑器组件数据
      //     $(window).trigger("maximize",noteComponent);
      // },

      // //根据a链接浏览对应的网页,之所以使用a标签是可以通过dom得到链接的信息，例如protocol 和 attrbute href
      // previewLink: function(linkDom){
      //     if(linkDom && linkDom.href){
      //         if(this.ui.isPreviewWindowOpen()){
      //             //切换网址动画效果
      //             this.ui.animPreviewWindowWhenSwitch();
      //         }else{
      //             var winScrollTop = $(window).scrollTop();

      //             this.ui.openPreviewWindow();

      //             //滚动到当前便签位置
      //             // $("#ok_extension_wrapper").scrollTop(winScrollTop);
      //         }

      //         var link = linkDom.href;
      //         var realHref = $(linkDom).attr("href");

      //         //链接无协议
      //         if(realHref.indexOf("://") < 0){
      //             link = OKUtil.Globals.protocol+"://"+realHref;
      //         }

      //         //判断是不是视频网站,如果是，则嵌入视频而不是网站
      //         var videoFrameSrc = VideoUtil.isVideoLink(link);
      //         if(videoFrameSrc && typeof videoFrameSrc == "string"){
      //             link = videoFrameSrc;
      //         }

      //         if(link) $(window).trigger("openlink",link);
      //     }
      // }

      //查看大图
      // viewImage: function(img){
      //     $(window).trigger("viewimage",img);
      // },
      // }

      // export default Ui;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 204 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, $, _O) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      // import ContentUtil from './content.js';

      var ExtUtil = {

        //与扩展的通信端口
        _bgPort: null,

        //当前tab
        _tab: null,

        //得到当前使用的扩展版本
        getCurrentExtVersion: function getCurrentExtVersion() {
          if (_OKConfig.version) return _OKConfig.version;

          var version = "";
          if (typeof chrome != 'undefined' && chrome.extension) {
            // var appDetails = chrome.app.getDetails();
            // if(appDetails){
            //     version = appDetails.version;
            // }
            var data = $.ajax({
              url: chrome.extension.getURL("/manifest.json"),
              async: false,
              dataType: "json"
            });

            if (data && data.responseJSON) {
              version = data.responseJSON.version;
            }
          } else if (typeof safari != 'undefined' && safari.extension) {
            var data = $.ajax({
              url: safari.extension.baseURI + 'Info.plist',
              async: false,
              dataType: "xml"
            });

            if (data && data.responseXML) {
              $('dict > key', data.responseXML).each(function () {
                if ($(this).text() == 'CFBundleShortVersionString') {
                  version = $(this).next().text();
                }
              });
            }
          }

          if (version) {
            _OKConfig.version = version;
          }

          return version;
        },

        getShortcut: function getShortcut() {
          // 快捷键提示
          var key = "Alt + 1";
          var config = _models.JStoreKVDB.get("config");
          if (config) {
            var key1w = config.shortcuts.quick_switcher.__key1w;
            var key2w = config.shortcuts.quick_switcher.__key2w;
            if (key1w && key2w) {
              key = key1w + " + " + key2w;
            }
          }

          return key;
        },

        /**
         * 检测浏览器是否安装了自己,能调用扩展api即为已经安装了扩展
         * 如果安装了扩展则返回浏览器名称
         */
        isExtensionInstalled: function isExtensionInstalled() {
          if (window.chrome && chrome.extension && chrome.extension.getURL) {
            return "chrome";
          } else if (window.safari && safari.extension) {
            return "safari";
          }

          return false;
        },

        /**
         * 监听扩展端的事件,
         */
        setExtBindings: function setExtBindings() {
          var channel = this;

          //监听扩展中笔记的添加
          //Chrome
          var extensionHost = this.isExtensionInstalled();

          if (extensionHost == 'chrome' && this.isInsideExtension()) {
            var bgPort = chrome.runtime.connect();

            if (bgPort) {
              channel._bgPort = bgPort;

              channel._bgPort.onMessage.addListener(function (data, port) {
                //打开的当前标签页的信息
                if (data.tab) {
                  channel._tab = data.tab;

                  //根据tab信息跟新api访问的协议
                  var urlInfo = _utils.UrlUtil.parseURL(data.tab.url);

                  if (urlInfo.protocol && (urlInfo.protocol == "http" || urlInfo.protocol == "https")) {
                    //更新api访问的协议
                    _models.AppModel.Globals.protocol = urlInfo.protocol;
                  }
                }

                //保存笔记
                if (data.command == "save_note") {
                  _components.CreateNote.relCreateNote(data.note);
                }
              });
            }
          } else if (extensionHost == 'safari') {

            safari.self.addEventListener("message", function (event) {
              if (event.name == 'command') {
                var command = event.message.command;

                if (command == 'save_note') {
                  _components.CreateNote.relCreateNote(event.message.note);
                }
              }
            });
          } else if (location.host.match(/okay.do$/)) {
            //在自己网站的框架(iframe)内
            _models.AppModel.Globals.protocol = location.protocol.replace(':', '');

            //接收外部保存贴纸命令
            $(window).on("message", function (e) {
              var event = e.originalEvent;
              var data = event.data;

              if (data.command == 'save_note') {
                _components.CreateNote.relCreateNote(data.note);
              }
            });
          }

          //监听扩展发过来的命令
          $(window).on("message", function (e) {
            var event = e.originalEvent;
            var data = event.data;

            if (data.command) {
              switch (data.command) {
                case "open":
                  //侧栏被打开,相应的做一些事情，如检查更新
                  channel.handleAppOpen(data.userTrigger);

                  break;
                case "close":
                  //侧栏被关闭
                  channel.handleAppClose();

                  break;
                case "top_info":
                  //扩展发回当前访问的顶层页面的信息

                  break;
                case "app_state_open":
                  //侧栏加载完成，并且处于可见状态，(这种情况出现在打开侧栏登录登出之后，需要用户马上加载数据到扩展)
                  channel.handleAppOpen(false);
                  break;
                case "even_larger":
                  //在整页模式下，收缩侧栏
                  var isFullPage = $("body").hasClass("full-page");
                  if (isFullPage) {
                    _components.App.toggleSidebar();
                  }
                  break;

              // 顶层窗口的事件传递
                case "top_events":
                  $(window).trigger("top" + data.type);
                  break;
                default:
                  break;
              }
            }
          });

          //拖拽时让扩展知道
          // $(document).on("dragstart",function(event){
          //     var dt = event.originalEvent.dataTransfer;

          //     window.top.postMessage({drag:"dragstart"},"*");
          // });

          //拖拽结束时让扩展知道
          $(document).on("dragend", function () {
            window.top.postMessage({drag: "dragend"}, "*");
          });
        },

        /**
         * 发送消息到background.js
         * @param  object   msg      需要发送的数据对象
         * @param  function callback 得到background.js反馈后的回调
         */
        sendMsgToBg: function sendMsgToBg(msg, callback) {
          if (window.chrome && chrome.runtime) {
            chrome.runtime.sendMessage(msg, function (response) {
              if ($.isFunction(callback)) callback(response);
            });
          }
        },

        /**
         * 监听由backgroud.js发送过来的消息,并回调处理
         * @param  string   cmd      background.js发送消息时给出的消息类型
         * @param  function callback 获得消息后的回调
         */
        listenBgCmd: function listenBgCmd(cmd, callback) {
          if (window.chrome && chrome.runtime) {
            chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
              if (cmd == data.command && $.isFunction(callback)) {
                callback(data);
              }
            });
          }
        },

        /**
         * 广播侧栏被打开事件
         *
         * @param {boolean} [userTrigger] [是否是由用户手动打开]
         */
        handleAppOpen: function handleAppOpen(userTrigger) {
          _utils.WindowMessager.notifyCurrentPage("appopen", userTrigger);
        },

        /**
         * 广播侧栏被关闭事件
         */
        handleAppClose: function handleAppClose() {
          _utils.WindowMessager.notifyCurrentPage("appclose");
        },

        /**
         * 页面是否嵌入在扩展里面
         */
        isInsideExtension: function isInsideExtension() {
          if (window.chrome) {
            return chrome.extension;
          }
        },

        /**
         * 发送消息到扩展端
         */
        sendInfoToExt: function sendInfoToExt() {
          this.updateCurrentTag();
          this.updateRecentTags();
        },

        /**
         * 发送消息给扩展,更新扩展overlay最上面的标签区域
         */
        updateCurrentTag: function updateCurrentTag() {
          var currentTid = _models.NoteModel.getLastAccessTag();
          var currentTag = _models.TagModel.getTagByGtid(currentTid);

          if (currentTag.tid == _OKConfig.TRASHBIN_ID || currentTag.tname == _OKConfig.TRASHBIN_NAME) {
            currentTag = {
              tid: _OKConfig.ALL_TAG_ID,
              tname: _OKConfig.ALL_TAG_NAME
            };
          }

          _O.debug("EXT_TAGS", "更新当前标签为:" + currentTag.tname);

          _utils.WindowMessager.notifyTop({
            command: "update_current_tag",
            currentTag: currentTag
          });
        },

        /**
         * 发送消息给扩展,更新扩展overlay最近标签区域的内容
         */
        updateRecentTags: function updateRecentTags() {
          var recentTags = _models.TagModel.getLocalTags();
          var currentTid = _models.NoteModel.getLastAccessTag();
          var currentTag = _models.TagModel.getTagByGtid(currentTid);

          if (recentTags && recentTags.length > 0) {
            recentTags = $.grep(recentTags, function (tag) {
              var savedTags = [];
              //避免重复
              if (tag && savedTags.indexOf(tag.gtid) < 0) {
                savedTags.push(tag.gtid);
                return tag.gtid != currentTag.tid && tag.tname != currentTag.tname && tag.tname != _OKConfig.TRASHBIN_NAME;
              } else {
                return false;
              }
            });
            if (recentTags.length > 4) {
              recentTags = recentTags.slice(0, 3);
            }
          }

          _O.debug("EXT_TAGS", "更新最近标签为:", recentTags);

          _utils.WindowMessager.notifyTop({
            command: "update_recent_tags",
            recentTags: recentTags
          });
        }

      };

      exports['default'] = ExtUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 205 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var UrlUtil = {

        isLink: function isLink(str) {
          var link_regexp = /((http\:\/\/|https\:\/\/|ftp\:\/\/|\/\/)?([a-z0-9\-]+\.){0,5}[a-z0-9\-]+\.(?:com|cn|hr|io|edu|org|do|fr|jp|tv|name|it|de|mobi|pro|us|fm|asia|net|gov|tel|la|travel|so|biz|info|hk|im|me|co|in|at|bz|ag|eu|in|cc|ly)\b(?:\:[\d+])?[^\<\>\;\(\)\s\"\'\[\]\{\}\<]{0,})/ig,
          ip_link_regexp = /((http\:\/\/|https\:\/\/|ftp\:\/\/|\/\/)?[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\b(?:\:[\d+])?[^\<\>\;\(\)\s\"\'\[\]\{\}\<]{0,})/ig;

          return ip_link_regexp.test(str) || link_regexp.test(str);
        },

        parseURL: function parseURL(url) {
          var a = document.createElement('a');
          a.href = url;

          var info = {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function () {
              var ret = {},
              seg = a.search.replace(/^\?/, '').split('&'),
              len = seg.length,
              i = 0,
              s;
              for (; i < len; i++) {
                if (!seg[i]) {
                  continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
              }
              return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
          };

          a = null;

          return info;
        },

        getDomainForUrl: function getDomainForUrl(url) {
          var a = document.createElement('a');
          a.href = url;

          var domain = a.hostname || "";

          a = null;
          return domain;
        },

        /**
         * 通过head方法得到资源的类型
         * @param  {string}   url      [地址]
         * @param  {Function} callback [回调方法 接收参数:]
         */
        getUriType: function getUriType(url, callback) {
          _models.Request.head(url, function (type) {
            if ($.isFunction(callback)) callback(type);
          });
        }

      };

      exports['default'] = UrlUtil;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 206 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, _O, $) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _models = __webpack_require__(168);

      var LoginUtil = {

        login_url: _OKConfig.LOGIN_SITE + "/v2/users/login",

        update_pass_url: _OKConfig.LOGIN_SITE + "/v2/users/update_pass?rd=extension",

        /**
         *  微信二维码登录
         *  @param {} [varname] [description]
         */
        login: function login(newuser, callback) {
          var _this = this;

          var url = _OKConfig.origin + "/user/wxlogin";

          if (newuser) {
            if (newuser == "edit") {
              var user = _models.UserModel.getLocalUser();
              if (!!user) {
                url = _OKConfig.LOGIN_SITE + "/website.php?c=binding&a=email";
              }
            } else {
              url += "#register";
            }
          }

          var newwin_height = 489,
          newwin_width = 317,
          newwin_top = (window.screen.height - newwin_height) / 2,
          newwin_left = (window.screen.width - newwin_width) / 2;

          //以合适的尺寸打开登录窗口
          var login_win = window.open(url, '授权登录', 'height=' + newwin_height + ',width=' + newwin_width + ',top=' + newwin_top + ',left=' + newwin_left + ',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no');

          //不停检测窗口关闭，关闭之后获取用户登录状态
          if (login_win) {
            if (this._checkLoginInt) clearInterval(this._checkLoginInt);

            this._checkLoginInt = setInterval(function () {

              //如果窗口已经关闭
              if (login_win.closed) {

                //清除检查程序
                clearInterval(_this._checkLoginInt);
                _this._checkLoginInt = null;

                //获取用户登录状态
                _models.UserModel.userInfo(function (data) {
                  if (data.status == 1) {
                    //登录/更新成功

                  } else {
                    //失败
                    _O.debug("登录", "登录失败");
                  }

                  if ($.isFunction(callback)) callback(data);
                });
              }
            }, 500);
          }
        }

      };

      // login: function(isLogin,callback){
      //     var _this = this;
      //     var login_win = null;

      //     var url='',
      //         newwin_height = 489,
      //         newwin_width = 317,
      //         newwin_top = (window.screen.height - newwin_height) / 2,
      //         newwin_left = (window.screen.width - newwin_width) / 2;

      //     //去登陆页面
      //     if(isLogin === true){
      //          url = this.login_url+"?from=extension&rd=extension#login";
      //     }else if(isLogin === false){
      //          url = this.login_url+"?from=extension&rd=extension#register";
      //     }else if(isLogin === 'edit'){
      //         var user = UserModel.getLocalUser();
      //         if(!!user){
      //             url = _OKConfig.LOGIN_SITE + "/website.php?c=binding&a=email";
      //         }
      //     }else if(isLogin==='yinxiang'){
      //         url = _OKConfig.origin+"/index.php?c=passport&a=evernote&china=true&granted=true";
      //     }else if(isLogin==='evernote'){
      //          url = _OKConfig.origin+"/index.php?c=passport&a=evernote&granted=true";
      //     }
      //     login_win = window.open(url,'授权登录','height='+newwin_height+',width='+newwin_width+',top='+newwin_top+',left='+newwin_left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no');

      //     if(login_win){
      //         if(_this._checkLoginInt) clearInterval(_this._checkLoginInt);

      //         _this._checkLoginInt = setInterval(function(){
      //             if(login_win.closed){
      //                 clearInterval(_this._checkLoginInt);
      //                 _this._checkLoginInt = null;

      //                 //窗口已经关闭则检测是否已经登录
      //                 UserModel.userInfo(function(data){

      //                     var user = data.data;

      //                     if(user && user.uid){
      //                         var uid = user.uid;

      //                         //已经登录
      //                         AppModel._loggedIn = true;

      //                         // //保存资料
      //                         // UserModel.setLocalUser(user);

      //                         if($.isFunction(callback)){
      //                             callback(uid,user);
      //                         }else{
      //                             //如果之前没有本地用户或者之前登录的用户与当前登录用户不是同一个用则清空本地
      //                             var localUser = UserModel.getLocalUser();
      //                             if(!localUser || localUser.uid != uid){
      //                                 LocalKVDB.flush();
      //                             }

      //                             //重新加载页面
      //                             location.reload();
      //                         }
      //                     }else{
      //                         _O.log("login failed");
      //                     }
      //                 });
      //             }
      //         },500);
      //     }

      //     return login_win;
      // }
      exports["default"] = LoginUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(162), __webpack_require__(161)))

    /***/
  },
  /* 207 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, jQuery) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var JqueryUtil = {

        //扩展jQuery
        extendJquery: (function () {
          //让展示和隐藏有简单渐变
          jQuery.fn.showWithAnim = function (options, callback) {
            var $el = $(this);
            if ($el.length === 0) return false;

            var animateClass = "anim";
            if (typeof options == "string") animateClass = options;

            options = options || {};
            animateClass = options.className || animateClass;

            //先展示再动画
            $el.show();
            setTimeout(function () {
              $el.addClass(animateClass);
              if ($.isFunction(callback)) callback();
            }, 50);
          };

          jQuery.fn.hideWithAnim = function (options, callback) {
            var $el = $(this);
            if ($el.length === 0) return false;

            var animateClass = "anim";
            if (typeof options == "string") animateClass = options;
            options = options || {};
            var animateClass = options.className || animateClass;
            var animationTimeout = options.timeout || 300;

            //先动画再隐藏
            $el.removeClass(animateClass);
            setTimeout(function () {
              $el.hide();
              if ($.isFunction(callback)) callback();
            }, animationTimeout);
          };

          //自定义Tooltip插件
          jQuery.fn.aloha = function (options) {
            var _this = this,
            timeout = null,
            options = options || {},
            leftOffset = options.leftOffset || 0,
            container = options.container || document.body;

            // 鼠标经过时展示tooltip
            $(container).on("mouseover", _this.selector, function (event) {
              var text = $(this).data("tooltip") || this.title;
              if (this.title) {
                $(this).attr("data-tooltip", this.title);
                this.title = "";
              }

              if (text) {
                var template = '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
                $(container).append(template);
                var $container = $(".tooltip", container);
                var $text = $container.find(".tooltip-inner");
                $text.text(text);

                //定位
                var position = $(this).data("placement") || "top";

                $container.addClass(position);

                var top = $(this).offset().top;
                var left = $(this).offset().left - ($container.innerWidth() / 2 - $(this).innerWidth() / 2);

                if (position == "top") {
                  top = top - $container.height() - 10;
                } else if (position == "bottom") {
                  top = top + $(this).height();
                } else if (position == "left") {
                  left = $(this).offset().left - $container.width() - 10;
                  top = top - ($container.height() / 2 - $(this).height() / 2);
                } else if (position == "right") {
                  left = $(this).offset().left + $(this).width();
                  top = top - ($container.height() / 2 - $(this).height() / 2);
                }

                $container.css({top: top + "px", left: left + "px", opacity: 1, zIndex: 100000});

                $(this).one("mousedown", function (event) {
                  $(".tooltip", container).remove();
                });

                $(window).one("scroll", function (event) {
                  $(".tooltip", container).remove();
                });
              }
            });

            // 鼠标移出时展示tooltip
            $(container).on("mouseout", _this.selector, function (event) {
              $(".tooltip", container).remove();

              if (timeout) clearTimeout(timeout);
            });
          };
        })()
      };

      exports["default"] = JqueryUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(161)))

    /***/
  },
  /* 208 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, _O, _OKConfig) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var LazyLoad = {

        images: $([]),

        settings: {
          threshold: 200,
          container: window
        },
        //过滤掉已经加载的图片 和加载失败的图片
        filterLoadedImg: function filterLoadedImg() {
          this.images = $.grep(this.images, function (img) {
            return $(img).data("loaded") != 1 && $(img).data("error") != 1;
          });

          return this.images;
        },

        //懒加载图片
        lazyLoad: function lazyLoad($imgs) {
          //如果有参数就把这个值存起来
          if ($imgs) {
            if ($imgs.length == 0) return;
            this.images = $(this.images).add($imgs);
          }
          ;

          //把已加载的图片过滤掉
          this.images = this.filterLoadedImg();

          var _this = this;
          var src = "";

          //遍历所有图片
          $(this.images).each(function (i, img) {
            var $this = $(this);
            $this.parent('div').addClass('img-error');

            //进入视口  替换src
            if (_this.inviewport(this, _this.settings)) {

              src = $this.attr("data-origin");
              if (src) {
                _utils.ImageUtil.testImg(src, function (src) {
                  if (src) {
                    $this.attr("src", src);
                    $this.data("loaded", "1");
                    $this.parent('div').removeClass('img-error');
                  } else {
                    //cdn图片没有加载成功就加载原图
                    src = $this.attr("_src");
                    _utils.ImageUtil.testImg(src, function (src) {
                      if (src) {
                        $this.attr("src", src);
                        $this.data("loaded", "1");
                        $this.parent('div').removeClass('img-error');
                      } else {
                        $this.attr("title", "");
                        $this.data("error", "1");
                        $this.css({"opacity": 0});
                        $this.data("error", "1");
                      }
                    });
                  }
                });
              }
            }
          });
        },

        //先将内容中的图片链接给替换掉
        makeUrl: function makeUrl(content) {
          var div = document.createElement("div");
          div.innerHTML = content;
          var imgs = $(div).find("img");

          //如果内容中有图片把src替换成占位图片
          if (imgs.length > 0) {
            var height, width, ratio, src, sizeMatch, isCDN, isGif, isMedia;

            for (var i = 0; i < imgs.length; i++) {
              src = $(imgs[i]).attr("src");

              if ($(imgs[i]).parent().hasClass("media")) {
                isMedia = true;
              }

              if (!src) {
                _O.debug("图片加载", "无src图");
                continue;
              }

              isCDN = src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0;

              if (isCDN) {
                isGif = src.indexOf("_G1") >= 0;
              }
              ;

              //无协议图片则加上协议
              if (src.indexOf("//") == 0) {
                src = AppModel.Globals.protocol + ":" + src;
              }

              //如果是cdn图片则对于侧栏使用合适的尺寸
              if (isCDN) {
                src = _utils.ImageUtil.resizeCDNImageSrc(src);
              }

              $(imgs[i]).attr("data-origin", src);

              width = $(imgs[i]).data("width");
              height = $(imgs[i]).data("height");

              if (!width && !height) {

                //https://img.okay.do/e37d499254149c64161997f3f33771cb_W1200_H675_G0@0e_580w
                if (isCDN) {
                  sizeMatch = src.match(/\_W(\d+)\_H(\d+)/);

                  if (sizeMatch) {
                    width = sizeMatch[1];
                    height = sizeMatch[2];
                  }
                }
              }

              //对图片的尺寸进行处理
              if (width && height) {

                ratio = width / height;

                // 如果是视频没那么直接在父元素上添加img类
                if (isMedia) {
                  $(imgs[i]).parent().addClass("img big-img");
                  $(imgs[i]).after('<span class="media-cover cover-btn"></span>');
                } else {

                  if (width > 129) {
                    $(imgs[i]).wrap("<div class='img big-img'></div>");

                    if (width > 300 && !isGif) {
                      $(imgs[i]).after('<span class="img-icon icon-font fp-ext-zoom-in fp-tooltips" data-tooltip="查看大图" data-placement="top""></span>');
                    }

                    $(imgs[i]).css({
                      "width": _OKConfig.content_img_maxwidth + "px",
                      "height": _OKConfig.content_img_maxwidth / ratio + "px"
                    });
                  } else {
                    $(imgs[i]).wrap("<div class='img small-img'></div>");

                    if (ratio <= 1) {
                      $(imgs[i]).css({"width": width + "px", "height": height + "px"});
                    }
                  }

                  if (isGif) {
                    $(imgs[i]).after('<span class="img-icon gif fp-tooltips" data-tooltip="查看GIF" data-placement="top">GIF</span>');
                  }
                }
              }

              isMedia = false;

              $(imgs[i]).attr("src", "");
            }
            ;
          }
          ;
          return div.innerHTML;
        },

        /* Convenience methods in jQuery namespace.           */
        /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

        belowthefold: function belowthefold(element, settings) {
          var fold;

          if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $(window).height()) + $(window).scrollTop();
          } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
          }

          return fold <= $(element).offset().top - settings.threshold;
        },

        rightoffold: function rightoffold(element, settings) {
          var fold;

          if (settings.container === undefined || settings.container === window) {
            fold = $(window).width() + $(window).scrollLeft();
          } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
          }

          return fold <= $(element).offset().left - settings.threshold;
        },

        abovethetop: function abovethetop(element, settings) {
          var fold;

          if (settings.container === undefined || settings.container === window) {
            fold = $(window).scrollTop();
          } else {
            fold = $(settings.container).offset().top;
          }

          return fold >= $(element).offset().top + settings.threshold + $(element).height();
        },

        leftofbegin: function leftofbegin(element, settings) {
          var fold;

          if (settings.container === undefined || settings.container === window) {
            fold = $(window).scrollLeft();
          } else {
            fold = $(settings.container).offset().left;
          }

          return fold >= $(element).offset().left + settings.threshold + $(element).width();
        },

        inviewport: function inviewport(element, settings) {
          return !this.belowthefold(element, settings) && !this.abovethetop(element, settings);
        }

      };

      exports["default"] = LazyLoad;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(162), __webpack_require__(163)))

    /***/
  },
  /* 209 */
  /***/ function (module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _models = __webpack_require__(168);

    var AnalyticUtil = {
      loaded: false,

      load: function load() {
        this.loaded = true;

        window._gaq = window._gaq || [];
        window._gaq.push(['_setAccount', 'UA-78440113-1']);

        (function (i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
          }, i[r].l = 1 * new Date();
          a = s.createElement(o), m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://ssl.google-analytics.com/ga.js', 'ga');
        // })(window,document,'script','https://cdn.quickwis.com/common/js/analytics/ext_ga.js','ga');

        // var _vds = _vds || [];
        // window._vds = _vds;
        // (function(){
        //     _vds.push(['setAccountId', 'a11dc02e31faf2cd']);

        //     var currentUser = UserModel.getLocalUser();
        //      if (currentUser && currentUser.uid > 0) {
        //        _vds.push(['setCS1', 'user_id', currentUser.uid]);
        //        _vds.push(['setCS2', 'mail', currentUser.mail]);
        //        _vds.push(['setCS3', 'nickname', currentUser.nickname]);
        //      }

        //     (function() {
        //         var vds = document.createElement('script');
        //         vds.type='text/javascript';
        //         vds.async = true;
        //         vds.src = 'https://cdn.quickwis.com/common/js/analytics/vds.js';
        //         var s = document.getElementsByTagName('script')[0];
        //         s.parentNode.insertBefore(vds, s);
        //     })();
        // })();
      },

      sendPage: function sendPage() {
        if (!this.loaded) this.load();

        if (window._gaq && _gaq.push) _gaq.push(['_trackPageview']);
      },

      sendEvent: function sendEvent() {
        if (!this.loaded) this.load();

        if (window._gaq && _gaq.push) _gaq.push(['_trackEvent']);
      }

    };

    exports['default'] = AnalyticUtil;
    module.exports = exports['default'];

    /***/
  },
  /* 210 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var DragMerge = {

        Common: {
          getEvent: (function (_getEvent) {
            function getEvent() {
              return _getEvent.apply(this, arguments);
            }

            getEvent.toString = function () {
              return _getEvent.toString();
            };

            return getEvent;
          })(function () {
            //ie/ff
            if (document.all) {
              return window.event;
            }
            func = getEvent.caller;
            while (func != null) {
              var arg0 = func.arguments[0];
              if (arg0) {
                if (arg0.constructor == Event || arg0.constructor == MouseEvent || typeof arg0 == "object" && arg0.preventDefault && arg0.stopPropagation) {
                  return arg0;
                }
              }
              func = func.caller;
            }
            return null;
          }),

          // 获取鼠标的位置
          getMousePos: function getMousePos(ev) {
            if (!ev) {
              ev = this.getEvent();
            }
            if (ev.pageX || ev.pageY) {
              return {
                x: ev.pageX,
                y: ev.pageY
              };
            }

            if (document.documentElement && document.documentElement.scrollTop) {
              return {
                x: ev.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft,
                y: ev.clientY + document.documentElement.scrollTop - document.documentElement.clientTop
              };
            } else if (document.body) {
              return {
                x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: ev.clientY + document.body.scrollTop - document.body.clientTop
              };
            }
          },

          // 获取判断 id
          // getItself: function(id) {
          //     return "string" == typeof id ? document.getElementsByClassName(id)[0] : id;
          // },

          // 获取视口的大小
          getViewportSize: {
            w: window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth,
            h: window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight
          },

          // document.all只有在IE中返回true，所用用来判断是否是IE浏览器
          isIE: document.all ? true : false,

          // 创建拖拽的DOM
          setOuterHtml: function setOuterHtml(obj, html) {
            var Objrange = document.createRange();
            obj.innerHTML = html;
            Objrange.selectNodeContents(obj);
            var frag = Objrange.extractContents();
            obj.parentNode.insertBefore(frag, obj);
            obj.parentNode.removeChild(obj);
          }
        },

        // 设置透明度
        SetOpacity: function SetOpacity(dragDiv, n) {
          if (this.Common.isIE) {
            dragDiv.filters.alpha.opacity = n;
          } else {
            dragDiv.style.opacity = n / 100;
          }
        },

        // 设置最大z-index
        // GetZindex: function(){
        //     var maxZindex = 0;
        //     var divs = document.getElementsByTagName("div");
        //     for (var z = 0; z < divs.length; z++) {
        //         maxZindex = Math.max(maxZindex, divs[z].style.zIndex);
        //     }
        //     return maxZindex;
        // },

        drag: function drag(selector, Options, updataArea, findInsertPosition, makeContent) {
          var Common = this.Common;

          // 可以拖拽的区域  计算点从左上角开始
          // maxRight 要减去被拖拽的元素宽度
          // bottom   要减去被拖拽的元素高度

          if (Options) {
            // 获取配置信息里的参数
            this.keepOrigin = Options.keepOrigin ? Options.keepOrigin == true || Options.keepOrigin == false ? Options.keepOrigin : false : false;
          } else {
            this.keepOrigin = false;
          }

          this.originDragDiv = null;
          this.tmpX = 0;
          this.tmpY = 0;
          this.moveable = false;

          var dragObj = this;

          $(document).on("mousedown", selector, function (e) {
            var ev = e || window.event || Common.getEvent();
            //只允许通过鼠标左键进行拖拽,IE鼠标左键为1 FireFox为0
            if (Common.isIE && ev.button == 1 || !Common.isIE && ev.button == 0) {
            } else {
              return false;
            }

            // 获取被拖拽的那个贴纸
            var dragDiv = $(this).closest(".note").get(0);

            if ($(dragDiv).hasClass("expand")) {
              return false;
            }

            $(dragDiv).addClass("dragging");
            //如果按住altKey，删除被拖拽的贴纸
            if (e.altKey || e.metaKey || e.ctrlKey) {
              $(dragDiv).addClass("copy");
            } else {
              $(dragDiv).removeClass("copy");
            }

            // 计算编辑器区域
            updataArea();

            // 创建一个div覆盖在编辑器窗口上
            var $coverDiv = $("<div><div>").css({
              "position": "absolute",
              "top": 0,
              "width": "100%",
              "height": "100%"
            });

            $("#editor").append($coverDiv);

            // 复制出来的拖拽框
            if (dragObj.keepOrigin) {
              dragObj.originDragDiv = document.createElement("div");
              $(dragObj.originDragDiv).css({
                "position": "fixed",
                "width": dragDiv.offsetWidth + "px",
                "height": dragDiv.offsetHeight + "px",
                "opacity": "0.5",
                "z-index": "1212121221"
              });

              dragObj.originDragDiv.appendChild($(dragDiv).clone().get(0));

              // 去掉拖拽的提示
              $(dragObj.originDragDiv).find(".handle").removeClass("fp-tooltips");

              document.body.appendChild(dragObj.originDragDiv);
            }

            // 是否在拖拽的标志
            dragObj.moveable = true;

            var downPos = Common.getMousePos(ev);
            var pos = dragDiv.getBoundingClientRect();

            // 点击点相对贴纸的位置
            dragObj.tmpX = downPos.x - pos.left;
            dragObj.tmpY = downPos.y - pos.top;

            if (Common.isIE) {
              dragDiv.setCapture();
            } else {
              window.captureEvents(Event.mousemove);
            }

            dragObj.SetOpacity(dragDiv, dragObj.opacity);

            //FireFox 去除容器内拖拽图片问题
            if (ev.preventDefault) {
              ev.preventDefault();
              ev.stopPropagation();
            }

            document.onmousemove = function (e) {
              if (dragObj.moveable) {
                var ev = e || window.event || Common.getEvent();
                //IE 去除容器内拖拽图片问题
                if (document.all) {
                  ev.returnValue = false;
                }

                var movePos = Common.getMousePos(ev);
                if ($.isFunction(findInsertPosition)) findInsertPosition(movePos);

                // 计算更新被拖拽元素的位置
                dragObj.originDragDiv.style.left = movePos.x - dragObj.tmpX + "px";
                dragObj.originDragDiv.style.top = movePos.y - dragObj.tmpY + "px";
              }
            };

            document.onmouseup = function (e) {

              if (dragObj.moveable) {

                var ev = e || window.event || Common.getEvent();

                if (Common.isIE) {
                  dragDiv.releaseCapture();
                } else {
                  window.releaseEvents(dragObj.originDragDiv.mousemove);
                }

                // 拖拽结束移除覆盖层  clone出来的元素也移除
                $(dragDiv).removeClass("dragging copy");
                $coverDiv.remove();
                $(dragObj.originDragDiv).remove();

                dragObj.moveable = false;
                dragObj.tmpX = 0;
                dragObj.tmpY = 0;

                var moveEndPos = Common.getMousePos(ev);
                if ($.isFunction(makeContent)) makeContent(e, moveEndPos, dragDiv);
              }
            };
          });
        }
      };

      exports["default"] = DragMerge;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 211 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      /**
       * 音频播放器
       */

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var AudioPlayer = {

        /**
         * 播放器dom
         *
         * @type dom对象
         */
        _player: null,

        _player_id: "audio_player",

        _eventHandler: null,

        /**
         * 初始化播放器dom
         *
         */
        initPlayer: function initPlayer(url) {

          this._player = document.getElementById(this._player_id);
          if (this._player) {
            return this._player;
          }

          this._player = document.createElement("audio");
          this._player.id = this._player_id;
          this._player.autoplay = true;

          document.body.appendChild(this._player);
          return this._player;
        },

        /**
         * 播放音频文件
         *
         * @param  string url [音频地址]
         * @param function onload [音频文件加载成功]
         * @param function onerror [音频文件加载失败]
         * @param function onupdate [音频文件播放过程中不停调用, 参数1为event,参数2为是否播放完成]
         */
        play: function play(url, onupdate) {
          onupdate = $.isFunction(onupdate) ? onupdate : function () {
          };

          var _this = this;

          //初始化播放器
          if (!this._player) {
            this.initPlayer();
          }

          //换了音频文件播放
          if (this._player.src && url != this._player.src) {
            //通知上一个音频播放处，播放已经结束
            if ($.isFunction(this._eventHandler)) this._eventHandler.apply(this._player, ["ended"]);
          }

          //记录此次的事件回调
          this._eventHandler = onupdate;

          //如果已经加载过，则直接播放
          if (this._player.src == url && !isNaN(this._player.duration)) {
            if ($.isFunction(onupdate)) onupdate.apply(this._player, ["loaded"]);
            this._player.currentTime = 0;
            this._player.play();
            return this;
          }

          this._player.onloadedmetadata = onupdate.bind(this._player, "loadedmetadata");
          this._player.onload = onupdate.bind(this._player, "load");
          this._player.onerror = onupdate.bind(this._player, "error");
          this._player.onplay = onupdate.bind(this._player, "play");
          this._player.onpause = onupdate.bind(this._player, "pause");
          this._player.oncanplaythrough = onupdate.bind(this._player, "canplaythrough");
          this._player.ondurationchange = onupdate.bind(this._player, "canplay");
          this._player.onloadstart = onupdate.bind(this._player, "loadstart");
          this._player.onloadeddata = onupdate.bind(this._player, "loadeddata");
          this._player.onplaying = onupdate.bind(this._player, "playing");
          this._player.oncanplay = onupdate.bind(this._player, "canplay");
          this._player.ontimeupdate = onupdate.bind(this._player, "timeupdate");
          this._player.onended = onupdate.bind(this._player, "ended");

          //播放新的音频
          this._player.src = url;

          this._player.play();
        },

        /**
         * 是否处于正在播放状态
         *
         * @param string url [音频文件]
         * @return {Boolean} [description]
         */
        isPlaying: function isPlaying(url) {
          if (!this._player) {
            return false;
          }

          if (url && this._player.src != url) {
            return false;
          }

          return !!!this._player.paused;
        },

        /**
         * 暂停播放
         *
         */
        pause: function pause() {
          if (!this._player) {
            return false;
            this.initPlayer();
          }

          this._player.pause();
        }

      };

      exports["default"] = AudioPlayer;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 212 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {

      // 本地化

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var LocaleUtil = {

        init: function init() {
          this.getLanguageJson();
        },

        // 判断本地的语言环境
        getLocalLanguage: function getLocalLanguage() {
          return window.navigator.language;
        },

        // 获取语言包
        getLanguageJson: function getLanguageJson() {

          var curLanguageData = null;

          // var curLanguage = this.getLocalLanguage();

          var langName = "zh";

          // if(curLanguage){
          // 	switch (curLanguage){
          // 		case "zh":
          // 		  	langName = "zh";
          // 			break;
          // 		case "zh-CN":
          // 			langName = "zh";
          // 		  break;
          // 		case "zh-TW":
          // 		  	langName = "zh_TW";
          // 		  	break;
          // 		case "en":
          // 		  	langName = "en";
          // 		  	break;
          // 		case "en-US":
          // 		  	langName = "en_US";
          // 		  	break;
          // 		case "uk":
          // 		  	langName = "en_UK";
          // 		  	break;
          // 	}
          // };

          var ROOTDIR = "/";
          if (window.safari && safari.extension) {
            ROOTDIR = safari.extension.baseURI;
          }

          var url = ROOTDIR + "_locales/" + langName + "/messages.json";

          var data = $.ajax({
            type: "GET",
            url: url,
            async: false
          });

          window._language = JSON.parse(data.responseText);
        },

        // 定义方法函数翻译数据
        translate: function translate(word) {
          if (word && window._language) {
            var newWord = window._language[word].message;
            return newWord;
          }

          return word;
        }

      };

      exports["default"] = LocaleUtil;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 213 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _utils = __webpack_require__(166);

      var FeedBackPanel = __webpack_require__(214);

      var RenderMixin = {
        _render: function _render() {

          var headerJSX = "";
          {/*根据登录的情况来显示头部菜单*/
          }
          if (this.state.user && this.state.user.uid) {
            headerJSX = React.createElement(_components.HeaderMenu, {
              user: this.state.user,
              showDropDown: this.showDropDown
            });
          } else {
            headerJSX = React.createElement(_components.LoginMenu, null);
          }
          ;

          // 获取快捷键
          var key = _utils.ExtUtil.getShortcut();

          return React.createElement(
          'div',
          {className: 'app-inner'},
          React.createElement(
          'div',
          {id: 'open_sider', onClick: this.handleShowApp},
          React.createElement('span', {
            className: 'fp-ext-switch fp-tooltips',
            'data-tooltip': "展开方片(" + key + ")",
            'data-placement': 'right'
          })
          ),
          React.createElement(
          'div',
          {className: 'main-content'},
          React.createElement(
          'div',
          {id: 'header'},
          headerJSX,
          React.createElement(
          'div',
          {className: 'ext-switch'},
          React.createElement(
          'a',
          {
            href: '#',
            className: 'icon-btn fp-tooltips',
            'data-tooltip': "收起方片(" + key + ")",
            'data-placement': 'left',
            onClick: _components.StaticFn.closeApp
          },
          React.createElement('span', {className: 'fp-ext-switch-nav'})
          )
          )
          ),
          React.createElement(
          'div',
          {id: 'tag_title'},
          React.createElement(_components.TagTitle, null)
          ),
          React.createElement(_components.Search, null),
          React.createElement(
          'div',
          {id: 'note_list'},
          React.createElement(_components.NoteList, {ref: 'note_list'})
          ),
          React.createElement(_components.LoadingAnim, null),
          React.createElement(_components.BackTop, {ref: 'backtop'}),
          React.createElement(FeedBackPanel, {ref: 'feedbackpanel'})
          ),
          React.createElement(_components.EmbedBrowsers, null),
          React.createElement(_components.Dialog, {ref: 'dialog'})
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /*在全屏状态下fullpage  展示 后加的展开侧栏按钮*/
      /*关闭插件按钮*/
      /*贴纸分类和数目显示*/
      /* 搜索表单 */
      /* 贴纸列表 */
      /* 加载动画 */
      /* 返回顶部 */
      /* 反馈组件 */
      /* 大窗口 */
      /* 弹窗 */
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 214 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $) {/*
	*	操作的系统消息反馈组件,提示操作成功或失败或者正在加载
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(215);
      var stateMixin = __webpack_require__(216);

      var FeedBackPanel = React.createClass({
        displayName: 'FeedBackPanel',

        mixins: [RenderMixin, stateMixin],

        render: function render() {
          return this._render();
        },

        getInitialState: function getInitialState() {
          return {
            types: "loading", //"warning" "loading" "success" ,"error"
            message: _utils.LocaleUtil.translate("set_success"),
            show: false //"false"
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          $(window).on("show_message", function (event, data) {
            if (data) {
              if (data.show) {
                _this._setState(data, function () {
                  if (data.autoClose) {
                    setTimeout(_this.closeFeedback, 1000);
                  }
                });
              } else {
                _this.closeFeedback();
              }
            }
          });
        },

        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
          if (!prevState.show && this.state.show) {
            //打开时
            _components.StaticFn.animAfterShow(this);
          }
        },

        closeFeedback: function closeFeedback() {
          var _this = this;
          _components.StaticFn.animBeforeHide(this, 310, function () {
            _this._setState({
              show: false
            });
          });
        }
      });

      exports['default'] = FeedBackPanel;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161)))

    /***/
  },
  /* 215 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _components = __webpack_require__(159);

      var RenderMixin = {
        _render: function _render() {
          var show = this.state.show ? "show" : "";
          show += this.state.animated ? " anim" : "";

          var typeName = this.state.types;
          var icon = "";
          if (typeName == "info") {
            icon = "fp-ext-info";
          } else if (typeName == "warning" || typeName == "error") {
            icon = "fp-ext-warning";
          } else {
            //默认是success
            icon = "fp-ext-success";
          }

          return React.createElement(
          "div",
          {id: "feedback_panel", className: this.state.types + " " + show},
          React.createElement(
          "div",
          {className: "main-cont"},
          React.createElement(
          "div",
          {className: "message"},
          React.createElement("span", {className: "ok-icon-font " + icon}),
          React.createElement(_components.LoadingAnim, null),
          this.state.message
          )
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 216 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, ReactDOM) {
      // 在执行setState之前先判断组件是否已挂载

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var stateMixin = {
        _setState: function _setState(obj, callback) {
          if (this.isMounted()) {
            this.setState(obj, callback);
          } else {
            _O.printStack();
          }
        },

        _findDom: function _findDom() {
          if (this.isMounted()) {
            return ReactDOM.findDOMNode(this);
          } else {
            _O.printStack();
            return null;
          }
        }
      };

      exports["default"] = stateMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(1)))

    /***/
  },
  /* 217 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       *  返回顶部组件
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _renderJs = __webpack_require__(218);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var stateMixin = __webpack_require__(216);
      var BackTop = React.createClass({
        displayName: 'BackTop',

        mixins: [_renderJs2['default'], stateMixin],

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        getInitialState: function getInitialState() {
          return {
            active: false
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;
          var $backTop = $(ReactDOM.findDOMNode(this));
          var ltop = $(window).height() - 88;
          var resizeTimeout;
          $backTop.css({"top": ltop});

          $backTop.on("click", function (event) {
            if (document.body.scrollTop > 0) {
              $(document.body).animate({scrollTop: 0}, 500);
            }
            $("#app").animate({scrollTop: 0}, 500);
          });

          $(window).on("resize", function () {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
              ltop = $(window).height() - 88;
              $backTop.css({"top": ltop});
            }, 300);
          });
        }
      });

      exports['default'] = BackTop;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 218 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var tplMixins = {
        renderFn: function renderFn() {
          var activeClassName = this.state.active ? "show" : "hide";
          return React.createElement(
          "div",
          {id: "back_top", className: activeClassName},
          React.createElement(
          "div",
          {className: "pos-cont"},
          React.createElement("span", {className: "fp-ext-up"})
          )
          );
        }
      };

      exports["default"] = tplMixins;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 219 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       *  弹出框组件，通过在window上面trigger 自定义事件dialog事件触发展示
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _renderJs = __webpack_require__(220);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var _utils = __webpack_require__(166);

      var stateMixin = __webpack_require__(216);

      var Dialog = React.createClass({
        displayName: 'Dialog',

        mixins: [_renderJs2['default'], stateMixin],

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        getInitialState: function getInitialState() {
          return {
            active: false,
            cancelText: _utils.LocaleUtil.translate("cancel"),
            confirmText: _utils.LocaleUtil.translate("confirm"),
            content: "",
            title: "",
            classNames: "",
            callback: null
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          //监听外部dialog命令
          $(window).on("dialog", function (event, data) {
            _this._setState(data, function () {
              if (data.callback) {
                $(".btn.confirm", ReactDOM.findDOMNode(_this)).on("click.dialog", data.callback);
              }
            });
          }).on("closedialog", function () {
            _this.close();
          });

          //防止聚焦
          $(ReactDOM.findDOMNode(this)).on("mousedown", function (event) {
            event.preventDefault();
          });
        },

        ui: {
          animID: null,

          animAfterShow: function animAfterShow(component) {
            if (this.animID) clearTimeout(this.animID);

            setTimeout(function () {
              component._setState({
                animated: true
              });
            }, 0);
          },

          animBeforeHide: function animBeforeHide(component, callback) {
            var animationTimeout = 310;

            component._setState({
              animated: false
            });

            this.animID = setTimeout(function () {
              if ($.isFunction(callback)) callback.call(null);
            }, animationTimeout);
          }
        },

        close: function close(event) {
          if (event) event.preventDefault();
          var _this = this;

          this.ui.animBeforeHide(this, function () {
            _this._setState({
              active: false
            });
          });
        },

        didClose: function didClose() {
          //复原
          this._setState({
            cancelText: _utils.LocaleUtil.translate("cancel"),
            confirmText: _utils.LocaleUtil.translate("confirm"),
            content: "",
            title: "",
            classNames: "",
            callback: null
          });

          //取消监听事件
          $(".btn.confirm", ReactDOM.findDOMNode(this)).off("click.dialog");
        },

        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
          if (prevState.active && !this.state.active) {
            //关闭时
            this.didClose();
          } else if (!prevState.active && this.state.active) {
            //打开时
            this.ui.animAfterShow(this);
          }
        }
      });

      exports['default'] = Dialog;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 220 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var tplMixins = {
        renderFn: function renderFn() {
          var classNames = "";

          classNames += this.state.classNames ? " " + this.state.classNames : "";
          classNames += this.state.animated ? " anim" : "";
          classNames += this.state.active ? " active" : "";

          return React.createElement(
          "div",
          {id: "dialog", className: classNames},
          React.createElement("div", {className: "overlay", onClick: this.close}),
          React.createElement(
          "div",
          {className: "wrapper"},
          React.createElement(
          "div",
          {className: "title-con"},
          React.createElement(
          "h1",
          {className: "title"},
          this.state.title
          )
          ),
          React.createElement(
          "div",
          {className: "desc-con"},
          React.createElement(
          "div",
          {className: "desc"},
          this.state.content
          )
          ),
          React.createElement("div", {className: "error"}),
          React.createElement(
          "div",
          {className: "btns"},
          React.createElement(
          "a",
          {className: "btn cancel", href: "#", onClick: this.close},
          _utils.LocaleUtil.translate("cancel")
          ),
          React.createElement(
          "a",
          {className: "btn confirm", href: "#"},
          this.state.confirmText
          )
          ),
          React.createElement(
          "a",
          {href: "#", className: "btn close", onClick: this.close},
          React.createElement("span", {className: "ok-icon-font ok-extension-close"})
          )
          )
          );
        }
      };

      exports["default"] = tplMixins;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 221 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  加载动画组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var RenderMixin = __webpack_require__(222);

      var LoadingAnim = React.createClass({
        displayName: 'LoadingAnim',

        mixins: [RenderMixin],

        render: function render() {
          return this._render();
        },

        shouldComponentUpdate: function shouldComponentUpdate() {
          return false;
        }

      });

      exports['default'] = LoadingAnim;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 222 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var RenderMixin = {
        _render: function _render() {
          return React.createElement(
          "div",
          {id: "loading_gif"},
          React.createElement("div", {className: "rect1"}),
          React.createElement("div", {className: "rect2"}),
          React.createElement("div", {className: "rect3"}),
          React.createElement("div", {className: "rect4"}),
          React.createElement("div", {className: "rect5"})
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /*<img src={_OKConfig.img_folder_path+"/loading_2.gif"} />*/
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 223 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {
      // 静态方法

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var StaticFn = {

        // 动画相关方法
        animID: null,

        animAfterShow: function animAfterShow(component) {
          //打开面板,可在此处做动画 @animation
          //如果是打开则把关闭延时去除
          if (this.animID) clearTimeout(this.animID);
          setTimeout(function () {
            // $(ReactDOM.findDOMNode(component)).addClass("anim");
            //由组件的render方法添加动画类
            component.setState({
              animated: true
            });
          }, 0);
        },

        animBeforeHide: function animBeforeHide(component, timer, callback) {
          var animationTimeout = timer;

          // $(ReactDOM.findDOMNode(component)).removeClass("anim");
          //由组件的render方法去除动画类
          component.setState({
            animated: false
          });

          this.animID = setTimeout(function () {
            if ($.isFunction(callback)) callback.call(null);
          }, animationTimeout);
        },

        /**
         *
         */
        closeApp: function closeApp() {
          var isFullPage = $("body").hasClass("full-page");

          //如果是在整页模式下，则只关闭笔记列表，否则隐藏整个应用
          if (isFullPage) {
            $("body").toggleClass("hide-sidebar");
            $(window).trigger("resize");
          } else {
            //通知扩展关闭/打开应用
            _utils.WindowMessager.notifyTop({command: "toggle_app"});
          }
        },

        handleFullPageOn: function handleFullPageOn(widget) {
          widget = widget || "";

          //通知扩展让页面撑满
          _utils.WindowMessager.notifyTop({command: "maximize_app", widget: widget});
        },

        handleFullPageOff: function handleFullPageOff(widget) {
          widget = widget || "";

          //通知扩展让页面收回到侧栏大小
          _utils.WindowMessager.notifyTop({command: "minimize_app", widget: widget});

          //如果当前页面侧栏被隐蔽则展示出来
          var sidebarHidden = $("body").hasClass("hide-sidebar");

          if (sidebarHidden) {
            $("body").removeClass("hide-sidebar");
          }
        }

      };

      exports["default"] = StaticFn;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161)))

    /***/
  },
  /* 224 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {/*
	*	操作的系统消息反馈组件,提示操作成功或失败或者正在加载
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(225);
      var stateMixin = __webpack_require__(216);

      var MergeTipsCover = React.createClass({
        displayName: 'MergeTipsCover',

        mixins: [RenderMixin, stateMixin],

        render: function render() {
          return this._render();
        },

        getInitialState: function getInitialState() {
          return {
            checked: false
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;
        },

        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        },

        setShowState: function setShowState(event) {
          event.preventDefault();

          this.props.handleClose();

          if (this.state.checked) {
            _models.LocalKVDB.set("dragMerge", true);
          } else {
            _models.LocalKVDB.set("dragMerge", false);
          }
        },

        //切换勾选框状态
        toggleChecked: function toggleChecked(event) {
          if (event) event.preventDefault();

          this._setState({
            checked: !this.state.checked
          });
        }

      });

      exports['default'] = MergeTipsCover;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 225 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {
          // var show = this.state.show ? "show" :"";
          //

          var classNames = "";
          classNames += this.state.checked ? " checked" : "";

          return React.createElement(
          'div',
          {id: 'merge_tips_cover', className: classNames},
          React.createElement(
          'div',
          {className: 'content'},
          React.createElement(
          'h3',
          null,
          _utils.LocaleUtil.translate("merge_notes")
          ),
          React.createElement(
          'div',
          {className: 'info'},
          React.createElement(
          'div',
          {className: 'left'},
          React.createElement('span', null),
          React.createElement(
          'p',
          null,
          _utils.LocaleUtil.translate("merge_tips_1")
          )
          ),
          React.createElement(
          'div',
          {className: 'right'},
          React.createElement('span', null),
          React.createElement(
          'p',
          null,
          _utils.LocaleUtil.translate("merge_tips_2")
          )
          )
          ),
          React.createElement(
          'div',
          {className: 'btn'},
          React.createElement(
          'a',
          {onClick: this.setShowState, href: '#'},
          _utils.LocaleUtil.translate("i_know")
          )
          ),
          React.createElement(
          'div',
          {id: 'iknow'},
          React.createElement(
          'a',
          {href: '#', onClick: this.toggleChecked},
          React.createElement('span', {className: 'fp-ext-done'})
          ),
          React.createElement(
          'span',
          {onClick: this.toggleChecked},
          _utils.LocaleUtil.translate("never_remind")
          )
          )
          )
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 226 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _O, _OKConfig, ReactDOM, $) {
      /**
       *  顶部下拉菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(227);
      var stateMixin = __webpack_require__(216);

      var DropDownMenu = React.createClass({
        displayName: 'DropDownMenu',

        mixins: [RenderMixin, stateMixin],

        //登出
        logoutAlpha: function logoutAlpha() {

          //登出之前要确保队列先跑完
          _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("data_upload"), 'loading', false);

          _models.NoteModel.flushQueue(function (finished) {
            _utils.NotificationUtil.hideMessage();

            var rest = _models.NoteModel.queueCount();
            if (rest > 0) {
              var answer = window.confirm(_utils.LocaleUtil.translate("upload_tips_f") + rest + _utils.LocaleUtil.translate("upload_tips_b"));

              if (!answer) {
                return false;
              }
            } else {
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("data_upload_complete"), 'success');
            }

            _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exiting"), 'loading', false);
            _models.UserModel.logout(function (data) {

              if (data.status == 1) {
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exit_success"), 'success');
                _utils.WindowMessager.notifyTabs('user-changed', Date.now());

                //登出成功处新页面
                location.reload();
              } else {
                //登出失败
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exit_error"), 'error');
              }
            });
          });
        },

        /**
         * 退出登录
         *
         * @return {[type]} [description]
         */
        logout: function logout() {

          //标签立即同步
          var tagsLength = _models.SyncManager.getInstance('tag').start(true);

          //贴纸立即同步
          var notesLength = _models.SyncManager.getInstance('note').start(true);

          var logout = function logout() {
            //正在登出
            _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exiting"), 'loading', false);

            _models.UserModel.logout(function (data) {

              if (data.status == 1) {
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exit_success"), 'success');

                //通知其他tab刷新页面
                _utils.WindowMessager.notifyTabs('user-changed', Date.now());

                //登出成功处新页面
                location.reload();
              } else {
                //登出失败
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("exit_error"), 'error');
              }
            });
          };

          //没有数据需要同步,则直接退出
          if (tagsLength == 0 && notesLength == 0) {

            logout();
          } else {
            _O.debug("退出同步:", "有" + tagsLength + "个标签," + notesLength + "个贴纸需要被同步");

            //登出之前要确保队列先跑完
            _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("data_upload"), 'loading', false);

            _utils.WindowMessager.listenPageEvent('sync-finished', function () {

              //同步完成
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("data_upload_complete"), 'success');

              logout();
            });
          }
        },

        //新用户完善信息,相当于注册
        setupAccount: function setupAccount(event) {
          event.preventDefault();
          var _this = this;

          var currentUser = _models.UserModel.getLocalUser();
          var currentUid = currentUser.uid;

          _utils.LoginUtil.login('edit', function (uid, userdata) {

            var newProfile = _models.UserModel.getLocalUser();

            if (newProfile.mail) {

              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("account_set_success"));

              //如果是更新账户成功,则进行刷新
              _models.AppModel.clearLocalDB();

              _models.UserModel.setLocalUser(newProfile);

              location.reload();

              //拉取新的贴纸数据
              //WindowMessager.notifyCurrentPage('pull-updates');
            }

            _this._setState({
              profile: newProfile
            });
          });
        },

        avatarError: function avatarError() {
          ReactDOM.findDOMNode(this.refs.avatar).src = _OKConfig.user_default_avatar;
        },

        // 在头像上面展示去个人页面的链接图标
        showHomeLogo: function showHomeLogo() {
          $("div.user-wrap .masking").removeClass("dn");
        },

        hiddenHomeLogo: function hiddenHomeLogo() {
          $("div.user-wrap .masking").addClass("dn");
        },

        render: function render() {
          return this._render();
        }

      });

      exports['default'] = DropDownMenu;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(162), __webpack_require__(163), __webpack_require__(1), __webpack_require__(161)))

    /***/
  },
  /* 227 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _OKConfig) {
      /**
       *  顶部下拉菜单组件
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {
          var user = this.props.user;
          var uid = this.props.user.uid;
          var link = "http://funp.in/user/" + uid;
          var version = _utils.ExtUtil.getCurrentExtVersion() || "";

          //完善用户邮箱
          var email = user.mail ? user.mail : React.createElement(
          'a',
          {href: '#', className: 'perfect', onClick: this.setupAccount},
          _utils.LocaleUtil.translate("add_mailbox")
          );

          return React.createElement(
          'div',
          {className: 'drop-down-menu'},
          React.createElement('span', {className: 'fp-icon-font fp-ext-close', onClick: this.props.showDropDown}),
          React.createElement(
          'div',
          {className: 'user-info'},
          React.createElement(
          'div',
          {className: 'avatar'},
          React.createElement(
          'div',
          {className: 'user-wrap', onMouseEnter: this.showHomeLogo, onMouseLeave: this.hiddenHomeLogo},
          React.createElement('img', {
            ref: 'avatar',
            src: user.avatar || _OKConfig.user_default_avatar,
            onError: this.avatarError
          }),
          React.createElement(
          'div',
          {className: 'masking dn'},
          React.createElement(
          'a',
          {href: link, target: 'blank'},
          React.createElement('span', {className: 'fp-icon-font fp-ext-user'})
          )
          )
          )
          ),
          React.createElement(
          'div',
          {className: 'nick-name'},
          user.nickname || _utils.LocaleUtil.translate("no_nickname")
          ),
          React.createElement(
          'div',
          {className: 'email'},
          email
          )
          ),
          React.createElement(
          'ul',
          {className: 'op-menu'},
          React.createElement(
          'li',
          null,
          React.createElement(
          'a',
          {className: 'settings', href: _OKConfig.origin + "/settings", target: '_blank'},
          _utils.LocaleUtil.translate("settings")
          )
          ),
          React.createElement(
          'li',
          null,
          React.createElement(
          'a',
          {
            className: 'help',
            href: 'http://funp.in/paper/ba7a38d34f2f45112b7bdc746fc1f7ea24?u=1112729',
            target: '_blank'
          },
          _utils.LocaleUtil.translate("help")
          )
          ),
          React.createElement(
          'li',
          null,
          React.createElement(
          'a',
          {
            className: 'feedback',
            href: _OKConfig.origin + "/feedback?product_version=" + version + "&product=extension",
            target: '_blank'
          },
          _utils.LocaleUtil.translate("feedback")
          )
          ),
          React.createElement(
          'li',
          null,
          React.createElement(
          'a',
          {className: 'logout', onClick: this.logout, href: '#'},
          _utils.LocaleUtil.translate("logout")
          )
          )
          )
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(163)))

    /***/
  },
  /* 228 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM, _OKConfig) {
      /**
       *  顶部菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(229);
      var stateMixin = __webpack_require__(216);

      var HeaderMenu = React.createClass({
        displayName: 'HeaderMenu',

        mixins: [RenderMixin, stateMixin],

        /**
         * 组件初始化
         */
        getInitialState: function getInitialState() {
          return {
            isDropDown: false,
            isCreated: false
          };
        },

        /**
         * 控制创建贴纸面板的展示
         */
        showEditingPanel: function showEditingPanel() {
          this._setState({
            isCreated: !this.state.isCreated
          });
        },

        /**
         * 控制同步信息设置面板的展示
         */
        showDropDown: function showDropDown(event) {
          event.preventDefault();
          this._setState({
            isDropDown: !this.state.isDropDown
          });
        },

        /**
         * 组件挂载到dom之前
         */
        componentWillMount: function componentWillMount() {
          var _this = this;

          //模拟失焦
          $(document).on("mousedown.fakeblur", function (event) {
            var target = event.target;

            //如果当前是展开状态，但是点击的不是下拉菜单中的菜单，则关闭下拉菜单
            var DropDownMenu = _this.refs.DropDownMenu;
            if (_this.state.isDropDown) {
              if (!$.contains(ReactDOM.findDOMNode(DropDownMenu), target)) {
                _this.showDropDown(event);
              }
            }
          });
        },

        avatarError: function avatarError() {
          ReactDOM.findDOMNode(this.refs.avatar).src = _OKConfig.user_default_avatar;
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = HeaderMenu;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1), __webpack_require__(163)))

    /***/
  },
  /* 229 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _OKConfig) {
      /**
       *  顶部菜单组件
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {
          var user = this.props.user;

          var uid = this.props.user.uid;

          var link = "http://funp.in/user/" + uid;

          var DropDownMenuJSX, CreateNoteJSX;

          {/*判断下拉菜单是否显示*/
          }
          if (this.state.isDropDown) {
            DropDownMenuJSX = React.createElement(_components.DropDownMenu, {
              user: user,
              ref: 'DropDownMenu',
              showDropDown: this.showDropDown
            });
          }
          ;

          // var CreateNoteJSX ="";
          {/*判断创建贴纸是否显示*/
          }
          if (this.state.isCreated) {
            CreateNoteJSX = React.createElement(_components.CreateNote, {
              ref: 'CreateNote',
              showEditingPanel: this.showEditingPanel
            });
          }
          ;

          return React.createElement(
          'div',
          {id: 'header_menu'},
          React.createElement(
          'div',
          {className: 'left'},
          React.createElement(
          'a',
          {
            href: '#',
            className: 'jump fp-tooltips',
            'data-tooltip': _utils.LocaleUtil.translate("ext_op_menu"),
            'data-placement': 'bottom',
            onClick: this.showDropDown
          },
          React.createElement('img', {
            className: 'avatar',
            ref: 'avatar',
            src: user.avatar || _OKConfig.user_default_avatar,
            onError: this.avatarError
          })
          ),
          React.createElement(
          'span',
          {className: 'nickname'},
          user.nickname || _utils.LocaleUtil.translate("no_nickname")
          )
          ),
          React.createElement(
          'div',
          {className: 'home'},
          React.createElement(
          'a',
          {
            href: link,
            target: 'blank',
            className: 'home-page  fp-tooltips',
            'data-tooltip': _utils.LocaleUtil.translate("personal_homepage"),
            'data-placement': 'bottom'
          },
          React.createElement('span', {className: 'fp-icon-font fp-ext-user'})
          )
          ),
          React.createElement(
          'div',
          {className: 'right'},
          React.createElement(
          'a',
          {
            href: '#',
            className: 'create-note-btn  fp-tooltips',
            'data-tooltip': _utils.LocaleUtil.translate("create_note"),
            'data-placement': 'bottom',
            onClick: this.showEditingPanel
          },
          React.createElement('span', {className: 'fp-icon-font fp-ext-create'})
          )
          ),
          CreateNoteJSX,
          DropDownMenuJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /*下拉菜单*/
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(163)))

    /***/
  },
  /* 230 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  顶部登录菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(231);
      var stateMixin = __webpack_require__(216);

      var LoginMenu = React.createClass({
        displayName: 'LoginMenu',

        mixins: [RenderMixin, stateMixin],

        /**
         * 组件初始化
         */
        getInitialState: function getInitialState() {
          return {
            isCreated: false
          };
        },

        /**
         * 控制创建贴纸面板的展示
         */
        showEditingPanel: function showEditingPanel(event) {
          if (event) event.preventDefault();
          this._setState({
            isCreated: !this.state.isCreated
          });
        },

        login: function login(event) {
          event.preventDefault();

          _utils.LoginUtil.login(false, function (data) {
            if (data.status == 1) {
              //登录成功
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_success"));
              _utils.WindowMessager.notifyTabs('user-changed', Date.now());
              location.reload();
            } else {
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_error") + ':' + data.status, 'error');
            }
          });
        },

        register: function register(event) {
          event.preventDefault();

          _utils.LoginUtil.login(true, function (data) {
            if (data.status == 1) {
              //注册成功
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_success"));
              _utils.WindowMessager.notifyTabs('user-changed', Date.now());
              location.reload();
            } else {
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("register_error") + ':' + data.status, 'error');
            }
          });
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = LoginMenu;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 231 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  顶部登录菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {

          var CreateNoteJSX = "";
          {/*判断创建贴纸是否显示*/
          }
          if (this.state.isCreated) {
            CreateNoteJSX = React.createElement(_components.CreateNote, {
              ref: 'CreateNote',
              showEditingPanel: this.showEditingPanel
            });
          }
          ;

          return React.createElement(
          'div',
          {id: 'login_menu'},
          React.createElement(
          'div',
          {className: 'left'},
          React.createElement(
          'a',
          {className: 'login', onClick: this.login, href: '#'},
          _utils.LocaleUtil.translate("login")
          ),
          React.createElement(
          'span',
          null,
          '/'
          ),
          React.createElement(
          'a',
          {className: 'register', onClick: this.register, href: '#'},
          _utils.LocaleUtil.translate("register")
          )
          ),
          React.createElement(
          'div',
          {className: 'right'},
          React.createElement(
          'a',
          {
            href: '#',
            className: 'create-note-btn fp-tooltips',
            'data-tooltip': _utils.LocaleUtil.translate("create_note"),
            'data-placement': 'bottom',
            onClick: this.showEditingPanel
          },
          React.createElement('span', {className: 'fp-icon-font fp-ext-create'})
          )
          ),
          CreateNoteJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 232 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _OKConfig, ReactDOM) {
      /**
       *  顶部登录菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      var RenderMixin = __webpack_require__(233);
      var stateMixin = __webpack_require__(216);

      var CreateNote = React.createClass({
        displayName: 'CreateNote',

        statics: {
          /**
           * 保存来自扩展端(index.js)的贴纸
           *
           * @param object note 贴纸对象
           */
          relCreateNote: function relCreateNote(note, callback, maximize) {
            // 先返回顶部然后再创建新贴纸
            if ($("#app").scrollTop() > 0) {
              $("#app").animate({scrollTop: 0}, 200);
            }

            var newNote = this.buildNoteModel(note);

            //如果当前在搜索界面,则退出搜索
            if ($("body").hasClass("searching")) {
              _utils.WindowMessager.notifyCurrentPage('exit-search');
            }

            //通知界面数据已经被更新
            this.layoutNote(newNote, maximize);

            //通知插件公开笔记创建成功
            _utils.WindowMessager.notifyTop({
              command: "note_saved",
              tmpId: note.tmpId,
              note: newNote
            });

            //需要分享,则即时在服务器端创建
            if (note.publyc == 1 && note.share) {

              //用户已经登录，可以分享
              var user = _models.UserModel.getLocalUser();
              if (user && user.uid) {
                _models.NoteModel.timelyCreate(newNote, function (data) {

                  if (data.status == 1) {
                    //通知插件公开笔记创建成功，将公开笔记的url和临时id传过去
                    _utils.WindowMessager.notifyTop({
                      command: "share_note",
                      url: _models.NoteModel.getNoteUrl(newNote.gnid),
                      tmpId: note.tmpId
                    });
                  } else {

                    //分享失败

                  }
                });

                //用户还未登陆的情况
              } else {
                _utils.WindowMessager.notifyTop({
                  command: "share_note",
                  url: null,
                  tmpId: note.tmpId
                });

                alert("抱歉,使用此功能需要先登录");

                _utils.LoginUtil.login(false, function (data) {
                  if (data.status == 1) {
                    //登录成功
                    _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_success"));
                    _utils.WindowMessager.notifyTabs('user-changed', Date.now());
                    location.reload();
                  } else {
                    _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_error") + ':' + data.status, 'error');
                  }
                });

                _models.NoteModel.insert(newNote, callback);
              }
            } else {
              _models.NoteModel.insert(newNote, callback);
            }
          },

          buildNoteModel: function buildNoteModel(note) {
            var originalContent = note.content;

            var content = _utils.ContentUtil.filterContentFromOutside(note.content);

            // 贴纸中的链接
            var links = _utils.ContentUtil.getLinksInContent(originalContent);
            /**
             * 获取摘要(text,feature_img,feature_video)
             */
            // 贴纸摘要
            var summaryData = _utils.ContentUtil.getSummaryData(content);

            // 贴纸摘要图片等图片上传完成之后再进行设置保存
            // if (summaryData.feature_img) {
            //     summaryData.feature_img.uploaded = false;
            //     newNote.images = summaryData.feature_img;
            // }

            // 贴纸摘要视频
            // if (summaryData.feature_video) {
            //     newNote.images.push(summaryData.feature_video);
            // }

            var created = _utils.TimeUtil.time();
            var sortby = _models.AppModel.generateSortby();

            var gnid = _models.AppModel.generateID(summaryData.text || "", sortby);

            var newNote = {
              gnid: gnid,
              title: note.title,
              summary: summaryData.text || '',
              content: content,
              source: note.source || "",
              device: note.device || (window._ENV && _ENV.device ? _ENV.device : ""),
              publyc: note.publyc == 0 ? 0 : 1,
              removed: 0,
              method: note.method || "",
              created: created,
              modified: created,
              sortby: sortby,
              bookmarks: links,
              images: null,
              imglist: note.images || []
            };

            // 无标题则从内容中取
            if (!newNote.title) {
              newNote.title = _utils.ContentUtil.getTitle(newNote.content);
            }

            if ($.isArray(note.tags)) {
              newNote.tags = note.tags;
            } else {
              var notDefaultTag = _components.NoteList._currentGtid != _OKConfig.ALL_TAG_ID && _components.NoteList._currentGtid != _OKConfig.NO_TAG_ID && _components.NoteList._currentGtid != _OKConfig.TRASHBIN_ID;

              //贴纸的标签
              if (notDefaultTag && _models.TagModel.getTagByGtid(_components.NoteList._currentGtid)) {
                newNote.tags = [_components.NoteList._currentGtid];
              }
            }

            return newNote;
          },

          layoutNote: function layoutNote(newNote, maximize) {
            var uiNote = $.extend({is_new: true}, newNote);
            if (maximize === "maximize") {
              uiNote = $.extend({maximized: true}, uiNote);
            }
            _utils.WindowMessager.notifyTabs('data-changed', {type: "new", notes: [uiNote]});
          }
        },

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            active: false,
            publyc: 0
          };
        },

        //延时保存内容
        deferSave: function deferSave(delay) {
          var _this = this;
          //内容发生改变,定时保存
          if (_this.constructor._saveTimeout) clearTimeout(_this.constructor._saveTimeout);
          _this.constructor._saveTimeout = setTimeout(function () {
            _this.saveContent();
          }, delay || _OKConfig.save_delay);
        },

        /**
         * 保存内容
         */
        saveContent: function saveContent() {
          var _this = this;
          var tempNote = _models.LocalKVDB.get("temp_note", {});
          var content = this.getContent();
          // 判断贴纸是否被创建
          // 没创建: 创建，
          // 已经创建择更新
          // 如果被创建 就update
          var newNote = null;
          if (tempNote && tempNote.gnid) {
            if (tempNote.content !== content || tempNote.publyc !== this.state.publyc) {
              var data = {
                gnid: tempNote.gnid,
                sortby: tempNote.sortby,
                content: content,
                publyc: _this.state.publyc,
                title: _utils.ContentUtil.getTitle(content)
              };
              newNote = _models.NoteModel.update(data);
            }
          } else {
            newNote = this.constructor.buildNoteModel({content: content});
            newNote = _models.NoteModel.insert(newNote);
          }

          _models.LocalKVDB.set("temp_note", newNote);
        },

        //保存笔记,tags需加上当前打开的标签(非全部或者垃圾桶或无标签),
        createNote: function createNote(event, maximize) {
          event.preventDefault();

          // 清除延时保存
          if (this.constructor._saveTimeout) {
            clearTimeout(this.constructor._saveTimeout);
          }

          //得到笔记内容，
          var content = this.getContent();
          var note = {content: content};
          //为笔记添加私密属性
          note.publyc = this.state.publyc;

          var tempNote = _models.LocalKVDB.get("temp_note", {});
          // 判断贴纸是否被创建
          // 没创建: 创建， relCreateNote
          // 已经创建, 刷到界面
          if (tempNote && tempNote.gnid) {
            if (tempNote.content !== content || tempNote.publyc !== this.state.publyc) {
              var data = {
                gnid: tempNote.gnid,
                sortby: tempNote.sortby,
                content: tempNote.content,
                publyc: this.state.publyc,
                title: _utils.ContentUtil.getTitle(content)
              };

              tempNote = _models.NoteModel.update(data);
            }

            //通知界面数据已经被更新
            this.constructor.layoutNote(tempNote, maximize);
          } else {
            //数据中心保存笔记,App组件接收到数据变化通知 (insert + layoutNote)
            this.constructor.relCreateNote(note, null, maximize);
          }

          _models.LocalKVDB.deleteKey("temp_note");
          this.exit();
        },

        componentDidMount: function componentDidMount() {
          var _this = this;
          var editableDom = $("#create_note .editable");

          $(editableDom).focus();

          //监听ReactDOM无法监听的事件
          $(editableDom).on("keydown", this.handleKeydown);
          $(editableDom).on("paste", this.handlePaste);

          //创建贴纸面板滚到最下面的时候禁止往下滚动，滚动到最上面的时候禁止继续往上滚
          _utils.Ui.preventOverscroll(".editable");

          //监听创建面板滚动事件
          $(".editable").on("scroll", function () {
            var _this = this;

            $(".editable").removeClass(_OKConfig.no_scroll_state_class);

            if (_this.constructor.hoverTimer) clearTimeout(_this.constructor.hoverTimer);
            _this.constructor.hoverTimer = setTimeout(function () {
              $(".editable").addClass(_OKConfig.no_scroll_state_class);
            }, 400);
          });

          // 防止在切换私密的时候编辑区域失焦
          $("#private_btn").on("mousedown", "a", function (event) {
            event.preventDefault();
          });

          // 监听输入框变化 实时保存
          $(".editable").on("input paste", function () {
            _this.deferSave();
          });

          _models.LocalKVDB.set("temp_note", {});
        },

        componentWillUnmount: function componentWillUnmount() {
          _utils.Ui.stopPreventOverScroll(".editable");
        },

        // 创建贴纸的时候  点击展开
        maximizeEditor: function maximizeEditor(event) {
          event.preventDefault();
          this.createNote(event, "maximize");
        },

        /**
         * 处理剪贴板事件
         */
        handlePaste: function handlePaste(event) {
          var _this = this;
          event = event.originalEvent;
          var dt = event.clipboardData;

          //得到光标现在所处的位置
          var dom = _utils.CaretUtil.getCaretContainer() || $("#create_note .editable");

          _utils.ContentUtil.handleClipdataPaste(event, function (data) {
            if (data && data.html) {
              var $editableDom = $("#create_note .editable");
              _utils.ContentUtil.pasteHtmlInEditable(data.html, $editableDom.get(0), _this.insertContent);
              // 手动触发input事件，因为粘贴图片的时候，需要一个等待的过程，当时没有办法取到内容，手动触发延时保存
              $editableDom.trigger('input');
            }
          }, function (e) {
            //如果是图片则有上传progress
            //将progress UI放入dom结构
            //确定progress UI相对于贴纸容器的位置
            //进度条的调整
            var progressID = e.okprogressID;
            var bar = _this.progressBarExist(progressID);

            var percentage = parseInt(e.loaded / e.total * 100, 10) + "%";

            if (bar) {
              $(bar).find('.pro').css({'width': percentage});

              if (percentage == '100%') {
                $(bar).remove();
              }
            } else {
              _this.insertProgressBar(progressID, percentage);
            }
          });
        },

        //上传进度条是否存在
        progressBarExist: function progressBarExist(id) {
          var dom = ReactDOM.findDOMNode(this);

          var $bar = $("#upload_" + id, dom);

          return $bar.length > 0 && $bar.get(0);
        },

        //插入上传进度条
        insertProgressBar: function insertProgressBar(progressID, percentage) {
          var placeholderId = progressID;

          var bar = $("<div>", {
            "class": "uploadbar",
            "data-id": placeholderId,
            "id": "upload_" + placeholderId
          }).append($("<div>", {}).append($("<p>", {"text": _utils.LocaleUtil.translate("uploading")})).append(
          // bar
          $("<div>", {"class": "bar"}).append(
          //progress
          $("<div>", {"class": "pro", "style": "width:" + (percentage || 0), "text": "uploading"}))));

          this.insertContent($('<div>').append(bar).html());

          if (percentage == '100%') {
            $("#upload_" + placeholderId).remove();
          }

          return placeholderId;
        },

        //在光标处插入内容
        insertContent: function insertContent(content) {
          if (content) {
            _utils.CaretUtil.pasteHtmlAtCaret(content);
          }
        },

        //得到输入框中的内容
        getContent: function getContent() {
          var content = $("#create_note .editable").html();
          //去除代码中的空格
          content = _utils.ContentUtil.removeSpaceBetweenTags(content);

          return content;
        },

        //监听键盘输入
        handleKeydown: function handleKeydown(event) {
          if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
            //ctrl + s 阻止默认事件
            event.preventDefault();
            //保存内容
            this.createNote(event);
          }
        },

        //退出编辑
        exit: function exit() {
          //清空容器
          var editable = $(ReactDOM.findDOMNode(this)).find(".editable");
          $(editable).empty();
          $(editable).blur();

          //若保存内容成功需要恢复一些state,
          this._setState({
            publyc: 0,
            active: false
          });

          this.props.showEditingPanel();
        },

        // 取消编辑
        cancelEdit: function cancelEdit(event) {
          event.preventDefault();
          this.exit();
          var tempNote = _models.LocalKVDB.get("temp_note", {});
          if (tempNote.gnid) {
            var data = {
              gnid: tempNote.gnid,
              sortby: tempNote.sortby,
              expunged: 1
            };
            _models.NoteModel.update(data);
          }
        },

        //切换勾选框的私密和公开状态
        togglePrivate: function togglePrivate(event) {
          event.preventDefault();
          this._setState({
            publyc: this.state.publyc == 0 ? 1 : 0
          });
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = CreateNote;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(163), __webpack_require__(1)))

    /***/
  },
  /* 233 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  顶部登录菜单组件
       */
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {

          var classNames = "";
          classNames += this.state.active ? " active" : "";
          classNames += this.state.publyc == 0 ? " private" : "";

          return React.createElement(
          "div",
          {id: "create_note", className: classNames},
          React.createElement(
          "form",
          {className: "form"},
          React.createElement(
          "div",
          {className: "field"},
          React.createElement("div", {
            className: "editable hover",
            contentEditable: "true",
            tabIndex: "0",
            spellCheck: "false"
          })
          ),
          React.createElement(
          "div",
          {className: "create-op"},
          React.createElement(
          "div",
          {id: "save_btn", className: "btn"},
          React.createElement("input", {
            onClick: this.createNote,
            type: "submit",
            value: _utils.LocaleUtil.translate("save")
          })
          ),
          React.createElement(
          "div",
          {id: "private_btn"},
          React.createElement(
          "a",
          {href: "#", onClick: this.togglePrivate},
          React.createElement("span", {className: "fp-icon-font fp-ext-done"})
          ),
          React.createElement(
          "span",
          {onClick: this.togglePrivate},
          _utils.LocaleUtil.translate("secret")
          )
          ),
          React.createElement(
          "a",
          {
            onClick: this.maximizeEditor,
            className: "expend-editor fp-tooltips",
            "data-tooltip": _utils.LocaleUtil.translate("unfold_editor"),
            "data-placement": "top",
            href: "#"
          },
          React.createElement("span", {className: "icon-font fp-ext-expand"})
          )
          ),
          React.createElement("a", {onClick: this.cancelEdit, className: "cancel-btn fp-ext-close-small", href: "#"})
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 234 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _OKConfig, ReactDOM) {
      /**
       *搜索框
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var stateMixin = __webpack_require__(216);
      var RenderMixin = __webpack_require__(235);

      var Search = React.createClass({
        displayName: 'Search',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            focus: false
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          var searchDom = $("#search").get(0);

          //模拟失焦
          $(document).on("mousedown.fakeblur-tags", function (event) {
            var target = event.target;

            //如果标签面板 或者历史搜索 为展开状态，但是点击的地方又不是
            if (_this.state.focus) {
              if (!$.contains(searchDom, target)) {
                _this.closeTagPanel();
              }
            }
          });

          //窗口失焦的时候关闭标签搜索面板 历史贴纸搜索面板
          _utils.WindowMessager.listenPageEvent("window-blur", function () {
            if (_this.state.focus) {
              _this.closeTagPanel();
            }
            ;
          });

          //点击切换标签/分类
          $("#search").on("click", '.search-tag-panel a.tag', function (event) {
            var gtid = $(this).data("gtid");

            //对垃圾桶和别的标签分开处理
            if ($(this).text() == _OKConfig.TRASHBIN_NAME) {
              var text = "#" + $(this).text();
            } else {
              var text = $(this).text();
            }

            $("#keywords_field").blur();
            $("#keywords_field").val(text);

            _this.closeTagPanel();

            //打开标签
            if (gtid != undefined) _utils.WindowMessager.notifyCurrentPage("switch-tag", gtid);
          });

          //键盘上下切换  回车切换标签
          var index = -1;
          $("#keywords_field").on("keydown", function (event) {
            if ($(".search-tag-panel li.active").length == 0) {
              index = -1;
            }

            var total_number = $(".search-tag-panel").find('li').length;

            // 38 键盘上键 40 键盘下键 13 回车
            if (event.keyCode == '38' || event.keyCode == '40' || event.keyCode == '13') {

              //得到当前列表每个元素的高度
              var list_height = $(".search-tag-panel li").height();
              var $divider = $(".search-tag-panel .divider");
              var divider_height = $divider.outerHeight(true);

              //得到搜索面板的高度和距离文档顶部的距离值
              var $panel = $('.search-tag-panel');
              if ($panel.length > 0) {
                var panel_height = $panel.height();
                var panel_top = $panel.offset().top;
              }

              //向上翻
              if (event.keyCode == '38') {
                index--;
                if (index < 0) index = total_number - 1;
                var $li = $panel.find("li:eq(" + index + ")");
                $li.addClass('active').siblings().removeClass('active');
                //得到当前高亮的元素记录文档顶部的高度
                var current_top = $('li.active').offset().top;

                if (current_top >= panel_top + panel_height - list_height) {
                  if ($('li.active').prev().hasClass('divider')) {

                    $panel.scrollTop(current_top - list_height - divider_height);
                  } else {
                    $panel.scrollTop($panel.scrollTop() - list_height);
                  }
                } else if (current_top < panel_top) {
                  $panel.scrollTop($panel.scrollTop() - list_height);
                }

                //向下翻
              } else if (event.keyCode == '40') {
                index++;

                //切换到最下面标签，则滚回第一个标签
                if (index == total_number) {
                  index = 0;
                  $panel.scrollTop(0);

                  var $li = $panel.find("li:eq(" + index + ")");
                  $li.addClass('active').siblings().removeClass('active');
                } else {

                  var $li = $panel.find("li:eq(" + index + ")");
                  $li.addClass('active').siblings().removeClass('active');

                  var current_top = $('li.active').offset().top;

                  //切换到不可见标签的前一个标签就滚动面板，使不可见的进入可见区域
                  if (current_top >= panel_top + panel_height - list_height) {
                    if ($('li.active').next().hasClass('divider')) {
                      $panel.scrollTop($panel.scrollTop() + list_height + divider_height + divider_height + 4);
                    } else {
                      $panel.scrollTop($panel.scrollTop() + list_height);
                    }
                  }
                }

                //回车
              } else if (event.keyCode == '13') {

                // 当标签有active类和搜索框以#号开头时

                if ($panel.find('li').hasClass('active') || $("#keywords_field").val().indexOf("#") == 0) {

                  if ($panel.find('li').hasClass('active')) {

                    var ele = $panel.find("li.active")[0];
                  }

                  $(this).blur();

                  if ($(ele).text() == _OKConfig.TRASHBIN_NAME) {
                    var text = "#" + $(".tag", ele).text();
                  } else {
                    var text = $(".tag", ele).text();
                  }

                  $("#keywords_field").val(text);
                  index = -1;
                  _this.closeTagPanel();

                  //打开对应标签
                  var gtid = $(ele).find("a").data('gtid');
                  if (gtid != undefined) _utils.WindowMessager.notifyCurrentPage("switch-tag", gtid);
                }
              }
            }
          });
        },

        /**
         * 得到搜索关键字
         */
        getKeywords: function getKeywords() {
          return ReactDOM.findDOMNode(this.refs.keywords).value;
        },

        /**
         * 退出搜索
         *
         */
        exitSearch: function exitSearch(event) {
          event.preventDefault();

          ReactDOM.findDOMNode(this.refs.keywords).value = "";

          _utils.WindowMessager.notifyCurrentPage("exit-search");
        },

        // onSearch: function(event){
        //     event.preventDefault();
        //     var keywords = this.getKeywords();
        //     if(keywords) WindowMessager.notifyCurrentPage("search",keywords);
        // },

        // 关闭标签搜索面板
        closeTagPanel: function closeTagPanel() {
          this._setState({
            focus: false
          });
        },

        inputFocus: function inputFocus(event) {
          event.preventDefault();
          $('#search_box').addClass('search-focus');
          // 当前输入框内的文本第一个为#号时
          if ($("#keywords_field").val().indexOf("#") == '0') {
            $("#keywords_field").val("");
          }

          this._setState({
            focus: true
          });
        },

        inputBlur: function inputBlur(event) {
          event.preventDefault();
          $('#search_box').removeClass('search-focus');
        },

        getSearchDataSource: function getSearchDataSource() {
          return _models.TagModel.getLocalTags().concat(_models.TagModel.defaultTags);
        },

        // 监听输入框输入事件
        inputInput: function inputInput() {
          var input_value = $("#keywords_field").val();
          var matches_result = []; // 匹配的tag分类标签

          // 当输入#号时
          if (input_value.indexOf("#") == 0) {

            // 当输入框只有#的时候，标签面板回到最初始的状态
            if (input_value == "#") {

              this._setState({
                focus: true
              }, function () {
                this.refs.result._setState({
                  tags: _models.TagModel.getLocalTags(),
                  search_results: null
                });
              });
            } else {
              //否则进入搜索状态
              input_value = input_value.substr(1);
              var search_results = this.filterTags(input_value);

              //重新渲染搜索面板
              if (search_results.length > 0) {
                this._setState({
                  focus: true
                }, function () {
                  this.refs.result._setState({
                    search_results: search_results
                  });
                });
              } else {
                this.closeTagPanel();
              }
            }
            // 没输#号时
          } else {
            this.closeTagPanel();
          }
        },

        //获取搜索出来的结果
        filterTags: function filterTags(keywords) {
          // 获取所有源数据的tags
          // @todo: 按拼音检索
          var arr = this.getSearchDataSource();

          var matches_result = [],
          search_results = [];

          //得到所有标签的tname
          for (var i = 0, l = arr.length; i < l; i++) {
            matches_result.push(arr[i].tname);
          }

          var length = matches_result.length;
          //得到模糊匹配的结果重新渲染tags
          for (var j = 0; j < length; j++) {

            if (matches_result[j].indexOf(keywords) != -1) {
              search_results.push(arr[j]);
            }
          }

          return search_results;
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = Search;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(163), __webpack_require__(1)))

    /***/
  },
  /* 235 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *搜索框
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _components = __webpack_require__(159);

      var RenderMixin = {
        _render: function _render() {

          var searchTagePanelJSX = this.state.focus ? React.createElement(_components.SearchTagPanel, {
            ref: 'result',
            close: this.closeTagPanel
          }) : null;

          var historySearchPanelJSX = React.createElement(_components.HistorySearchPanel, null);

          return React.createElement(
          'div',
          {id: 'search', className: 'scrollable-dropdown-menu'},
          React.createElement(
          'div',
          {id: 'search_box'},
          React.createElement('span', {className: 'fp-icon-font fp-ext-search '}),
          React.createElement(
          'form',
          null,
          React.createElement('input', {
            className: 'typeahead',
            onBlur: this.inputBlur,
            onFocus: this.inputFocus,
            onInput: this.inputInput,
            id: 'keywords_field',
            ref: 'keywords',
            type: 'search',
            placeholder: _utils.LocaleUtil.translate("search_desc"),
            autoComplete: 'off'
          })
          ),
          React.createElement(
          'a',
          {href: '#', onClick: this.exitSearch},
          React.createElement('span', {className: 'fp-icon-font fp-ext-close '})
          )
          ),
          searchTagePanelJSX,
          historySearchPanelJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 236 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _O, _OKConfig) {

      /**
       *  贴纸列表
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _renderJsx = __webpack_require__(237);

      var _renderJsx2 = _interopRequireDefault(_renderJsx);

      var _commonMixinJs = __webpack_require__(216);

      var _commonMixinJs2 = _interopRequireDefault(_commonMixinJs);

      var NoteList = React.createClass({
        displayName: 'NoteList',

        statics: {
          //当前正在浏览的标签id
          _currentGtid: _models.NoteModel.getLastAccessTag(),

          _notes: [],

          _notesBeforeSearch: [],

          _searchState: {},

          // 界面更新缓冲
          _bufferedChanges: [],

          /**
           * 在搜索之前将贴纸列表数据缓存在内存中
           */
          storeNotesBeforeSearch: function storeNotesBeforeSearch() {
            this._notesBeforeSearch = this._notes;

            this.clearNotes();
          },

          /**
           * 获取搜索之前缓存在内存中的贴纸列表数据
           */
          getNotesBeforeSearch: function getNotesBeforeSearch() {
            return this._notesBeforeSearch;
          },

          /**
           * 记录的搜索状态
           */
          saveSearchState: function saveSearchState(searchState) {
            this._searchState = searchState || {};
          },

          /**
           * 获取搜索状态
           */
          getSearchState: function getSearchState() {
            return this._searchState;
          },

          /**
           * 清除贴纸数据
           */
          clearNotes: function clearNotes() {
            this._notes = [];
          },

          /**
           * 从数据源中删除一个贴纸
           */
          deleteNoteAt: function deleteNoteAt(index) {
            this._notes.splice(index, 1);
          },

          /**
           *  更新数据源中的一个贴纸
           */
          updateNoteAt: function updateNoteAt(index, newProps) {
            var note = this._notes[index];

            if (note) {
              this._notes[index] = $.extend(note, newProps);
            }
          },

          /**
           * 高亮所有贴纸中的关键字
           *
           * @param {string} [text] [需要被高亮的文字]
           */
          highlightText: function highlightText(text) {

            $("#note_list .note-content").each(function () {
              _utils.CaretUtil.removeHighlightStyle(this);
              //只有没被高亮的笔记才高亮
              if ($(".kws-highlight", this).length == 0) {
                _utils.CaretUtil.highlightText(text, this);

                // var scroll = 0;

                // if($(this).find('.kws-highlight').length > 0){
                //     if( $(this).find('.kws-highlight').offset().top - $(this).offset().top > $(this).height() ){
                //        scroll = $(this).find('.kws-highlight').offset().top - $(this).offset().top;
                //     }
                // }

                // if(scroll) $(this).scrollTop(scroll);
              }
            });

            $("#note_list .note-title").each(function () {
              var oInput = $(this).find("input");
              oInput.after("<div class=\"title-placeholder\">" + $(oInput).val() + "</div>");

              _utils.CaretUtil.removeHighlightStyle(this);
              //只有没被高亮的笔记才高亮
              if ($(".kws-highlight", this).length == 0) {
                _utils.CaretUtil.highlightText(text, this);
              }
            });
          }

        },

        mixins: [_renderJsx2['default'], _commonMixinJs2['default']],

        getInitialState: function getInitialState() {
          return {};
        },

        /**
         * 组件挂载到页面之后
         */
        componentDidMount: function componentDidMount() {
          var _this = this;

          //监听搜索
          _utils.WindowMessager.listenPageEvent('search', function (keywords) {

            if (keywords) {
              _this.searchNotes(keywords);
            }
          });

          //监听拉取数据请求  切换标签
          _utils.WindowMessager.listenPageEvent('switch-tag', function (gtid) {
            var isInSearch = $("body").hasClass("searching");

            //如果正在搜索，则先退出搜索界面
            if (isInSearch) {
              var backToCurrentTag = _this.constructor._currentGtid != gtid;
              _this.exitSearch(backToCurrentTag);
            }

            if (_this.constructor._currentGtid != gtid) {
              _this.constructor._currentGtid = gtid;

              $("#list_wrapper").removeClass("load-finished");

              // 设置最后一次访问的标签
              _models.NoteModel.setLastAccessTag(gtid);

              _this.loadInitialNotes(gtid);

              _utils.ExtUtil.sendInfoToExt();
            }
          });

          //监听退出搜索
          _utils.WindowMessager.listenPageEvent('exit-search', function () {
            _this.exitSearch(true);
          });

          //监听拉取数据请求
          _utils.WindowMessager.listenPageEvent('pull-updates', function () {

            _this.pullUpdates();
          });

          //监听页面活跃状态改变
          _utils.WindowMessager.listenPageEvent("page-active", function (active) {
            if (active) _this.flushUpdates();
          });

          //监听数据变化
          _utils.WindowMessager.listenGlobalEvent('data-changed', function (data, operation) {
            _O.log('data-changed', data, operation);
            //如果页面当前页面不可见，即tab处于后台并非active tab，则不进行即时的更新
            //而是存储起来，待页面可见时才行应用更新
            var isTabActive = !$("body").hasClass("inactive");

            if (isTabActive) {
              if (data && data.type) {
                _this.applyUpdates(data);
              }
            } else {
              _O.debug("页面不可见，将数据更新缓存");

              // 去除只有可见页面需要的属性
              if (data && data.notes) {
                $(data.notes).each(function (i, note) {
                  delete note.is_new;
                  delete note.maximized;
                });
              }
              _this.constructor._bufferedChanges.push(data);
            }
          });

          //监听清空数据
          _utils.WindowMessager.listenGlobalEvent('clear-notes', function (gtid) {
            if (gtid == _this.constructor._currentGtid) {

              //清空界面上的数据
              _this.renderNotes([]);
            }
          });

          //加载初始数据
          this.loadInitialNotes(this.constructor._currentGtid);
        },

        /**
         * 得到贴纸数据源
         */
        getNotes: function getNotes() {
          return this.constructor._notes || [];
        },

        /**
         * 设置贴纸数据源,但不渲染
         */
        setNotes: function setNotes(notes) {
          if (!$.isArray(notes)) return false;

          this.constructor._notes = notes;
        },

        /**
         * 更新贴纸数据源,并更新界面
         */
        renderNotes: function renderNotes(notes, callback) {
          this.constructor._notes = notes;

          this._setState(this.state, function () {

            if ($.isFunction(callback)) callback.call(null);

            //广播有新的贴纸进入界面
            _utils.WindowMessager.notifyCurrentPage("notesloaded");
          });
        },

        /**
         * 第一次加载贴纸
         */
        loadInitialNotes: function loadInitialNotes(gtid) {
          var _this = this;
          gtid = gtid || _this.constructor._currentGtid || 0;

          var filters = {
            offset: 0,
            rows: 10,
            gtid: gtid
          };

          //先取本地贴纸
          var localNotes = _models.NoteModel.getLocalNotes(filters, true);

          //本地取到贴纸则进行加载
          var currentNotes = [];
          var notes = currentNotes.concat(localNotes);

          //渲染需要一点时间，加上加载样式
          $("body").addClass('loading');
          this.renderNotes(notes, function () {
            $("body").removeClass('loading');
          });

          var lastNote = notes[notes.length - 1];
          if (lastNote && lastNote.sortby) {
            filters.offset = lastNote.sortby;

            //没有更多贴纸就不发请求
            var lastSortby = _models.TagModel.getLastSortby(_this.constructor._currentGtid);
            if (lastSortby && lastNote.sortby <= lastSortby) {
              return;
            }
          }

          _O.debug("第一次加载", "本地加载" + localNotes.length + "条");

          //如果本地取到的贴纸小于需要条目数
          var rest = filters.rows - localNotes.length;
          var user = _models.UserModel.getLocalUser();

          if (rest > 0 && user && user.uid) {

            _O.debug("第一次加载", "远程加载剩余" + rest + "条");
            filters.rows = rest;

            //用户登录之后第一次读远程数据
            if (!_models.LocalKVDB.get('deadline', 0)) {

              //拉取贴纸
              _models.NoteModel.notePull(function (data) {
                filters.rows = 30;
                filters.offset = 0;

                //取本地贴纸,刷新界面
                localNotes = _models.NoteModel.getLocalNotes(filters, true);

                _this.renderNotes(localNotes);

                //得到最后一条贴纸的sortby作为minSortby保存
                var lastNote = localNotes && localNotes[localNotes.length - 1];
                if (lastNote) {
                  _models.TagModel.setMinSortby(_OKConfig.ALL_TAG_ID, lastNote.sortby);
                }
              });

              //没有最小sortby(用户第一次切换到该分类),则使用more接口加载
            } else if (!_models.TagModel.getMinSortby(filters.gtid)) {
              filters.offset = _OKConfig.max_sortby;
              filters.rows = 10;
              _models.NoteModel.getNotes(filters, function (data) {
                if (data.list && data.list.length > 0) {
                  //重新刷界面
                  _this.renderNotes(data.list);
                }
              });

              //非第一次，则加载更多
            } else {

              //本地没有数据,则传一个比较大的数据取拉取更多
              if (filters.offset == 0) {
                filters.offset = _OKConfig.max_sortby;
              }

              this.loadMoreOnline(filters);
            }
          } else {
            this.loadFinished();
          }
        },

        /**
         * 加载更多
         *
         */
        loadMore: function loadMore() {
          var _this = this;

          if ($("body").hasClass("loading-more")) return;

          //得到最后sortby
          var len = this.getNotes().length;
          var lastNote = this.getNotes()[len - 1];

          if (lastNote && lastNote.sortby) {

            // 没有更多贴纸就不发请求
            var lastSortby = _models.TagModel.getLastSortby(_this.constructor._currentGtid);
            if (lastSortby && lastNote.sortby <= lastSortby) {
              this.loadFinished();
              return;
            }

            $("body").addClass("loading-more");

            //搜索时的加载更多
            if ($("body").hasClass("searching")) {

              var searchState = NoteList.getSearchState();

              if (searchState.keywords) _this.searchNotes(searchState.keywords);

              //非搜索时的加载更多
            } else {
              var filters = {
                offset: lastNote.sortby,
                rows: 30,
                gtid: _this.constructor._currentGtid
              };

              var localNotes = [];

              //先获取本地贴纸
              localNotes = _models.NoteModel.getLocalNotes(filters);
              if (localNotes.length > 0) {

                lastNote = localNotes[localNotes.length - 1];
                var newNotes = this.getNotes().concat(localNotes);

                this.renderNotes(newNotes);
              }

              //服务器加载更多
              var rest = filters.rows - localNotes.length;
              _O.debug("在线加载更多", rest);
              if (rest > 0) {
                var uid = _models.UserModel.getLocalUser().uid;
                if (uid) {

                  filters.rows = rest;
                  filters.offset = lastNote.sortby;

                  this.loadMoreOnline(filters);
                } else {
                  this.loadFinished();
                }
              } else {

                //本次加载更多完成,移除加载更多标识
                $("body").removeClass("loading-more");
              }
            }
          } else {
            this.loadFinished();
          }
        },

        loadFinished: function loadFinished() {
          // NotificationUtil.showMessage(LocaleUtil.translate("no_more_notes"),"info");

          $("body").removeClass("loading-more loading");

          $("#list_wrapper").addClass("load-finished");
        },

        /**
         * 远程加载更多
         *
         * @return {[type]} [description]
         */
        loadMoreOnline: function loadMoreOnline(filters) {
          $("body").addClass("loading-more");

          var _this = this;
          _O.debug("在线加载更多", filters);
          _models.NoteModel.getNotes(filters, function (data) {

            //成功
            if (data.status == 1) {

              var notes = _this.getNotes();

              if (data.list.length) {
                // var moreNotes = data.list.slice(0,30);
                var moreNotes = _models.NoteModel.getLocalNotes(filters);

                var newNotes = notes.concat(moreNotes);

                _this.renderNotes(newNotes, function () {

                  //此次加载更多已经完成,移除加载更多标识
                  $("body").removeClass("loading-more");
                });
              } else {
                _this.loadFinished();
              }
            } else {

              _this.loadFinished();
            }
          });
        },

        /**
         * 判断贴纸是否应该在当前列表渲染
         *
         */
        shouldNoteRenderInList: function shouldNoteRenderInList(note) {

          //被彻底删除的贴纸在任何界面下都不应该出现
          if (note.expunged == 1) {
            return false;
          }

          //全部面板下只要贴纸没被删除就可以放入
          if (this.constructor._currentGtid == 0) {
            return note.removed != 1;

            //如果是在待分类标签下，则只允许出现无分类的贴纸
          } else if (this.constructor._currentGtid == _OKConfig.NO_TAG_ID) {
            var noteHasTag = $.isArray(note.tags) && note.tags.length > 0;

            return !noteHasTag && note.removed != 1;

            //垃圾篓下
          } else if (this.constructor._currentGtid == _OKConfig.TRASHBIN_ID) {
            return note.removed == 1;

            //其他标签下
          } else {
            if (note.removed == 1) {
              return false;
            }
            var that = this;
            var hasCurrentTag = false;
            $(note.tags).each(function (i, gtid) {
              if (gtid == that.constructor._currentGtid) {
                hasCurrentTag = true;
                return false;
              }
            });

            return hasCurrentTag;
          }

          return true;
        },

        /**
         * 将更新过的数据放入列表
         */
        applyUpdates: function applyUpdates(info) {
          if (!info || !$.isArray(info.notes) || info.notes.length == 0) return false;

          //perf
          _O.timeStart("time:列表更新");

          var _this = this;

          //当前贴纸数据
          var currentNotes = this.getNotes();
          //更新后的贴纸数据
          var newNotes = null;

          //新增
          if (info.type == "new") {

            //不在搜索界面则让贴纸进入界面，否则不让进入
            // if(_this.shouldNoteRenderInList( updatedNotesWithIDIndex[note.gnid] )){

            // }

            var createdNotes = [];
            for (var i = 0; i < info.notes.length; i++) {
              if (_this.shouldNoteRenderInList(info.notes[i])) {
                createdNotes.push(info.notes[i]);
              }
            }

            newNotes = createdNotes.concat(currentNotes);

            //修改
          } else if (info.type == "update") {
            _O.log('applyUpdates', info.notes);

            //以id作为索引的更新过的贴纸
            var updatedNotesWithIDIndex = {},

            //以sortby作为索引的更新过的贴纸
            updatedNotesWithSortbyIndex = {},

            //被更新的所有贴纸的sortby
            updatedNoteSortbys = [];

            $(info.notes).each(function (i, note) {
              updatedNotesWithIDIndex[note.gnid] = note;
              updatedNotesWithSortbyIndex[note.sortby] = note;
              updatedNoteSortbys.push(note.sortby);
            });

            //去除重复(不应该有这一步，待删)
            updatedNoteSortbys = $.unique(updatedNoteSortbys);

            var currentNotesSortbys = [];

            /***********  存在于当前list中的更新则覆盖原list中的数据  **********/
            //检测每个贴纸，查看是否在被更新的贴纸中
            $(currentNotes).each(function (i, note) {

              //如果贴纸被更新 (TODO:还应该判断修改时间大于当前数据，否则不更新)
              if (updatedNotesWithIDIndex[note.gnid]) {

                //判断被更新的贴纸是否应该被放入list,例如removed = 1的时候就不能放入，除非是垃圾桶列表
                if (_this.shouldNoteRenderInList(updatedNotesWithIDIndex[note.gnid])) {

                  currentNotes[i] = updatedNotesWithIDIndex[note.gnid];
                  newNotes = newNotes || [];
                  newNotes.push($.extend({}, note, updatedNotesWithIDIndex[note.gnid]));

                  _O.log('applyUpdates', "放入list");
                } else {
                  newNotes = newNotes || [];
                  _O.log('applyUpdates', "不应该加载，从list中删除");
                }

                var noteSortbyIndex = updatedNoteSortbys.indexOf(updatedNotesWithIDIndex[note.gnid].sortby);
                if (noteSortbyIndex >= 0) {
                  updatedNoteSortbys.splice(noteSortbyIndex, 1);
                }
              } else {
                newNotes = newNotes || [];
                newNotes.push(note);
              }

              currentNotesSortbys.push(currentNotes[i].sortby);
            });

            /***********  不存在于当前list中的更新则看sortby大小是否处于当前列表中或大于最大值，
             符合条件放入相应位置  **********/
            if (updatedNoteSortbys.length > 0) {
              _O.debug("applyUpdates", "不存在于当前list的sortby");
              _O.debug("applyUpdates", updatedNoteSortbys);
              //currentNotesSortbys = [4000,2000,500,10];
              //updatedNoteSortbys = [5000,3200,1000,20,3];
              // => [5000,4000,3200,2000,1000,500,20,10,3]

              var currentMaxSortby = currentNotesSortbys[0] || 0;
              var currentMinSortby = currentNotesSortbys[currentNotesSortbys.length - 1] || 0;

              //将更新过的sortby升序排序,即从小到大排序
              updatedNoteSortbys.sort(function (a, b) {
                return a - b;
              });

              $(updatedNoteSortbys).each(function (i, sortby) {

                if (_this.shouldNoteRenderInList(updatedNotesWithSortbyIndex[sortby])) {
                  //大于最大sortby放入当前list上方
                  if (sortby > currentMaxSortby) {
                    newNotes = newNotes || [];
                    newNotes.unshift(updatedNotesWithSortbyIndex[sortby]);

                    _O.log('applyUpdates', "大于最大sortby放入当前list上方");

                    //处于最大sortby和最小sortby中间,则放入适当的位置
                  } else if (sortby > currentMinSortby) {

                    currentNotesSortbys.push(sortby);
                    currentNotesSortbys.sort(function (a, b) {
                      return b - a;
                    });
                    var index = currentNotesSortbys.indexOf(sortby);

                    newNotes = newNotes || [];
                    newNotes.splice(index, 0, updatedNotesWithSortbyIndex[sortby]);

                    _O.log('applyUpdates', "处于最大sortby和最小sortby中间,则放入适当的位置");

                    //处于最小sortby后面,不放入当前列表,让加载更多取加载
                  }
                }
              });
            }
          }

          //贴纸list被更新则进行重新渲染
          if (newNotes) {
            _O.log("applyUpdates", "应用更新后的贴纸list", newNotes.length);
            this.renderNotes(newNotes, function () {

              //perf
              _O.timeEnd("time:列表更新");
            });
          }
        },

        flushUpdates: function flushUpdates() {
          var bufferedChanges = this.constructor._bufferedChanges;

          if (bufferedChanges.length > 0) {
            _O.debug("更新缓冲区的长度", bufferedChanges.length);

            for (var i = 0; i < bufferedChanges.length; i++) {
              this.applyUpdates(bufferedChanges[i]);
            }

            this.constructor._bufferedChanges = [];
          }
        },

        /**
         * 拉取服务器更新
         */
        pullUpdates: function pullUpdates() {
          var _this = this;

          //perf
          _O.timeStart("time:拉取更新");

          //得到本地上次同步回来的最大sortby
          _models.NoteModel.notePull(function (data) {

            //perf
            _O.timeEnd("time:拉取更新");

            //成功
            if (data.status == 1) {

              _O.log("applyUpdates", data.list, data.taglist);

              if (data.list.length > 0) _utils.WindowMessager.notifyTabs('data-changed', {
                type: 'update',
                notes: data.list
              });

              if (data.taglist.length > 0) _utils.WindowMessager.notifyTabs('tags-changed', data.taglist);
            } else {

              //无更新

            }
          });
        },

        /**
         * 退出搜索界面
         *
         * @param  {[type]} restoreData [是否恢复搜索界面之前的数据]
         * @return {[type]}             [description]
         */
        exitSearch: function exitSearch(restoreData) {

          //清空关键字
          $("#keywords_field").val("");

          // 删除正文上的高亮
          $("#note_list .note-content").each(function () {
            _utils.CaretUtil.removeHighlightStyle(this);
          });

          // 删除标题上的高亮
          $("#note_list .note-title .title-placeholder").remove();

          //去除标识
          $("body").removeClass("searching local-search-done");

          //清除搜索状态
          NoteList.saveSearchState(null);

          if (restoreData) {
            //如果搜索时数据变脏，则重新加载
            if (NoteList.isDirty) {
              NoteList.isDirty = false;

              //清空界面上的数据
              NoteList.clearNotes();

              //重新加载数据
              this.loadInitialNotes();
            } else {
              //没变脏，则仍使用就数据
              var notes = NoteList.getNotesBeforeSearch();

              this.renderNotes(notes);
            }
          }
        },

        getNotesByGtid: function getNotesByGtid(tid) {

          _models.NoteModel.getNotesByGtid(Gtid);
        },

        /**
         * 搜索贴纸
         */
        searchNotes: function searchNotes(keywords, event) {
          var _this = this;

          if (!$('body').hasClass('searching')) {
            //将搜索前的贴纸放入内存，退出搜索时渲染
            NoteList.storeNotesBeforeSearch();

            //进入搜索状态
            $('body').addClass('searching');
          }

          //获取上次的搜索状态
          var searchState = NoteList.getSearchState();

          //如果搜索的关键字改变,则清除之前的搜索结果
          if (searchState.keywords != keywords) {
            $("body").removeClass('local-search-done');

            NoteList.clearNotes();
          }

          var notes = _this.getNotes();
          var lastSortby = notes[notes.length - 1] && notes[notes.length - 1].sortby;

          var filters = {
            keywords: keywords,
            offset: lastSortby || 0,
            rows: 30
          };

          //存储此次的搜索状态
          NoteList.saveSearchState(filters);

          $("body").addClass('loading');
          var handleResults = function handleResults(data) {
            $("body").removeClass('loading');

            if (data.status == 1) {
              //本地搜索完成,则加上本地搜索完成标识
              if (data.localdone) {
                $('body').addClass('local-search-done');
              }

              // 搜索到贴纸
              if ($.isArray(data.list) && data.list.length > 0) {
                var results = data.list.slice(0, filters.rows);
                notes = notes.concat(results);

                _this.renderNotes(notes, function () {
                  if (data.list.length == filters.rows || data.online) {
                    $("body").removeClass("loading-more");
                  }

                  //数据结果渲染完成,对数据中关键字进行高亮
                  if (data.list.length > 0) {
                    _this.constructor.highlightText(keywords);
                  }
                });

                // 没有搜索到贴纸
              } else {
                if (notes.length == 0) {
                  _this.renderNotes([]);
                }

                $("body").removeClass("loading-more");
              }
            } else {
              // 搜索失败,移除加载更多标识
              $("body").removeClass("loading-more");
            }
          };

          //本地搜索已经完成则无需再次让模型继续遍历本地,而是直接searchOnline
          if ($("body").hasClass('local-search-done')) {
            _models.NoteModel.searchOnline(filters, handleResults);
          } else {
            _models.NoteModel.search(filters, handleResults);
          }
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteList;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(162), __webpack_require__(163)))

    /***/
  },
  /* 237 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_O, React) {
      /**
       *  贴纸列表
       */

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _components = __webpack_require__(159);

      var RenderMixin = {

        _render: function _render() {
          var _this = this;
          var notesJSX = "";

          //数据源
          var notes = this.getNotes();
          _O.debug("渲染数据", notes.length);
          if (notes && notes.length > 0) {

            notesJSX = notes.map(function (n, i, notes) {
              if (n) {
                //给贴纸源数据加上索引，方便访问
                n.dataIndex = i;

                return React.createElement(_components.Note, {key: n.gnid, note: n});
              }
            });
          } else {
            notesJSX = React.createElement(_components.NoResult, null);
          }

          return React.createElement(
          "div",
          {id: "list_wrapper"},
          notesJSX,
          React.createElement(
          "div",
          {id: "load_more"},
          React.createElement(
          "a",
          {href: "#", onClick: this.loadMore},
          "点击加载更多"
          )
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(162), __webpack_require__(147)))

    /***/
  },
  /* 238 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM, _OKConfig) {
      /**
       *  单条贴纸
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      var RenderMixin = __webpack_require__(239);
      var stateMixin = __webpack_require__(216);

      var Note = React.createClass({
        displayName: 'Note',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {

          var state = this.constructNoteState(this.props.note);
          if (!state.hasOwnProperty("maximized")) {
            state.maximized = false;
          }

          state.showExpand = false;
          state.isDeleting = false;
          state.opened = false;
          state.sharing = false;
          state.showTagPanel = false;

          if (state.gnid == _components.MCEEditor.currentGnid) {
            state.maximized = true;
          }

          return state;
        },

        handleOpen: function handleOpen(event) {
          if (event) event.preventDefault();

          var _this = this;

          var maxHeight = "";
          var noteContent = $(ReactDOM.findDOMNode(this)).find(".note-content").get(0);
          //点击展开按钮   把content的max-height限制去掉  然后把数据存起来  点击收起的时候再还原回来
          maxHeight = $(noteContent).css("max-height");

          if (!this.state.opened) {
            // maxHeight = $(noteContent).css("max-height");
            $(noteContent).data("maxHeight", maxHeight);
            $(noteContent).css({"max-height": "inherit"});
          } else {
            //收缩
            $(noteContent).css({"max-height": $(noteContent).data("maxHeight")});

            //收缩时检测贴纸是否在可见区域，如果是在非可见区域则让其处于可见区域
            var offset = $(ReactDOM.findDOMNode(this)).offset();

            if (offset.top < 0) {
              if (document.body.scrollTop > 0) {
                $(document.body).animate({scrollTop: document.body.scrollTop + offset.top - 60}, 300, function () {
                  $(ReactDOM.findDOMNode(_this)).addClass("glowing");
                  setTimeout(function () {
                    $(ReactDOM.findDOMNode(_this)).removeClass("glowing");
                  }, 2500);
                });
              }

              var app = $("#app").get(0);
              $(app).animate({scrollTop: app.scrollTop + offset.top - 60}, 300, function () {
                $(ReactDOM.findDOMNode(_this)).addClass("glowing");
                setTimeout(function () {
                  $(ReactDOM.findDOMNode(_this)).removeClass("glowing");
                }, 2500);
              });
            }
          }

          this._setState({
            opened: !this.state.opened
          });
        },

        constructNoteState: function constructNoteState(note) {
          var state = $.extend({}, note);

          //展示前的内容处理
          state._content = _utils.ContentUtil.processContent(state.content);

          //为了图片的懒加载，替换src
          state._content = _utils.LazyLoad.makeUrl(state._content);

          return state;
        },

        componentWillUnmount: function componentWillUnmount() {
          var restNotesNum = $("#note_list .note").length;

          //如果在贴纸消失时，贴纸数量只剩余几个了，则加载更多
          if (restNotesNum < 5) {
            _utils.WindowMessager.notifyCurrentPage("loadmore");
          }
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          //对贴纸的排版高度进行初始化，过长的需要隐藏
          _this.initLayout();

          //在火狐下面，当把侧栏打开的时候重新布局初始化
          if ($(document.body).hasClass("firefox")) {
            _utils.WindowMessager.listenPageEvent("appopen", function (userTrigger) {
              _this.initLayout();
            });
          }

          //监听贴纸删除事件
          _utils.WindowMessager.listenPageEvent('delete-note', function (data) {
            if (_this.isMounted() && data.gnid && _this.state.gnid == data.gnid) {
              _this.deleteNote();
            }
          });

          // showSharePanel
          // showTagPanel

          //模拟失焦
          $(document).on("mousedown", function (event) {
            var target = event.target;

            //分享模块的模拟失焦
            var showSharePanel = _this.refs.NoteSharePanel;
            if (_this.state.sharing) {
              if (ReactDOM.findDOMNode(showSharePanel) && !$.contains(ReactDOM.findDOMNode(showSharePanel), target)) {
                _this.showSharePanel(event);
              }
            }

            //标签模块的模拟失焦
            var showTagPanel = _this.refs.NoteTagPanel;
            if (_this.state.showTagPanel) {
              if (ReactDOM.findDOMNode(showTagPanel) && !$.contains(ReactDOM.findDOMNode(showTagPanel), target)) {
                _this.showTagPanel(event);
              }
            }
          });

          if (this.state.maximized) {
            this.maximizeNote(this);
          }
        },

        /**
         * 对贴纸的排版高度进行初始化，过长的需要隐藏
         *
         */
        initLayout: function initLayout() {
          var _this = this;

          var nt = $(ReactDOM.findDOMNode(this)).find(".note-content").get(0);
          var ntHeight = $(nt).prop('scrollHeight');
          var maxHeight = this.calcMaxHeight();
          if (maxHeight < ntHeight) {
            this._setState({
              showExpand: true
            });
          } else {
            this._setState({
              showExpand: false
            });
          }

          $(nt).css({"max-height": maxHeight + "px"});
          $(nt).data("maxHeight", maxHeight);

          //第一张图片如果没有高度，则进行加载后再次排版
          var $firstImg = $(".note-content img", ReactDOM.findDOMNode(this)).first();
          var imgWidth, imgHeight, isMedia, isSmall;
          if ($firstImg.length) {
            if ($firstImg.parent().hasClass("media")) {
              isMedia = true;
            }

            if ($firstImg.parent().hasClass("small-img")) {
              isSmall = true;
            }

            var height = $firstImg.height();

            //没得到宽高，意思是还没有没有加载成功
            if (!height) {
              $firstImg.on("load", function () {
                imgWidth = this.naturalWidth || this.width;
                imgHeight = this.naturalHeight || this.height;

                var ratio = imgWidth / imgHeight;
                if (isMedia) {
                  $(this).addClass("img big-img");

                  $(this).css({
                    "width": _OKConfig.content_img_maxwidth + "px",
                    "height": _OKConfig.content_img_maxwidth / ratio + "px"
                  });

                  // 如果没有覆盖按钮
                  if ($firstImg.parent().find(".media-cover").length <= 0) {
                    $(this).after('<span class="media-cover"></span>');
                  }
                } else if (!isSmall) {

                  $(this).css({
                    "width": _OKConfig.content_img_maxwidth + "px",
                    "height": _OKConfig.content_img_maxwidth / ratio + "px"
                  });

                  //放大按钮
                  if (imgWidth > 300) {
                    $(this).after('<span class="img-icon icon-font fp-ext-zoom-in fp-tooltips" data-tooltip=' + _utils.LocaleUtil.translate("view_big_img") + ' data-placement="top"></span>');
                  }
                }

                $firstImg.attr('data-width', imgWidth);
                $firstImg.attr('data-height', imgHeight);

                var ntHeight = $(nt).prop('scrollHeight');
                var maxHeight = _this.calcMaxHeight();
                if (maxHeight < ntHeight) {
                  _this._setState({
                    showExpand: true
                  });
                } else {
                  _this._setState({
                    showExpand: false
                  });
                }

                $(nt).css({"max-height": maxHeight + "px"});
                $(nt).data("maxHeight", maxHeight);
              });
            }
          }
          ;
        },

        //返回收缩状态   max-height
        calcMaxHeight: function calcMaxHeight() {
          var _this = this;
          var $nt = $(ReactDOM.findDOMNode(this)).find(".note-content");

          var $fImg = $(ReactDOM.findDOMNode(this)).find(".note-content .img.big-img");

          var fImg = $fImg.get(0);
          var nt = $nt.get(0);

          // 有图片的情况
          if (fImg) {

            var imgWidth = 256;
            var offTop = fImg.offsetTop - nt.offsetTop;

            if (offTop > 119) {
              //如果够五行那么最大给5行的高度
              return 120;
            } else if (offTop == 0) {
              //如果第一张是图片
              var height = $(fImg).height();
              return height;
              //如果只有一张图片 那么只有当content的高度大于图片容器高度时才有展开更多
            } else if (offTop > 0 && offTop < 119) {
              //如果没有五行但是有图片
              var height = $(fImg).height();

              if (height >= imgWidth) {
                return imgWidth + offTop;
              } else {
                return height + offTop;
              }
            }

            // 没有有图片的情况
          } else if ($(nt).prop('scrollHeight') > 119) {
            return 120;
          } else {
            return $(nt).prop('scrollHeight');
          }
        },

        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
          if (this.state.content != prevState.content) {
            //更新完成后找出有图片的进行懒加载
            var $imgs = $(ReactDOM.findDOMNode(this)).find("img");
            if ($imgs.length > 0) {
              _utils.LazyLoad.lazyLoad($imgs);
              this.initLayout();
            }
            ;

            /**
             *
             * 先判断上一次有没有  展开关闭按钮
             *
             *有 说明需要可以展开和关闭
             *  已展开 未展开
             *      得到这一次的高度  判断这一次是否需要展开关闭按钮
             *          这次的高度需要
             *              那么其他不管  用这次高度更新存起来的 maxheight
             *          这次高度不需要展开
             *              那么让展开闭合按钮隐藏
             *
             *
             *
             *没有 说明不需要展开关闭
             *      得到这一次的高度  判断这一次是否需要展开关闭按钮
             *          这次的高度需要按钮
             *              那么其他不管  只要更新 存起来的 maxheight
             *              那么让展开闭合按钮显示
             *          这次高度不需要
             *          什么都不用做
             *
             *
             **/

            var nt = $(ReactDOM.findDOMNode(this)).find(".note-content").get(0);

            //得到更新后的全高
            var ntHeight = $(nt).prop('scrollHeight');

            //得到更新后的最大高度
            var maxHeight = this.calcMaxHeight();
            var showExpand = false;

            //只要贴纸全高度大于最大高度就展示展开按钮
            if (maxHeight < ntHeight) {
              showExpand = true;
            }

            //记录最大高度
            $(nt).data("maxHeight", maxHeight);

            //上一个状态为已经展开状态
            if (prevState.opened) {

              if (prevState.showExpand) {
                $(nt).css({"max-height": ntHeight});
              } else {
                $(nt).css({"max-height": maxHeight});

                if (ntHeight > maxHeight) {
                  this._setState({
                    opened: false
                  });
                }
              }

              //上一个状态为收缩状态
            } else {
              $(nt).css({"max-height": maxHeight});
            }

            this._setState({
              showExpand: showExpand
            });
          }
        },

        // 分享笔记
        shareNote: function shareNote(event) {
          if (event) event.preventDefault();

          //私密贴纸不允许分享
          if (this.state.publyc == 0) {
            return false;
          }

          // 如果没有登录点击分享先让用户登录
          var user = _models.UserModel.getLocalUser();

          if (!(user && user.uid)) {
            _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_and_share"), 'error');
            _utils.LoginUtil.login(false, function (data) {
              if (data.status == 1) {
                //登录成功
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_success"));
                _utils.WindowMessager.notifyTabs('user-changed', Date.now());
                location.reload();
              } else {
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_error") + ':' + data.status, 'error');
              }
            });
            return false;
          }

          this.showSharePanel();
        },

        showTagPanel: function showTagPanel(event) {
          if (event) event.preventDefault();
          var _this = this;

          var currentShow = this.state.showTagPanel;

          var $NoteTagPanel = $(ReactDOM.findDOMNode(_this.refs.NoteTagPanel));
          console.log("NoteTagPanel::", $NoteTagPanel);
          //关闭之后的处理,延时处理，不然会导致界面卡滞
          setTimeout(function () {
            if (currentShow) {
              //贴纸的标签数量被改变
              if ($NoteTagPanel.hasClass("tag-change")) {
                var newNote = {
                  sortby: _this.state.sortby,
                  modified: _this.state.modified,
                  tags: _this.state.tags,
                  gnid: _this.state.gnid
                };
                console.log("进来了");
                _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [newNote]});
              }

              //标签排序是否被改变
              if ($NoteTagPanel.hasClass("tags-sorted")) {
              }
            }
          }, 50);

          //先让界面做出相应
          this._setState({
            showTagPanel: !this.state.showTagPanel
          }, function () {
          });
        },

        addTag: function addTag(gtid) {

          var newNote = _models.NoteModel.addTag(this.state, gtid);

          this._setState(newNote);

          _utils.NotificationUtil.showMessage("标签添加成功");
        },

        removeTag: function removeTag(gtid) {

          var newNote = _models.NoteModel.removeTag(this.state, gtid);

          this._setState(newNote);

          _utils.NotificationUtil.showMessage("标签移除成功");
        },

        showSharePanel: function showSharePanel(event) {
          if (event) event.preventDefault();
          this._setState({
            sharing: !this.state.sharing
          });

          //打开分享面板时即时同步
          if (this.state.sharing) {
            _models.SyncManager.getInstance('tag').start(true);
            _models.SyncManager.getInstance('note').start(true);
          }
        },

        /**
         * 组件挂载到dom之前
         */
        componentWillMount: function componentWillMount() {
        },

        //恢复
        recoverNote: function recoverNote(event) {
          var _this = this;

          if (event) event.preventDefault();

          var domHeight = $(ReactDOM.findDOMNode(_this)).height();

          $(ReactDOM.findDOMNode(_this)).height(parseInt(domHeight));
          _this._setState({
            isDeleting: true
          }, function () {
            var animationTimeout = 400;

            setTimeout(function () {
              _this.save({
                removed: 0
              });
            }, animationTimeout);
          });
        },

        //删除
        deleteNote: function deleteNote(event) {
          var _this = this;
          if (event) event.preventDefault();

          var domHeight = $(ReactDOM.findDOMNode(_this)).height();

          $(ReactDOM.findDOMNode(_this)).height(parseInt(domHeight));
          _this._setState({
            isDeleting: true
          }, function () {
            var animationTimeout = 400;

            setTimeout(function () {
              _this.save({
                removed: 1
              });
            }, animationTimeout);
          });
        },

        //彻底删除
        expungeNote: function expungeNote(event) {
          var _this = this;
          if (event) event.preventDefault();

          var domHeight = $(ReactDOM.findDOMNode(_this)).height();

          $(ReactDOM.findDOMNode(_this)).height(parseInt(domHeight));
          _this._setState({
            isDeleting: true
          }, function () {
            var animationTimeout = 400;

            setTimeout(function () {
              _this.save({
                expunged: 1
              });
            }, animationTimeout);
          });
        },

        //切换私密属性
        switchSecret: function switchSecret(event) {
          event.preventDefault();

          if (this.state.publyc == 1) {
            //切换为私密
            this.save({publyc: 0});
          } else {
            //切换为公开
            this.save({publyc: 1});
          }

          this._setState({
            publyc: this.state.publyc == 1 ? 0 : 1
          });
        },

        showMoreContent: function showMoreContent() {
          this._setState({
            showMore: !this.state.showMore
          });
        },

        /**
         * 保存贴纸标题
         */
        saveTitle: function saveTitle(title) {
          var props = {title: title};
          if (this.constructor._saveTimeout) {

            var _lastProps = this.constructor._delayedProps[this.constructor._saveTimeout];
            //上次需要保存的属性的继承下来
            if (_lastProps) {
              props = $.extend({}, _lastProps, props);
            }

            clearTimeout(this.constructor._saveTimeout);
          }

          this.save({title: title});
        },

        /**
         * 保存贴纸
         */
        save: function save(note) {
          if (!note) return false;
          note.gnid = this.state.gnid;
          note.sortby = this.state.sortby;

          //newNote为更新之后的贴纸
          var newNote = _models.NoteModel.update(note);

          if (newNote) {

            //如果是在搜索界面下
            if ($("body").hasClass("searching")) {
              _components.NoteList.isDirty = true;
            }

            //通知顶层数据源更新
            _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [newNote]});
          }
        },

        /**
         * 处理标题和内容变化,会延时保存
         *
         * @param object props [ 修改的贴纸属性和值 {title: '',content:''},修改了什么传什么 ]
         */
        handleInput: function handleInput(props) {
          if (!props) return false;
          var _this = this;

          if (this.constructor._saveTimeout) {

            var _lastProps = this.constructor._delayedProps[this.constructor._saveTimeout];
            //上次需要保存的属性的继承下来
            if (_lastProps) {
              props = $.extend({}, _lastProps, props);
            }

            clearTimeout(this.constructor._saveTimeout);
          } else {
            //存储每次需要保存的属性
            if (!this.constructor._delayedProps) {
              this.constructor._delayedProps = {};
            }
          }

          this.constructor._saveTimeout = setTimeout(function () {
            _this.save(props);

            //保存完成，删除
            delete _this.constructor._delayedProps[_this.constructor._saveTimeout];
          }, _OKConfig.save_delay);

          this.constructor._delayedProps[this.constructor._saveTimeout] = props;
        },

        //为当前笔记展开编辑器
        handleMaximize: function handleMaximize(event) {
          if (event) event.preventDefault();

          if (this.state.maximized) {
            //通知编辑器关闭
            this.minimizeNote(this);

            this._setState({
              maximized: false
            });
          } else {
            // this.closeMenu();
            this.maximizeNote(this);

            this._setState({
              maximized: true
            });
          }
        },

        //关闭编辑器
        minimizeNote: function minimizeNote(noteComponent) {
          _utils.WindowMessager.notifyCurrentPage("minimize", noteComponent);
          _components.StaticFn.handleFullPageOff("editor");
        },

        maximizeNote: function maximizeNote(noteComponent) {
          //打开编辑器
          this.openEditorWindow();

          //通知编辑器组件数据
          _utils.WindowMessager.notifyCurrentPage("maximize", noteComponent);
          _components.StaticFn.handleFullPageOn("editor");
        },

        openEditorWindow: function openEditorWindow() {
          $("body").addClass("open-editor");
          $("#editor").showWithAnim("anim");
        },

        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
          if (nextState && (nextState.modified > this.state.modified || nextState.sortby > this.state.sortby)) {
            return true;
          }

          //笔记数据需要更新，
          if (nextProps.note.modified > this.state.modified || nextProps.note.sortby > this.state.sortby) {
            var state = nextProps.note;

            //内容修改了则调整内容结构
            if (typeof nextProps.note.content == "string" && this.state.content != nextProps.note.content) {
              state = this.constructNoteState(nextProps.note);
            }

            //通过props传下的maximized如果为true,但是当前贴纸的state并非maximized则重置为false
            if (nextProps.note.maximized && !this.state.maximized) {
              state.maximized = false;
            }

            this._setState(state);

            return false;
          }

          /**
           * 状态样式数据需要更新
           *  2.menuOn
           *  3.maximized
           *  4.enteringTag
           *  5.overflowed
           *  6.expanded
           *  7.hover
           *  8.isDeleting
           *  9.animated
           */

          //长贴纸展开的时候
          if (nextState.showExpand !== this.state.showExpand) {
            return true;
          }

          //删除的时候 需要做动画
          if (nextState.isDeleting !== this.state.isDeleting) {
            return true;
          }

          if (nextState.isNew !== this.state.isNew) {
            return true;
          }

          if (nextState.maximized !== this.state.maximized) {
            return true;
          }

          if (nextState.opened !== this.state.opened) {
            return true;
          }

          if (nextState.sharing !== this.state.sharing) {
            return true;
          }

          if (nextState.showTagPanel !== this.state.showTagPanel) {
            return true;
          }

          return false;
        },

        render: function render() {
          return this._render();
        }

      });

      exports['default'] = Note;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1), __webpack_require__(163)))

    /***/
  },
  /* 239 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  单条贴纸
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _components = __webpack_require__(159);

      var RenderMixin = {
        _render: function _render() {

          var classNames = "note";

          if (this.state.isDeleting) {
            classNames += " note-leave";
          }

          if (this.state.is_new) {
            classNames += " note-enter";
          }

          if (this.state.publyc == 0) {
            classNames += " private";
          }

          if (this.state.maximized) {
            classNames += " expand";
          }

          if (this.state.opened) {
            classNames += " opened";
          }

          var removeCoverJSX = null;
          if (this.state.removed == 1) {
            removeCoverJSX = React.createElement('div', {className: 'remove-cover'});
            classNames += " isremoved";
          }

          //控制展开关闭按钮
          var switchJSX = this.state.showExpand ? React.createElement(_components.NoteSwitch, {
            open: this.state.opened,
            handleOpen: this.handleOpen
          }) : null;

          // 分享组件
          var noteShareJSX = this.state.sharing ? React.createElement(_components.NoteSharePanel, {
            ref: 'NoteSharePanel',
            note: this.state,
            close: this.showSharePanel
          }) : null;

          // 标签组件
          var tagJSX = this.state.showTagPanel ? React.createElement(_components.NoteTagPanel, {
            ref: 'NoteTagPanel',
            addTag: this.addTag,
            removeTag: this.removeTag,
            close: this.showTagPanel,
            note: this.state
          }) : null;

          {/*var MetaJSX = '';
	               if(this.state.source && UrlUtil.isLink(this.state.source)){
	                   MetaJSX = <NoteMeta source={this.state.source}/>;
	               };
	            */
          }

          return React.createElement(
          'div',
          {className: classNames},
          removeCoverJSX,
          React.createElement('div', {
            className: 'handle fp-tooltips',
            'data-tooltip': _utils.LocaleUtil.translate("drag_merge"),
            'data-placement': 'bottom'
          }),
          React.createElement(
          'div',
          {className: 'note-inner'},
          React.createElement(_components.NoteTitle, {
            saveTitle: this.saveTitle,
            onInput: this.handleInput,
            title: this.state.title
          }),
          React.createElement(_components.NoteContent, {content: this.state._content, onInput: this.handleInput}),
          switchJSX,
          React.createElement(_components.NoteMeta, {source: this.state.source}),
          React.createElement(_components.NoteOp, {
            publyc: this.state.publyc,
            removed: this.state.removed,
            handleMaximize: this.handleMaximize,
            shareNote: this.shareNote,
            onDelete: this.deleteNote,
            onRecover: this.recoverNote,
            onExpunge: this.expungeNote,
            showTagPanel: this.showTagPanel,
            switchSecret: this.switchSecret
          })
          ),
          React.createElement(_components.NoteToggleEditor, {handleMaximize: this.handleMaximize}),
          noteShareJSX,
          tagJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* 分享组件 */
      /*标签组件*/
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 240 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {/*
	*单条贴纸的标题
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(241);
      var StateMixin = __webpack_require__(216);

      var NoteTitle = React.createClass({
        displayName: 'NoteTitle',

        mixins: [RenderMixin, StateMixin],

        getInitialState: function getInitialState() {
          return {
            editingMode: false
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          $(ReactDOM.findDOMNode(this.refs.input)).on('keydown', function (event) {
            _this.handleKeydown(event);
          });
        },

        getValue: function getValue() {
          return ReactDOM.findDOMNode(this.refs.input).value || "";
        },

        /**
         * 失焦
         */
        handleBlur: function handleBlur(event) {
          this._setState({
            editingMode: false
          });

          if (this.state.modified) {
            //保存标题
            this.save();
          }
        },

        /**
         * 聚焦
         */
        handleFocus: function handleFocus(event) {
          //在搜索状态下标题获取焦点删除占位文字
          if ($("body").hasClass("searching")) {
            $(ReactDOM.findDOMNode(this)).find(".title-placeholder").remove();
          }
          ;

          this._setState({
            editingMode: true
          });
        },

        /**
         * 输入
         */
        handleInput: function handleInput(event) {
          var currentTitle = this.getValue();
          if (this.props.title != currentTitle) {
            this._setState({
              modified: true
            });
          } else {
            this._setState({
              modified: false
            });
          }
        },

        /**
         * 键盘事件
         */
        handleKeydown: function handleKeydown(event) {

          //ctrl + s || 回车键
          if ((event.ctrlKey || event.metaKey) && event.keyCode == 83 || event.keyCode == 13) {

            //阻止默认事件
            event.preventDefault();

            if (this.state.modified) {
              //保存标题
              this.save();
            }
          }
          ;
        },

        /**
         * 标题无法通过react来更新，所以通过dom更新
         */
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
          //更新标题值
          if (nextProps.title && this.props.title != nextProps.title) {
            var titleField = ReactDOM.findDOMNode(this.refs.input);
            titleField.value = nextProps.title;
          }
        },

        save: function save() {
          var title = this.getValue();

          this.props.saveTitle(title);
          _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("title_modification_success"));

          this._setState({modified: false});

          $(ReactDOM.findDOMNode(this.refs.input)).blur();
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteTitle;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 241 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _OKConfig) {/*
	*单条贴纸的标题
	*/

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {
          var title = this.props.title || _utils.LocaleUtil.translate("no_title");
          var editing = this.state.editingMode ? " editing-title" : "";
          return React.createElement(
          "h2",
          {
            className: "note-title fp-tooltips" + editing,
            "data-tooltip": _utils.LocaleUtil.translate("edit_title"),
            "data-placement": "bottom"
          },
          React.createElement("input", {
            ref: "input",
            placeholder: _OKConfig.TITLE_PLACEHOLDER,
            defaultValue: title,
            onBlur: this.handleBlur,
            onInput: this.handleInput,
            spellCheck: false,
            onFocus: this.handleFocus
          })
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(163)))

    /***/
  },
  /* 242 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, ReactDOM, $) {
      /**
       *  单条贴纸 内容区域
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(243);

      var NoteContent = React.createClass({
        displayName: 'NoteContent',

        mixins: [RenderMixin],

        componentDidMount: function componentDidMount() {
          var _this = this;
          var thisDom = ReactDOM.findDOMNode(this);

          //音频翻译按钮点击
          $(thisDom).on("click", ".res a", function (event) {
            event.preventDefault();

            var $mediaDiv = $(this).closest(".media");

            if ($mediaDiv.length > 0) {

              var $mediaLink = $mediaDiv.find("a[data-media]");
              var mediaUrl = $mediaLink.data("media");
              if (mediaUrl) {

                var pcmUrl = mediaUrl + ".pcm";

                // $mediaDiv.addClass("translating");
                // AudioUtil.translateMediaUri(pcmUrl,function(data){
                //     $mediaDiv.removeClass("translating");

                //     if(data.result){
                //         //将翻译状态设为已成功
                //         $mediaLink.attr("data-translated",1);

                //         //状态文字进行改变
                //         $mediaDiv.find(".res").text("以下文字识别结果由讯飞提供,仅供参考");

                //         //将结果放到音频后面
                //         $mediaDiv.after(data.result);

                //         //保存内容
                //         _this.saveContent();
                //     }else{
                //         //转译失败
                //         NotificationUtil.showMessage('转译语音失败','error');
                //     }
                // });
              } else {
                //提示未找到媒体文件
                _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("not_found_media_files"), 'error');
              }
            }
          });

          $(thisDom).on("click", "a", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");

            //如果是点击的放大图片
            if ($(event.target).hasClass("fp-ext-zoom-in")) {
              return false;
            } else {
              //点击的不是锚点，而且点击的target不是系统按钮
              if (href != "#") {
                window.open(this.href);
              } else {

                //如果点击的是媒体文件
                var media = $(this).data("media");
                var type = $(this).data("type");

                var $mediaDiv = $(this).closest(".media");

                //音频文件
                if (/audio/.test(type)) {

                  //如果正在播放则将其暂停
                  if (_utils.AudioPlayer.isPlaying(media)) {
                    _utils.AudioPlayer.pause();

                    $mediaDiv.removeClass("playing");
                  } else {
                    $mediaDiv.addClass("loading");
                    _utils.AudioPlayer.play(media, function (status) {
                      switch (status) {
                        case "playing":
                        case "timeupdate":
                        case "loadedmetadata":
                          $mediaDiv.addClass("playing").removeClass("loading");
                          break;
                        case "ended":
                        case "pause":
                          $mediaDiv.removeClass("playing");
                          break;
                        case "error":
                          $mediaDiv.removeClass("loading").addClass("error").removeClass("playing");
                          break;
                      }
                      ;
                    });
                  }
                }
              }
            }
          });

          $(thisDom).on("click", ".img-icon", function (event) {

            _utils.WindowMessager.notifyCurrentPage("viewimage", $(this).closest(".img").find("img"));
          });

          $(thisDom).on("click", ".media-cover", function (event) {
            _utils.WindowMessager.notifyCurrentPage("viewMedia", $(this).closest(".media").find("img"));
          });

          //任务框
          this.listenTodo();
        },

        listenTodo: function listenTodo() {
          var _this = this;
          var thisDom = ReactDOM.findDOMNode(this);

          $(thisDom).on("mousedown", ".todo-item", function (event) {
            //根据字体大小确定可点击的范围
            //fontsize_level: {"12px": 1,"16px": 2,"18px": 3,"22px": 4,"28px": 5}
            var xMax = 18,
            yMax = 23;
            if ($(this).hasClass('font-size-1')) {
              xMax = 15, yMax = 17;
            } else if ($(this).hasClass('font-size-2')) {
              xMax = 18, yMax = 23;
            } else if ($(this).hasClass('font-size-3')) {
              xMax = 20, yMax = 26;
            } else if ($(this).hasClass('font-size-4')) {
              xMax = 24, yMax = 32;
            } else if ($(this).hasClass('font-size-5')) {
              xMax = 30, yMax = 41;
            }

            if (!$(event.target).hasClass('todo-item')) xMax = 1;

            if (event.offsetX < xMax && event.offsetY < yMax) {
              event.preventDefault();
            }
          });

          $(thisDom).on("click", ".todo-item", function (event) {
            //根据字体大小确定可点击的范围
            //fontsize_level: {"12px": 1,"16px": 2,"18px": 3,"22px": 4,"28px": 5}
            var xMax = 18,
            yMax = 23;
            if ($(this).hasClass('font-size-1')) {
              xMax = 15, yMax = 17;
            } else if ($(this).hasClass('font-size-2')) {
              xMax = 18, yMax = 23;
            } else if ($(this).hasClass('font-size-3')) {
              xMax = 20, yMax = 26;
            } else if ($(this).hasClass('font-size-4')) {
              xMax = 24, yMax = 32;
            } else if ($(this).hasClass('font-size-5')) {
              xMax = 30, yMax = 41;
            }

            if (!$(event.target).hasClass('todo-item')) xMax = 1;

            if (event.offsetX < xMax && event.offsetY < yMax) {
              if ($(this).hasClass("done")) {
                $(this).removeClass("done");
              } else {
                $(this).addClass("done");
              }

              //更新内容
              _this.saveContent();
            }
          });
        },

        /**
         * 保存内容
         *
         */
        saveContent: function saveContent() {
          var dom = ReactDOM.findDOMNode(this);
          var content = dom.innerHTML;

          //对内容进行还原处理
          content = _utils.ContentUtil.filterContentFromOutside(content);

          this.props.onInput({content: content});
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteContent;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(1), __webpack_require__(161)))

    /***/
  },
  /* 243 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  单条贴纸 内容区域
       */

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RenderMixin = {
        _render: function _render() {

          return React.createElement("div", {
            className: "note-content",
            dangerouslySetInnerHTML: {__html: this.props.content || ""}
          });
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 244 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _OKConfig, _O) {
      /**
       *  单条贴纸 来源
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var RenderMixin = __webpack_require__(245);

      var NoteMeta = React.createClass({
        displayName: 'NoteMeta',

        statics: {
          tapCount: 0
        },

        mixins: [RenderMixin],

        /**
         * 连续点击5次开启调试模式
         * @return {[type]} [description]
         */
        enableDev: function enableDev() {

          if (this.constructor.tapCount >= 5) {
            _OKConfig.environment = 'debug_env';

            _O.debug("打开调试模式");
          } else {
            if (this.constructor.tapTimer) {
              clearTimeout(this.constructor.tapTimer);
            }

            var _this = this;
            this.constructor.tapTimer = setTimeout(function () {
              if (_this.constructor.tapCount < 5) {
                _this.constructor.tapCount = 0;
              }
            }, 800);

            this.constructor.tapCount++;
          }
        },

        /**
         * 打开来源网页
         */
        openSource: function openSource(event) {
          event.preventDefault();

          window.open(this.props.source);
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteMeta;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(163), __webpack_require__(162)))

    /***/
  },
  /* 245 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  单条贴纸来源
       */
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {

        _render: function _render() {

          var LinkJSX = "";
          if (this.props.source) {
            var source = this.props.source;

            //多个来源处理,只显示第一个
            if (this.props.source.indexOf(",") > 0) {
              source = this.props.source.split(",")[0];
            }

            var domain = _utils.UrlUtil.getDomainForUrl(source).toUpperCase();

            LinkJSX = React.createElement(
            "a",
            {
              className: "fp-tooltips",
              "data-tooltip": _utils.LocaleUtil.translate("source_link"),
              "data-placement": "top",
              href: source,
              title: this.props.source,
              onClick: this.openSource
            },
            React.createElement("span", {className: "fp-icon-font fp-ext-link"}),
            React.createElement(
            "span",
            {className: "slink"},
            domain
            )
            );
          } else {
            LinkJSX = React.createElement(
            "a",
            {href: "#", className: "no-source", title: _utils.LocaleUtil.translate("no_source")},
            React.createElement("span", {className: "fp-icon-font fp-ext-link"}),
            _utils.LocaleUtil.translate("no_source")
            );
          }
          ;

          return React.createElement(
          "div",
          {className: "note-meta"},
          LinkJSX
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 246 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var RenderMixin = __webpack_require__(247);
      var stateMixin = __webpack_require__(216);

      var NoteOp = React.createClass({
        displayName: 'NoteOp',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            switchOp: false
          };
        },

        switchOp: function switchOp(event) {
          if (event) event.preventDefault();

          this._setState({
            switchOp: !this.state.switchOp
          }, function () {
            //console.log("render done");
          });
        },

        handleEdit: function handleEdit(event) {
          this.props.handleMaximize(event);

          this.switchOp(event);
        },

        handleShare: function handleShare(event) {
          //没有强制私密才允许操作
          if (!$(document.body).hasClass("force-private")) {
            this.props.shareNote();

            this.switchOp(event);
          }
        },

        handleShowTag: function handleShowTag() {
          this.props.showTagPanel();

          this.switchOp(event);
        },

        handleSecret: function handleSecret(event) {

          //没有强制私密才允许操作
          if (!$(document.body).hasClass("force-private")) {
            this.props.switchSecret(event);

            this.switchOp(event);
          }
        },

        componentDidMount: function componentDidMount() {
          var _this = this;
          //模拟失焦
          $(document).on("mousedown", function (event) {
            var target = event.target;

            //如果当前是展开状态，但是点击的不是下拉菜单中的菜单，则关闭下拉菜单
            var opPanel = _this.refs.opPanel;
            if (_this.state.switchOp) {

              if (ReactDOM.findDOMNode(opPanel) && !$.contains(ReactDOM.findDOMNode(opPanel), target)) {
                _this.switchOp(event);
              }
            }
          });
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteOp;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 247 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {/*
	*  单条贴纸操作菜单
	*/

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {
          var classNames = "note-op ";

          // 私密标签
          classNames += this.props.publyc == 1 ? "public" : "secret";
          // 控制操作面板显示
          classNames += this.state.switchOp ? " show-op" : "";

          var secretSymbolJSX = "",
          publycStyle = {};
          if (this.props.publyc != 1) {
            secretSymbolJSX = React.createElement("span", {className: "secret-symbol"});
            publycStyle = {color: '#BB0000'};
          }

          //私密性ui类控制
          var secretClass = "note-toggle-secret ";
          secretClass += this.props.publyc == 1 ? "" : "checked";

          // 点击展开的时候在渲染操作组件
          var opPanel = "";
          if (this.state.switchOp) {

            //未被删除的菜单
            if (this.props.removed != 1) {
              opPanel = React.createElement(
              "ul",
              {className: "op-panel", ref: "opPanel"},
              React.createElement(
              "li",
              {className: "note-tag", onClick: this.handleShowTag},
              React.createElement(
              "a",
              {href: "#"},
              "分类"
              )
              ),
              React.createElement(
              "li",
              {className: "note-share", onClick: this.handleShare},
              React.createElement(
              "a",
              {href: "#"},
              _utils.LocaleUtil.translate("share")
              )
              ),
              React.createElement(
              "li",
              {className: "note-editor", onClick: this.handleEdit},
              React.createElement(
              "a",
              {href: "#"},
              _utils.LocaleUtil.translate("edit")
              )
              ),
              React.createElement(
              "li",
              {className: secretClass, onClick: this.handleSecret},
              React.createElement(
              "span",
              null,
              _utils.LocaleUtil.translate("secret")
              ),
              React.createElement(
              "a",
              {className: "check-box", href: "#"},
              React.createElement("span", {className: "fp-icon-font fp-ext-done"})
              )
              ),
              React.createElement(
              "li",
              {className: "note-delete", onClick: this.props.onDelete},
              React.createElement(
              "a",
              {href: "#"},
              _utils.LocaleUtil.translate("delete")
              )
              )
              );

              //被删除了的贴纸
            } else {
              opPanel = React.createElement(
              "ul",
              {className: "op-panel", ref: "opPanel"},
              React.createElement(
              "li",
              {className: "note-recover", onClick: this.props.onRecover},
              React.createElement(
              "a",
              {href: "#"},
              "还原贴纸"
              )
              ),
              React.createElement(
              "li",
              {className: "note-expunge", onClick: this.props.onExpunge},
              React.createElement(
              "a",
              {href: "#"},
              "彻底删除"
              )
              )
              );
            }
          }

          return React.createElement(
          "div",
          {className: classNames},
          React.createElement(
          "a",
          {
            className: "publyc-mark fp-tooltips",
            "data-tooltip": _utils.LocaleUtil.translate("menu"),
            "data-placement": "top",
            href: "#",
            onClick: this.switchOp
          },
          secretSymbolJSX,
          React.createElement("span", {style: publycStyle, className: "fp-icon-font fp-ext-more"})
          ),
          opPanel
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /*私密的标志*/
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 248 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, ReactDOM, $, _OKConfig) {
      /**
       *  分享面板
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(249);
      var stateMixin = __webpack_require__(216);

      __webpack_require__(250);

      var NoteSharePanel = React.createClass({
        displayName: 'NoteSharePanel',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            noteData: this.props.note
          };
        },

        componentDidMount: function componentDidMount() {

          // 创建二维码
          this.creatQrcodeContent(this.state.noteData);
        },

        // 创建二维码
        creatQrcodeContent: function creatQrcodeContent(note) {

          var sharePanel = ReactDOM.findDOMNode(this);
          var $qrcode = $(sharePanel).find(".qrcode");
          $qrcode.empty();

          $qrcode.qrcode({
            size: 110,
            color: '#FFF',
            text: _models.NoteModel.getNoteUrl(note.gnid)
          });
        },

        // 调用分享API
        shareTo: function shareTo(app, event) {
          event.preventDefault();
          var _this = this;

          // 获取分享链接
          var url = _OKConfig.share_default_url;
          if (_this.state.noteData.publyc != 0) {
            url = _models.NoteModel.getNoteUrl(_this.state.noteData.gnid);
          }

          if (app) {
            if (app == "link") {
              // 如果是链接就拷贝链接
              _this.copyLink(url);
            } else {

              var div = $("<div><div/>").get(0).innerHTML = _this.state.noteData.content;
              var firstImgSrc = $(div).find("img").first().attr("src") || "";
              div = null;

              var info = {
                title: _this.state.noteData.title,
                content: _this.state.noteData.content,
                img_url: firstImgSrc,
                share_url: url || ""
              };

              _utils.ShareUtil.setShareInfo(info);
              _utils.ShareUtil.shareTo(app);
            }
            ;
          }
          ;
        },

        //拷贝网址链接
        copyLink: function copyLink(url) {
          //支持复制命令
          if (document.execCommand && document.execCommand("copy")) {
            var $input = $("<input>", {
              id: "copy_input",
              style: "z-index:-199999;opacity:0;position:absolute;top: 100000000px;",
              value: url
            });

            $("body").append($input);

            $input.focus().select();

            if (document.execCommand("copy")) {
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("copy_link_success"));
              $input.remove();
            } else {
              window.prompt(_utils.LocaleUtil.translate("copy_link_tips"), url);
            }
          } else {
            //弹窗提示复制
            window.prompt(_utils.LocaleUtil.translate("copy_link_tips"), url);
          }

          //不支持flash复制，则弹窗复制
          // if(!window._ENV.flashAvailable){

          // }
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteSharePanel;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(1), __webpack_require__(161), __webpack_require__(163)))

    /***/
  },
  /* 249 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  分享面板
       */

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RenderMixin = {
        _render: function _render() {

          return React.createElement(
          "div",
          {className: "note-share-panel"},
          React.createElement(
          "div",
          {className: "share-bg"},
          React.createElement(
          "h3",
          {className: "share"},
          "分享"
          ),
          React.createElement(
          "div",
          {className: "share-content"},
          React.createElement("div", {className: "qrcode"}),
          React.createElement(
          "ul",
          null,
          React.createElement(
          "li",
          null,
          React.createElement(
          "a",
          {href: "#dt_weibo", onClick: this.shareTo.bind(null, "weibo")},
          React.createElement("span", {className: "icon-font fp-ext-weibo"})
          )
          ),
          React.createElement(
          "li",
          null,
          React.createElement(
          "a",
          {href: "#dt_qzone", onClick: this.shareTo.bind(null, "qzone")},
          React.createElement("span", {className: "icon-font fp-ext-zone"})
          )
          ),
          React.createElement(
          "li",
          null,
          React.createElement(
          "a",
          {href: "#dt_twitter", onClick: this.shareTo.bind(null, "twitter")},
          React.createElement("span", {className: "icon-font fp-ext-twitter"})
          )
          ),
          React.createElement(
          "li",
          null,
          React.createElement(
          "a",
          {href: "#dt_link", onClick: this.shareTo.bind(null, "link")},
          React.createElement("span", {className: "icon-font fp-ext-link"})
          )
          )
          )
          ),
          React.createElement(
          "a",
          {className: "close", href: "#dt_share_close", onClick: this.props.close},
          React.createElement("span", {className: "icon-font fp-ext-right-small ca9"}),
          React.createElement("span", {className: "icon-font fp-ext-right-small c31"})
          )
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 250 */,
  /* 251 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {/*
	*  单条贴纸 展开闭合开关
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var RenderMixin = __webpack_require__(252);
      var stateMixin = __webpack_require__(216);

      var NoteSwitch = React.createClass({
        displayName: 'NoteSwitch',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {};
        },

        componentDidMount: function componentDidMount() {
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteSwitch;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 252 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {/*
	*  单条贴纸 展开闭合开关
	*/
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {

          return React.createElement(
          "div",
          {className: "note-switch"},
          React.createElement(
          "a",
          {className: "open", onClick: this.props.handleOpen, href: "#"},
          _utils.LocaleUtil.translate("unfold_note"),
          React.createElement("span", {className: "icon-font fp-ext-list-expend"})
          ),
          React.createElement(
          "a",
          {className: "close", onClick: this.props.handleOpen, href: "#"},
          _utils.LocaleUtil.translate("collapse_note"),
          React.createElement("span", {className: "icon-font fp-ext-list-up"})
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 253 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       *  各tag无内容提示模板
       */

      //render函数
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _renderJsx = __webpack_require__(254);

      var _renderJsx2 = _interopRequireDefault(_renderJsx);

      var _utils = __webpack_require__(166);

      var NoResult = React.createClass({
        displayName: 'NoResult',

        mixins: [_renderJsx2['default']],

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        getInitialState: function getInitialState() {
          return {};
        },

        componentDidMount: function componentDidMount() {
          var $noResult = $(ReactDOM.findDOMNode(this));
          $noResult.on("click", ".btn", function () {
            _utils.WindowMessager.notifyCurrentPage("newnote-active");
          });
        }
      });

      exports['default'] = NoResult;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 254 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var tplMixins = {
        renderFn: function renderFn() {
          var speacialTag = "",
          noSearchMessage = _utils.LocaleUtil.translate("related_note"),
          noNoteMessage = _utils.LocaleUtil.translate("no_note"),
          iconTypes = "fp-ext-tag-no-result";

          return React.createElement(
          "div",
          {className: "note no-result " + speacialTag},
          React.createElement(
          "div",
          {className: "main-cont"},
          React.createElement(
          "div",
          {className: "des search"},
          React.createElement(
          "div",
          {className: "sign-icon"},
          React.createElement("span", {className: "fp-ext-tag-no-result icon-font"})
          ),
          React.createElement(
          "span",
          null,
          noSearchMessage
          )
          ),
          React.createElement(
          "div",
          {className: "tag-result"},
          React.createElement(
          "div",
          {className: "sign-icon"},
          React.createElement("span", {className: "icon-font " + iconTypes})
          ),
          React.createElement(
          "div",
          {className: "des"},
          noNoteMessage
          ),
          React.createElement(
          "div",
          {className: "help"},
          React.createElement(
          "a",
          {
            href: "http://funp.in/paper/ba7a38d34f2f45112b7bdc746fc1f7ea24?u=1112729",
            target: "_blank",
            className: "btn"
          },
          _utils.LocaleUtil.translate("help")
          )
          )
          )
          )
          );
        }
      };

      exports["default"] = tplMixins;
      module.exports = exports["default"];
      /* <div className="add-note"><span className="btn">点击添加</span></div> */
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 255 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  单条贴纸展开和关闭编辑器按钮
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      var stateMixin = __webpack_require__(216);
      var RenderMixin = __webpack_require__(256);

      var NoteToggleEditor = React.createClass({
        displayName: 'NoteToggleEditor',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {};
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteToggleEditor;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 256 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {/*
	*单条贴纸私密性切换操作
	*/
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {

          return React.createElement(
          "div",
          {className: "note-toggle-editor"},
          React.createElement(
          "a",
          {
            className: "shrink-editor fp-tooltips",
            "data-tooltip": _utils.LocaleUtil.translate("collapse_editor"),
            "data-placement": "top",
            href: "#",
            onClick: this.props.handleMaximize
          },
          React.createElement("span", {className: "icon-font fp-ext-shrink"})
          ),
          React.createElement(
          "a",
          {
            className: "expend-editor fp-tooltips",
            "data-tooltip": _utils.LocaleUtil.translate("unfold_editor"),
            "data-placement": "top",
            href: "#",
            onClick: this.props.handleMaximize
          },
          React.createElement("span", {className: "icon-font fp-ext-expand"})
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 257 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _O, ReactDOM, _OKConfig) {
      /**
       *  //tinymce编辑器
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      var _renderJs = __webpack_require__(258);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var noShareSrc = __webpack_require__(259);

      var stateMixin = __webpack_require__(216);

      // 编辑器实例
      var _instance = null;

      var MCEEditor = React.createClass({
        displayName: 'MCEEditor',

        mixins: [_renderJs2['default'], stateMixin],

        statics: {
          currentGnid: 0
        },

        //贴纸数据的备份,需要保持更新,
        //避免编辑器中数据的更新依赖于组件的渲染
        noteData: null,

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        getInitialState: function getInitialState() {
          return {
            isCurrent: false
          };
        },

        //动态加载编辑器脚本
        loadEditor: function loadEditor(success, fail) {
          var _this = this;

          if (!window.tinymce) {

            //给上正在加载标识
            _this._setState({
              loading: true
            });

            var script = document.createElement("script");
            script.onload = function () {
              //去掉正在加载标识
              _this._setState({
                loading: false
              });

              //初始化编辑器
              _this.initEditor(success);
            };

            script.onerror = function () {
              //去掉正在加载标识
              _this._setState({
                loading: false
              });

              if ($.isFunction(fail)) fail();
            };

            script.src = 'https://cdn.quickwis.com/common/js/tinymce/tinymce.js';

            document.body.appendChild(script);
          } else {
            if ($.isFunction(success)) success.call(null);
          }
        },

        initEditor: function initEditor(callback) {
          var _this = this;

          //实例化编辑器
          this.initializeMCE(function () {
            _this.initMCEUI();

            //监听标题内容变化
            _this.watchTitleField();

            //监听内容的改变
            _this.watchContentField();

            _this.setBindings();

            _this.dragMerge();

            if ($.isFunction(callback)) callback.call(null);
          });
        },

        /**
         * 在编辑器打开时 拖拽扩展的贴纸进行合并
         * @return {[type]} [description]
         */
        dragMerge: function dragMerge() {
          var _this = this;
          var $div = $("<div><div>").css({
            "height": "10px",
            "width": "100%",
            "background": "#ffec00",
            "opacity": "0.8"
          });

          // 编辑器窗口相对窗口位置  这个不该在回调里面算
          var area = {},
          oleft,
          otop,
          owidth,
          oheight,
          overMousePosX,
          overMousePosY;

          var $mceIfr = $("#mce_instance_ifr");

          _utils.DragMerge.drag(".note .handle", {keepOrigin: true}, updataArea, findInsertPosition, makeContent);

          /**
           * [在mousedown 的时候计算一次编辑的范围]
           * @return {[type]} [description]
           */
          function updataArea() {
            var ooffset = $mceIfr.offset();

            oleft = ooffset.left;
            otop = ooffset.top;
            owidth = $mceIfr.width();
            // oheight = $mceIfr.height() - 125;

            oheight = 0;
            var lastChild = _instance.getBody().lastChild;
            if (lastChild) {
              if (lastChild.nodeType == 3) {
                // 文本节点 创建选区
                var rang = document.createRange();
                rang.selectNode(lastChild);
                oheight = rang.getBoundingClientRect().bottom;
              } else {
                oheight = lastChild.getBoundingClientRect().bottom;
              }
            }

            area = {
              left: oleft,
              right: oleft + owidth,
              top: otop,
              bottom: oheight
            };
          };

          /**
           * mousemove 时候找到要插入的点，然后创建占位标志
           * @param  {[type]} data [description]
           * @return {[type]}      [description]
           */
          function findInsertPosition(data) {
            overMousePosX = data.x;
            overMousePosY = data.y;

            // 计算出鼠标释放位置在编辑器里面的位置
            var mce = overMousePosY - area.top;

            // 如果鼠标释放的点在编辑器的范围内   左  右 上  下

            if (overMousePosX > area.left && overMousePosX < area.right) {
              var iDoc = $mceIfr.get(0).contentDocument;
              var mceBody = iDoc.getElementById("tinymce");

              $div.show();

              // 找到鼠标区域的节点   把占位符插到他下面
              if (mce > area.bottom) {
                $(mceBody).append($div);
              } else if (mce <= 25) {
                $(mceBody).prepend($div);
              } else {
                var truedom = _this.getEntryPos(mceBody, mce);

                if (truedom) {
                  $(truedom).after($div);
                } else {
                  // $(mceBody).append($div);
                }
              }
            } else {
              $div.hide();
            }
          };

          /**
           * 在mouseup时候判断时候在编辑器内部  如果在编辑器内部就插入内容
           * @param  {[type]} data [description]
           * @param  dom [div] [被拖拽的贴纸dom节点]
           */
          function makeContent(event, data, dragNoteDiv) {
            overMousePosX = data.x;
            overMousePosY = data.y;

            // 计算出鼠标释放位置在编辑器里面的位置
            var mce = overMousePosY - area.top;

            // 如果鼠标释放的点在编辑器的范围内   左  右 上  下
            if (overMousePosX > area.left && overMousePosX < area.right) {
              var notes = _components.NoteList._notes;
              var index = $(dragNoteDiv).index();

              if (index >= 0 && notes[index]) {
                var noteInfo = notes[index];

                // 判断是不是第一次拖拽合并
                if (!_models.LocalKVDB.get("dragMerge")) {
                  _utils.WindowMessager.notifyCurrentPage("show-merge-tips");
                }
                ;

                //进入编辑模式
                if (_instance.getBody().contentEditable == "false") {
                  _this.enterEditMode(event);
                }
                ;

                $div.addClass("to-be-removed");
                var $place = $div;
                //如果占位符是放在了特殊元素中，例如ul中，则让ul从div处拆开，然后放入ul后面
                if ($div.closest('ul').length > 0 || $div.closest('ol').length > 0) {

                  var list = $div.closest("ul").length > 0 ? $div.closest('ul').get(0) : $div.closest('ol').get(0);
                  var breakNode = $div.get(0);
                  var breakOffset = breakNode.childNodes.length == 0 ? 0 : breakNode.childNodes.length;
                  var newList = _utils.DomUtil.splitNode(list, breakNode, breakOffset);

                  if (newList) {
                    $place = $(newList);
                  }
                }

                if ($place) {
                  //合并来源
                  var source = _this.mergeSources(noteInfo);

                  // 如果没有来源就不处理
                  var sourceHtml = "";
                  if (source) {
                    sourceHtml = "<div class=\"fp-merge-source\">" + _utils.LocaleUtil.translate("source_link") + ": <a href=" + source + ">" + source + "</a></div><br/>";
                  }

                  $place.after("<div><br/></div><h2>" + noteInfo.title + "</h2>" + noteInfo.content + sourceHtml);

                  //合并标签
                  _this.mergeTags(noteInfo);

                  //保存内容
                  _this.triggerResize();
                  _this.saveContent();

                  //如果没有按住altKey，删除被拖拽的贴纸
                  if (!event.altKey && !event.metaKey) {
                    _utils.WindowMessager.notifyCurrentPage('delete-note', {gnid: noteInfo.gnid});
                  }
                }

                $(".to-be-removed", _instance.getBody()).remove();
              } else {
                _O.debug("拖拽合并", "没找到贴纸");
              }
            }
            ;

            //删除占位符
            $div.remove();
          };
        },

        /**
         * 合并贴纸的时候 合并标签
         * @param  {[type]} noteInfo [拖拽的贴纸模型]
         * @return {[type]}          [description]
         */
        mergeTags: function mergeTags(noteInfo) {
          // 合并标签
          var dragNoteTags = noteInfo.tags || [];

          if (dragNoteTags.length > 0) {

            var currentNote = this.getNote();
            var currentNoteTags = currentNote.tags || [];

            //如果当前贴纸没有标签  直接把拖拽的贴纸的标签都给他加上
            if (currentNoteTags.length == 0) {
              for (var i = 0; i < dragNoteTags.length; i++) {
                _models.NoteModel.addTag(currentNote, dragNoteTags[i]);
              }
            } else {
              var test = null;
              // 如果当前贴纸有标签  那么循环排除已有的 把没有的添加上
              for (var i = 0; i < dragNoteTags.length; i++) {
                if (currentNoteTags.indexOf(dragNoteTags[i]) < 0) {
                  test = _models.NoteModel.addTag(currentNote, dragNoteTags[i]);
                }
              }
            }
          }
          ;
        },

        /**
         * 拖拽合并的时候   合并来源
         * @return {[type]} [description]
         */
        mergeSources: function mergeSources(noteInfo) {
          // 合并标签
          var dragSource = noteInfo.source || "";

          if (dragSource) {
            var dragSourceArr = dragSource.split(",");
            // 如果合并进来的贴纸只有一个来源的时候才进行合并  如果有多个来源就不合并来源
            var currentNote = this.getNote();
            var currentSource = currentNote.source || "";
            var sources = currentSource.split(",").concat(dragSourceArr);
            sources = $.unique(sources);
            sources = sources.join(",");
            //合并去重
            this.save({source: sources});

            if (dragSourceArr.length === 1) {
              return dragSource;
            }
          }
          ;
        },

        /**
         * [getEntryPos 遍历块级元素，判断是否包含鼠标释放的位置]
         * @param  {[type]} blocks   [块级元素]
         * @param  {[type]} mousePos [鼠标释放时 在编辑器里面的位置]
         * @return {[type]}          [description]
         */
        getEntryPos: function getEntryPos(parent, mousePos) {
          var _this = this;
          var otop, oheight;

          var blocks = parent.childNodes;

          if (blocks.length == 0) {
            // 如果为空说明 没有子元素  那么应该把新进来的贴纸插在父级下面
            return parent;
          } else if (blocks.length == 1 && blocks[0].nodeType == 3) {
            return parent;
          } else {
            for (var i = 0, len = blocks.length; i < len; i++) {
              // dom节点
              if (blocks[i].nodeType == 1) {

                otop = blocks[i].getBoundingClientRect().top;
                oheight = $(blocks[i]).height();
              } else if (blocks[i].nodeType == 3) {
                // 文本节点 创建选区
                var rang = document.createRange();
                rang.selectNode(blocks[i]);
                var nodePos = rang.getBoundingClientRect();

                otop = nodePos.top;
                oheight = nodePos.bottom - otop;
              }

              //如果鼠标释放点在 当前节点内部  那么递归 精确找到所在节点
              if (mousePos > otop && mousePos < otop + oheight) {

                //如果是一定固定的 模块 判断插在这个模块的前后  不让插入到模块内部
                if ($(blocks[i]).attr("contenteditable") == "false") {
                  return blocks[i];
                } else if ($(blocks[i]).closest("div").attr("contenteditable") == "false") {
                  return $(blocks[i]).closest("div");
                }

                return _this.getEntryPos(blocks[i], mousePos);
              }
            }
          }
        },

        //关闭分享面板
        toggleSharePanel: function toggleSharePanel(args) {
          var $noteShareCont = $("#note_share_content");
          if (args == "show") {
            $noteShareCont.addClass("show-mec-share");
          } else {
            $noteShareCont.removeClass("show-mec-share");
            $(".mce-note-share-panel").removeClass("secret");
          }
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          // 监听分享
          var editorDOM = ReactDOM.findDOMNode(this);

          // 打开分享面板，创建二维码
          $(editorDOM).on("click", ".mce-share", function () {

            //判断用户是否登录，如果未登录则提醒登录
            var user = _models.UserModel.getLocalUser();
            if (!user || !user.uid) {

              alert("抱歉,使用此功能需要先登录");

              _utils.LoginUtil.login(false, function (data) {
                if (data.status == 1) {
                  //登录成功
                  _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_success"));
                  _utils.WindowMessager.notifyTabs('user-changed', Date.now());
                  location.reload();
                } else {
                  _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("login_error") + ':' + data.status, 'error');
                }
              });
            } else {

              var note = _this.getNote();
              //创建二维码
              _this.creatQrcodeContent(note);

              // 展示分享面板
              _this.toggleSharePanel("show");

              //分享时即时同步
              _models.SyncManager.getInstance('tag').start(true);
              _models.SyncManager.getInstance('note').start(true);
            }
          });

          //点击非分享区域关闭面板
          $(editorDOM).on("mousedown", function (event) {
            var sharePart = $(this).find(".share-bg").get(0);

            if (sharePart) {
              var $noteShareCont = $("#note_share_content");

              if (!$.contains(sharePart, event.target) && $noteShareCont.hasClass("show-mec-share")) {
                $noteShareCont.removeClass("show-mec-share");
              }
            }
          });

          // 监听切换私密状态
          $(editorDOM).on("click", ".check-box", function () {
            event.preventDefault();
            $(this).closest(".note-toggle-secret").toggleClass("checked");

            if ($(this).closest(".note-toggle-secret").hasClass("checked")) {
              $(".mce-note-share-panel").addClass("secret");

              //转为私密
              var noteObj = {
                publyc: 0
              };

              _this.save(noteObj);
            } else {
              $(".mce-note-share-panel").removeClass("secret");

              //转为公开
              var noteObj = {
                publyc: 1
              };

              _this.save(noteObj);
            }

            // 私密属性切换之后要更新二维码
            var note = _this.getNote();
            _this.creatQrcodeContent(note);
          });

          // 监听单个图标点击的分享事件
          $(editorDOM).on("click", ".share-content a", function (event) {
            event.preventDefault();

            if ($(".mce-note-share-panel").hasClass("secret")) {
              return false;
            }

            var app = $(this).data("app");

            if (app) {
              _this.shareTo(app);
            }
          });

          //监听笔记最大化事件
          _utils.WindowMessager.listenPageEvent("maximize", function (noteComponent) {
            _this.props.handleOpen(_this);

            // 关闭分享窗口
            _this.toggleSharePanel();

            _this.onOpen();

            //加载编辑器脚本
            _this.loadEditor(function () {

              //将之前打开的笔记关掉
              if (_this.state.noteComponent && _this.state.noteComponent.state.gnid != noteComponent.state.gnid) {

                _this.removeCurrentNoteComponent();
              } else {

                //编辑器打开之后(不是初始化之后)的第一条笔记
                //监听拖拽鼠标变化
                _this.listenCursorChange();
              }

              if (noteComponent) {
                //更新noteData
                _this.noteData = $.extend({}, noteComponent.state);
                // @todo 把正在编辑的组件记录下来
                _this.constructor.currentGnid = noteComponent.state.gnid || 0;
              }

              //放入新的贴纸组件
              _this._setState({
                noteComponent: noteComponent
              }, function () {
                this.triggerResize();

                //清除编辑历史
                _this.clearEditHistory();
              });
            }, function () {
              //failed
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("load_editer_error"), "error");

              if (noteComponent) {
                noteComponent._setState({
                  maximized: false
                });
              }

              _this.close();
            });
          });

          //监听编辑器关闭事件
          _utils.WindowMessager.listenPageEvent("minimize", function (event) {
            _this.close();
          });

          //监听数据更新事件，如果是当前被编辑的贴纸被更新
          _utils.WindowMessager.listenGlobalEvent('data-changed', function (data, operation) {

            //编辑器没有被打开,直接返回
            if (!_this.state.noteComponent) return false;
            _O.log('editor:data-changed', data, operation);

            if (data && data.type == 'update') {
              $(data.notes).each(function () {
                var currentNote = _this.getNote();

                //被更新的是当前贴纸
                if (this.gnid == currentNote.gnid) {

                  //判断哪个数据更新
                  if (this.modified > currentNote.modified || this.sortby > currentNote.sortby) {

                    //贴纸被删除,则关闭窗口
                    if (this.removed == 1) {
                      _this.close();
                    } else {
                      _this.noteData = $.extend({}, currentNote, this);

                      //替换
                      _this.updateData(_this.noteData);
                    }
                  }

                  //停止遍历
                  return false;
                }
              });
            }
          });

          //实时监测当前页面的可见状态
          _utils.PageUtil.pageActiveDetect(function () {
            //页面目前为active

          }, function () {
            if (_this.state.noteComponent) {
              //页面被切换,通知其他页面刷新数据,如果数据有更新的话
              var currentNote = _this.getNote();

              if (currentNote.modified > _this.state.noteComponent.state.modified) {
                _O.debug("editor:data-changed", "贴纸切换时被更新了，通知其他tab更新");
                //通知顶层数据源更新
                setTimeout(function () {
                  var note = $.extend({}, currentNote);
                  _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [note]});
                }, 0);
              }
            }
          });
        },

        // 创建二维码
        creatQrcodeContent: function creatQrcodeContent(note) {

          var editorDom = ReactDOM.findDOMNode(this);
          var $qrcode = $(editorDom).find(".qrcode");
          $qrcode.empty();

          if (note.publyc && note.publyc == 1) {
            $(".mce-note-share-panel").removeClass("secret");

            $qrcode.css({
              "background-image": "none"

            }).qrcode({
              size: 162,
              color: '#FFF',
              text: _models.NoteModel.getNoteUrl(note.gnid)
            });
          } else {
            $(".mce-note-share-panel").addClass("secret");

            $qrcode.css({
              "background-image": "url(" + noShareSrc + ")"
            });
          }
        },

        // 调用分享API
        shareTo: function shareTo(app) {
          event.preventDefault();
          var _this = this;

          // 获取分享链接
          var url = _OKConfig.share_default_url;

          var noteObj = _this.getNote();

          if (noteObj.publyc != 0) {
            url = _models.NoteModel.getNoteUrl(noteObj.gnid);
          }

          if (app) {
            if (app == "link") {
              // 如果是链接就拷贝链接
              _this.copyLink(url);
            } else {

              var div = $("<div><div/>").get(0).innerHTML = noteObj.content;
              var firstImgSrc = $(div).find("img").first().attr("src") || "";
              div = null;

              var info = {
                title: noteObj.title,
                content: noteObj.content,
                img_url: firstImgSrc,
                share_url: url || ""
              };

              _utils.ShareUtil.setShareInfo(info);
              _utils.ShareUtil.shareTo(app);
            }
            ;
          }
          ;
        },

        //拷贝网址链接
        copyLink: function copyLink(url) {
          //支持复制命令
          if (document.execCommand && document.execCommand("copy")) {
            var $input = $("<input>", {
              id: "copy_input",
              style: "z-index:-199999;opacity:0;position:absolute;top: 100000000px;",
              value: url
            });

            $("body").append($input);

            $input.focus().select();

            if (document.execCommand("copy")) {
              _utils.NotificationUtil.showMessage(_utils.LocaleUtil.translate("copy_link_success"));
              $input.remove();
            } else {
              window.prompt(_utils.LocaleUtil.translate("copy_link_tips"), url);
            }
          } else {
            //弹窗提示复制
            window.prompt(_utils.LocaleUtil.translate("copy_link_tips"), url);
          }

          //不支持flash复制，则弹窗复制
          // if(!window._ENV.flashAvailable){

          // }

          $("#editor").addClass("editing-content");
        },

        initMCEUI: function initMCEUI() {
          //插入标题域
          this.insertTitleField();

          //插入元数据域
          this.insertMetaField();

          //插入分享组件
          this.insertShareContent();

          //插入保存状态
          this.insertSaveTips();

          //最小化标签
          this.insertMinimizeBtn();

          //图片上传UI放上
          this.uploadimgInput();

          //样式
          _instance.getBody().style.paddingBottom = 0 + "px";
        },

        //图片上传UI放上,盖在图片图标上面
        uploadimgInput: function uploadimgInput() {
          var upimg = "<input id=\"upload_img\" type=\"file\" accept=\"image/*\" multiple style=\"position: absolute;cursor:pointer;width: 1px;left: 0;top: -1000px;opacity: 0;height: 1px;z-index: 99999;\">";
          var $icon = $(ReactDOM.findDOMNode(this)).find(".mce-i-image");

          //在toolbar图片上面盖上图片选择input
          $icon.closest("button").after($(upimg));

          //tinymce会对id为mceu_数字的元素禁用默认事件,所以这里去掉不会影响样式
          $icon.closest(".mce-widget").removeAttr("id");
        },

        setBindings: function setBindings() {
          var _this = this;

          //固定toolbar
          _this.updateToolbarFloatOnScroll();

          //todo list监听
          _this.listenTodo();

          _this.listenDelete();

          //图片上传监听
          _this.listenImageFileInsert();

          //拖拽时让扩展知道
          $(_instance.getDoc()).on("dragstart", function (event) {
            var dt = event.originalEvent.dataTransfer;

            window.top.postMessage({drag: "dragstart"}, "*");
          });

          //拖拽结束时让扩展知道
          $(_instance.getDoc()).on("dragend", function () {
            window.top.postMessage({drag: "dragend"}, "*");
          });

          // 监听Esc退出编辑事件
          $(_instance.getDoc()).on("keyup", function (event) {
            if (event.keyCode && event.keyCode == 27) {
              _this.close();
            }
          });
        },

        listenImageFileInsert: function listenImageFileInsert() {
          var _this = this;

          // 手动触发选择图片事件，会比用户点击快一些出现系统选择框
          $(".mce-i-image").closest("button").on("click", function () {
            $("#upload_img").click();
          });

          $("#editor").on("change", "#upload_img", function (event) {
            var files = event.target.files;

            var output = [];
            var noteId = _this.getNote() && _this.getNote().id;

            //光标位置
            var range = _instance.selection.getRng();

            for (var i = 0, f; f = files[i]; i++) {
              /*
	     *	f.name,f.type,f.size,f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString()
	     */
              if (f.type.indexOf("image/") == 0) {
                var blob = f.slice(0, f.size);
                blob = new Blob([blob], {type: f.type});

                _utils.ContentUtil.handleImageFileInsert(blob, function (data) {
                  //上传成功
                  if (data.html) {
                    //插入图片内容
                    _this.insertContent(data.html);

                    var div = _instance.getDoc().createElement('div');
                    var br = _instance.getDoc().createElement('br');
                    div.appendChild(br);

                    //将光标放到图片内容后面
                    var $imgCon = $('#img_' + data.domID, _instance.getDoc());
                    if ($imgCon.length > 0) {
                      $imgCon.after(div);

                      _this.DOMUtil.placeCaretAfterNode(div);
                      $imgCon.removeAttr('id');
                    }

                    _this.saveContent();
                  }

                  if (data.image) {
                    data.image.uploaded = true;
                    //保存贴纸图片信息
                    _this.save({imglist: [data.image]});
                  }
                }, function (e) {
                  _this.showUploadProgress(e);
                });
              }
            }

            //将input值清空,用户可能想要上传用一张图片
            this.value = '';
          });

          //黏贴
          $(_instance.getBody()).on("paste", _this.handlePaste);
        },

        //处理编辑器中的黏贴事件
        handlePaste: function handlePaste(event) {
          var _this = this;

          var e = event.originalEvent;
          var dt = e.clipboardData;
          var note = this.getNote();
          var noteId = note && note.id;

          //用户黏贴的内容中可能包含图片文件，html(包含img标签)，内容保存放入content，image保存放入imglist
          _utils.ContentUtil.handleClipdataPaste(e, function (data) {
            if (data) {

              if (data.html) {
                //可编辑区域的黏贴处理
                _utils.ContentUtil.pasteHtmlInEditable(data.html, _instance.getBody(), _this.insertContent);

                _this.addUndoHistory();

                //即时保存内容
                _this.saveContent();
              }

              //拷贝的内容中包含图片信息,则放入更新队列中
              if ($.isArray(data.images) && data.images.length > 0) {
                //将图片标识为已经上传
                $(data.images).each(function () {
                  this.uploaded = true;
                });
                _this.save({imglist: data.images});
              } else {
                //包含第三方图片，则进行上传
                _utils.ContentUtil.getImagesInContent(data.html, function (images) {

                  _models.NoteModel.uploadImagesInNote(images, {content: _this.getContentHtml()}, function (updatedProps) {

                    if (updatedProps.imglist) {
                      $(updatedProps.imglist).each(function (i, image) {
                        var cdn_img_url = _utils.ImageUtil.getFullsizeImgViaSrc(image.url, image.size, image.width, image.height, image.type.indexOf('gif') > -1);

                        //实时更新当前编辑器中的内容
                        $('img[src="' + image.url + '"]', _instance.getBody()).attr('src', cdn_img_url).attr('_src', image.url).attr('data-width', image.width).attr('data-height', image.height).removeAttr('data-mce-src');
                      });

                      if (_this.constructor._saveTimeout) clearTimeout(_this.constructor._saveTimeout);

                      _this.handleInput(updatedProps);
                    }
                  });
                });
              }
            }
          }, function (e) {
            _this.showUploadProgress(e);
          });
        },

        //在内容中展示上传过程进度条
        showUploadProgress: function showUploadProgress(e) {
          //如果是图片则有上传progress
          //将progress UI放入dom结构
          //确定progress UI相对于贴纸容器的位置
          //进度条的调整
          var progressID = e.okprogressID;
          var bar = this.progressBarExist(progressID);

          var percentage = parseInt(e.loaded / e.total * 100, 10) + "%";

          if (bar) {
            $(bar).find('.pro').css({'width': percentage});

            if (percentage == '100%') {
              $(bar).remove();
            }
          } else {
            this.insertProgressBar(progressID, percentage);
          }
        },

        //上传进度条是否存在
        progressBarExist: function progressBarExist(id) {
          var dom = _instance.getBody();

          var $bar = $("#upload_" + id, dom);

          return $bar.length > 0 && $bar.get(0);
        },

        //插入上传进度条
        insertProgressBar: function insertProgressBar(progressID, percentage) {
          var placeholderId = progressID;

          var bar = $("<div>", {
            "class": "uploadbar",
            "data-id": placeholderId,
            "id": "upload_" + placeholderId
          }).append($("<div>", {}).append($("<p>", {"text": _utils.LocaleUtil.translate("uploading")})).append(
          // bar
          $("<div>", {"class": "bar"}).append(
          //progress
          $("<div>", {"class": "pro", "style": "width:" + (percentage || 0), "text": "uploading..."}))));

          var html = $('<div>').append(bar).html();

          this.insertContent(html);

          //插入后将光标放到progressbar以外
          var dom = this.progressBarExist(placeholderId);
          this.DOMUtil.placeCaretAfterNode(dom);

          //如果已经完成上传则删除进度条
          if (percentage == '100%' && dom) {
            $(dom).remove();
          }

          return placeholderId;
        },

        /**
         * 在编辑器中插入html内容
         *
         * @param  string content [需要被插入的内容]
         * @param  boolean newline [是否是在新的一行掺入]
         */
        insertContent: function insertContent(content, newline) {
          //如果需要在新的一行插入
          if (newline) {
            var range = _instance.selection.getRng();

            if (range.startContainer) {
              var $firstLevelChild = $(range.startContainer).parentsUntil('body');

              if ($firstLevelChild.length > 0) {
                var node = $firstLevelChild.get(0);
                var div = _instance.getDoc().createElement("div");

                //将插入内容的占位符放在node后面
                if (node.nextSibling) {
                  node.parentNode.insertBefore(div, node.nextSibling);
                } else {
                  node.parentNode.appendChild(div);
                }

                var newRange = _instance.getDoc().createRange();
                newRange.startContainer = div;
                newRange.endContainer = div;
                newRange.startOffset = 0;
                newRange.endOffset = 0;

                var selection = _instance.selection.getSel();
                selection.removeAllRanges();
                selection.addRange(newRange);
              }
            }
          }

          _instance.insertContent(content);

          //每次插入内容进行高度重设
          this.triggerResize();
        },

        //触发编辑器自动resize事件
        triggerResize: function triggerResize() {
          //编辑器需要一定时间的到高度变化，所以加上延时
          setTimeout(function () {
            if (_instance) _instance.execCommand('mceAutoResize');
          }, 500);
        },

        //将当前编辑器内容放入编辑历史中
        addUndoHistory: function addUndoHistory() {
          //将更新加入编辑历史
          if (_instance) _instance.undoManager.add();
        },

        //清除编辑历史
        clearEditHistory: function clearEditHistory() {
          if (_instance) _instance.undoManager.clear();
        },

        //监听编辑的删除键
        listenDelete: function listenDelete() {

          $(_instance.getBody()).on("keydown", function (event) {
            if (event.keyCode == '8') {

              var range = _instance.selection.getRng();

              //删到了一个节点的开头
              if (range.collapsed && range.startOffset == 0) {

                var $prev = $(range.startContainer).prev();

                if ($prev.length == 0) {
                  $prev = $(range.startContainer.parentNode).prev();
                }

                if ($prev.length > 0 && ($prev.attr("contenteditable") == "false" || $prev.get(0).tagName == "IMG")) {
                  $prev.remove();
                }
              }
            }
          });
        },

        //监听任务的完成与取消完成
        listenTodo: function listenTodo() {
          var _this = this;

          $(_instance.getBody()).on("mousedown", ".todo-item", function (event) {
            //根据字体大小确定可点击的范围
            //fontsize_level: {"12px": 1,"16px": 2,"18px": 3,"22px": 4,"28px": 5}
            var xMax = 18,
            yMax = 23;
            if ($(this).hasClass('font-size-1')) {
              xMax = 15, yMax = 17;
            } else if ($(this).hasClass('font-size-2')) {
              xMax = 18, yMax = 23;
            } else if ($(this).hasClass('font-size-3')) {
              xMax = 20, yMax = 26;
            } else if ($(this).hasClass('font-size-4')) {
              xMax = 24, yMax = 32;
            } else if ($(this).hasClass('font-size-5')) {
              xMax = 30, yMax = 41;
            }

            if (!$(event.target).hasClass('todo-item')) xMax = 1;

            if (event.offsetX <= xMax && event.offsetY <= yMax) {
              event.preventDefault();
            }
          });

          $(_instance.getBody()).on("click", ".todo-item", function (event) {
            //根据字体大小确定可点击的范围
            //fontsize_level: {"12px": 1,"16px": 2,"18px": 3,"22px": 4,"28px": 5}
            var xMax = 18,
            yMax = 23;
            if ($(this).hasClass('font-size-1')) {
              xMax = 15, yMax = 17;
            } else if ($(this).hasClass('font-size-2')) {
              xMax = 18, yMax = 23;
            } else if ($(this).hasClass('font-size-3')) {
              xMax = 20, yMax = 26;
            } else if ($(this).hasClass('font-size-4')) {
              xMax = 24, yMax = 32;
            } else if ($(this).hasClass('font-size-5')) {
              xMax = 30, yMax = 41;
            }

            if (!$(event.target).hasClass('todo-item')) xMax = 1;

            if (event.offsetX <= xMax && event.offsetY <= yMax) {
              if ($(this).hasClass("done")) {
                $(this).removeClass("done");
              } else {
                $(this).addClass("done");
              }

              //加入编辑历史
              _this.addUndoHistory();

              //延时保存
              _this.saveContent();
            }
          });
        },

        //根据窗口高度设置内容区域的高度
        setContentFieldMinHeight: function setContentFieldMinHeight() {
          var $ifr = $("#mce_instance_ifr");

          if ($ifr.length > 0) {
            // var paddingTop = 0;
            // var paddingBottom = 20;
            // var titleHeight = $("#ok_note_title").height() ;
            // var toolbarHeight = $(".mce-toolbar-grp").height();

            var height = $(window).height() - 221; //头部工具条  52   title 169
            $ifr.css("min-height", height + "px");
          }
        },

        //在toolbar后面加上标题区域
        insertTitleField: function insertTitleField() {
          var $toolbar = $(".mce-toolbar-grp");

          if ($toolbar.length > 0) {
            if ($("#ok_note_title").length == 0) {
              var $titleDom = $("<div>", {
                "id": "ok_note_title",
                "class": "title-field"
              }).append($("<input>", {"placeholder": _utils.LocaleUtil.translate("no_title")}));
              $toolbar.after($titleDom);
            }
          }
        },

        //在toolbar后面放上修改时间，创建时间等元信息
        insertMetaField: function insertMetaField() {
          var $toolbar = $(".mce-toolbar-grp");

          if ($toolbar.length > 0) {

            if ($("#ok_note_meta").length == 0) {
              var $metaDom = $("<div>", {
                "class": "top-info",
                "id": "ok_note_meta"
              }).append($("<span>", {
                "class": "create-time",
                "text": _utils.LocaleUtil.translate("create_time") + ": "
              }).append($("<span>", {
                "class": "create-time-date",
                "text": ""
              }))).append($("<span>", {
                "class": "update-time",
                "text": _utils.LocaleUtil.translate("modify_time") + ": "
              }).append($("<span>", {"class": "update-time-date", "text": ""})));

              $toolbar.append($metaDom);
            }
          }
        },

        //在toolbar后面放上修改时间，创建时间等元信息
        insertSaveTips: function insertSaveTips() {
          var $toolbar = $(".mce-last.mce-btn-group");

          if ($toolbar.length > 0) {

            if ($("#fp_note_save_tips").length == 0) {
              var $tipsDom = $("<div>", {
                "class": "top-info-save",
                "id": "fp_note_save_tips"
              }).append($("<span>", {
                "class": "saving",
                "text": _utils.LocaleUtil.translate("saving")
              })).append($("<span>", {"class": "saved", "text": _utils.LocaleUtil.translate("saved")}));

              $toolbar.append($tipsDom);
            }
          }
        },

        //在toolbar后面放上修改时间，创建时间等元信息
        insertShareContent: function insertShareContent() {
          var $toolbar = $("#mceu_15-body");

          var shareContent = "<div class=\"mce-note-share-panel\">" + "<div class=\"share-bg\">" + "<div class=\"note-toggle-secret\"><a class=\"check-box\" href=\"#\" ><span class=\"fp-ext-done\"></span></a><span>" + _utils.LocaleUtil.translate("secret") + "</span>" + "<span class=\"tips\">" + _utils.LocaleUtil.translate("secret_desc") + "</span>" + "</div>" + "<div class=\"share-content\">" + "<div class=\"qrcode\"></div>" + "<ul>" + "<li><a href=\"#dt_weibo\" data-app=\"weibo\"><span class=\"fp-ext-weibo\"></span></a></li>" + "<li><a href=\"#dt_qzone\" data-app=\"qzone\"><span class=\"fp-ext-zone\"></span></a></li>" + "<li><a href=\"#dt_twitter\" data-app=\"twitter\"><span class=\"fp-ext-twitter\"></span></a></li>" + "<li><a href=\"#dt_link\" data-app=\"link\"><span class=\"fp-ext-share-link\"></span></a></li>" + "</ul>" + "</div>" + "</div>" + "</div>";

          if ($toolbar.length > 0) {

            if ($("#note_share_content").length == 0) {
              var $tipsDom = $("<div>", {"id": "note_share_content"}).append($("<span>", {
                "class": "mce-share",
                "text": "分享"
              })).append($(shareContent));

              $toolbar.append($tipsDom);
            }
          }
        },

        //工具栏放入最小化按钮
        insertMinimizeBtn: function insertMinimizeBtn() {
          var _this = this;
          var $toolbar = $(".mce-toolbar-grp");

          if ($toolbar.length > 0) {
            var $btn = $("<a>", {"href": "#", "class": "minimize"}).append($("<span>", {
              "class": "icon-font fp-ext-shrink fp-tooltips",
              "style": "font-family:'icomoon'",
              "data-tooltip": "最小化编辑器(Esc)",
              "data-placement": "left"
            }));

            $btn.on("click", function (event) {
              event.preventDefault();

              _this.onMinimize(event);
            });

            $toolbar.append($btn);
          }
        },

        //window resize时编辑器UI的相应调整
        updateUIOnResize: function updateUIOnResize(on) {
          var _this = this;
          var resizeTimeout = null;

          if (on) {
            $(window).on("resize.editor", function () {
              if (resizeTimeout) clearTimeout(resizeTimeout);
              resizeTimeout = setTimeout(function () {
                //根据窗口高度设置内容区域的高度
                _this.setContentFieldMinHeight();

                //toolbar的宽度
                var $toolbar = $(".mce-toolbar-grp");
                $toolbar.width($(".spaceholder").width());
              }, 300);
            });
          } else {
            $(window).off("resize.editor");
          }
        },

        //更新贴纸的元信息,修改时间,创建时间
        updateNoteMeta: function updateNoteMeta(note) {
          var create_date = _utils.TimeUtil.getLocaleDate(note.created * 1000);
          var update_date = _utils.TimeUtil.getLocaleDate(note.modified * 1000);

          $(".top-info .create-time-date").text(create_date || "");

          if (create_date != update_date) {
            $(".top-info .update-time").show().find(".update-time-date").text(update_date || "");
          } else {
            $(".top-info .update-time").hide();
          }
        },

        //在滚动编辑器的时候固定toolbar的位置(fixed)
        updateToolbarFloatOnScroll: function updateToolbarFloatOnScroll() {
          var _this = this;
          var $toolbar = $(".mce-toolbar-grp");

          if ($toolbar.length == 0) return false;

          //样式没有加载完成，则返回延时执行
          var $btns = $(".mce-toolbar-grp .mce-btn");
          if ($btns.length > 0 && $btns.css('display') == 'block') {
            setTimeout(function () {
              _this.updateToolbarFloatOnScroll();
            }, 1000);
            return false;
          }

          var conPaddingTop = parseInt($("#editor_con").css('padding-top'), 10);
          conPaddingTop = isNaN(conPaddingTop) ? 0 : conPaddingTop;

          var toolbarTop = 0;
          var toolbarHeight = $toolbar.height() ? $toolbar.innerHeight() : 0;

          //fixed定位时为阻止下部元素上移做一个等高的填充
          var $placeholder = $("<div>", {id: "toolbar_placeholder"}).css({
            "height": toolbarHeight - conPaddingTop + "px",
            "display": "none"
          });
          if ($("#toolbar_placeholder").length == 0) $toolbar.before($placeholder);

          //监听编辑器容器的滚动，根据滚动来fix toolbar
          $("#widgets").on("scroll.editor", function () {

            if (_this.state.noteComponent) {
              if (this.scrollTop >= toolbarTop) {
                //将toolbar固定
                if (!$toolbar.hasClass("fixed")) {
                  $toolbar.width($toolbar.width()).addClass("fixed").css({
                    "position": "fixed",
                    "top": toolbarTop + "px"
                  });

                  if (!toolbarHeight) $placeholder.height($toolbar.outerHeight() - conPaddingTop);
                  $placeholder.show();
                }
              } else {
                //取消固定
                $toolbar.width($toolbar.width()).removeClass("fixed").css({"position": ""});
                $placeholder.hide();
              }
            }
          });
        },

        //最小化(关闭的时候)
        onMinimize: function onMinimize(event) {
          event.preventDefault();

          this.close();
        },

        onOpen: function onOpen() {
          var $editorCon = $("#editor_con");

          //去掉transform变换，否则fixed无效，在关闭时恢复
          setTimeout(function () {
            $editorCon.css("transform", "none");
          }, 1000);

          this.unmarkModified();
          this.unmarkDirty();

          //添加事件监听
          this.updateUIOnResize(true);

          this.setContentFieldMinHeight();

          if (_instance) _instance.setDisabled();
        },

        //拖拽之前在贴纸handle上光标的变化
        listenCursorChange: function listenCursorChange(remove) {
          if (remove) {
            $(document).off("keydown.dragmerge").off("keyup.dragmerge");

            if (_instance) {
              $(_instance.getDoc()).off("keydown.dragmerge").off("keyup.dragmerge");
            }

            $(document).off("mousemove.dragmerge");

            $(document).off("mouseenter.dragmerge").off("mouseleave.dragmerge");
          } else {
            var innerDoc = _instance ? _instance.getDoc() : [];

            $(document).add(innerDoc).off("keydown.dragmerge").off("keyup.dragmerge").on("keydown.dragmerge keyup.dragmerge", function (e) {
              if (e.type == 'keydown') {
                if (e.altKey || e.metaKey) {
                  $(".note .handle.hover").closest(".note").addClass("copy");
                }
              } else {
                $(".note .handle.hover").closest(".note").removeClass("copy");
              }
            });

            $(document).off("mousemove.dragmerge").on("mousemove.dragmerge", ".note .handle", function (e) {
              if (e.altKey || e.metaKey) {
                $(this).closest(".note").addClass("copy");
              } else {
                $(this).closest(".note").removeClass("copy");
              }
            });

            $(document).off("mouseenter.dragmerge").off("mouseleave.dragmerge").on("mouseleave.dragmerge mouseenter.dragmerge", ".note .handle", function (e) {

              if (e.type == 'mouseenter') {
                $(this).addClass("hover");
              } else {
                $(this).removeClass("hover");
              }
            });
          }
        },

        // 关闭编辑器
        closeEditorWindow: function closeEditorWindow() {
          $("#editor").hide().removeClass("anim");
          $("body").removeClass("open-editor");
        },

        /**
         * 移除当前正在被编辑的贴纸组件
         *
         * @return {[type]} [description]
         */
        removeCurrentNoteComponent: function removeCurrentNoteComponent() {
          // 去掉正在编辑贴纸的标记
          this.constructor.currentGnid = null;

          // 清除延时保存
          if (this.constructor._saveTimeout) {
            clearTimeout(this.constructor._saveTimeout);
            this.constructor._saveTimeout = null;
          }

          //即时保存标题和内容
          this.saveTitle(true);
          this.saveContent(true);

          if (this.state.noteComponent) {
            var note = this.getNote();
            note.maximized = false;
            delete note._content;

            if (note.modified > this.state.noteComponent.state.modified) {
              //通知顶层数据源更新
              _utils.WindowMessager.notifyTabs('data-changed', {type: 'update', notes: [note]});
            } else {
              this.state.noteComponent._setState({
                maximized: false
              });
            }
          }

          this._setState({
            noteComponent: null
          });
        },

        //编辑器关闭时做的处理
        close: function close() {

          //去除监听事件
          this.listenCursorChange(true);

          //关闭播放
          if (_utils.AudioPlayer.isPlaying()) {
            _utils.AudioPlayer.pause();
          }

          // 移除当前正在被编辑的组件
          this.removeCurrentNoteComponent();

          var $editorCon = $("#editor_con");
          //去掉transform变换，否则fixed无效，在关闭时恢复
          $editorCon.css("transform", "");

          //取消事件监听
          this.updateUIOnResize(false);

          $(ReactDOM.findDOMNode(this)).removeClass("editing-content");

          this.closeEditorWindow();

          this.props.handleClose(this);

          //清除编辑历史
          this.clearEditHistory();
        },

        //添加自定义控件
        addCustomWidgets: function addCustomWidgets(editor) {
          var _this = this;

          //增加上传图片的widget
          editor.addButton('uploadimg', {
            icon: 'image',
            tooltip: 'Upload Image'
          });

          editor.addButton('todolist', {
            icon: 'task',
            tooltip: 'Insert Todolist',
            stateSelector: 'li.todo-item',
            onclick: function onclick() {
              //将选区先记录下来,后面备用
              var range = editor.selection.getRng();
              var endOffset = range.endOffset;
              var startOffset = range.startOffset;
              var collapsed = range.collapsed;
              var startContainer = range.startContainer;
              var endContainer = range.endContainer;

              /**
               * 1.得到选区中所有的block(及textBlock)
               * 2.得到任务列表容器
               *    判断第一个block是否在list中
               *    如果在list中，则将list拆开，并创建一个新的任务列表容器ul放在中间(或去除任务临时容器div)
               *    如果不在list中，则创建一个新的任务列表容器ul(或去除任务临时容器div)
               * 3.所有选中的块级元素依次变为todo放入列表容器(或一次去除todo放入div)
               */

              var blockEls = _this.DOMUtil.getSelectedVisualBlocks();

              if (blockEls.length == 0) {
                _O.debug('insertlist', '插入todo list时选中的block长度为0');
                blockEls.push(range.startContainer);
              }

              var isAlreadyTodo = true;
              $(blockEls).each(function () {
                if (!$(this).hasClass("todo-item") && $(this).closest('li.todo-item').length == 0) {
                  isAlreadyTodo = false;
                  return false;
                }
              });

              //当前已经是任务列表，则去除所有选中的任务
              if (isAlreadyTodo) {

                var tempDiv = document.createElement('div');

                $(blockEls).each(function (i) {
                  if (i == 0) {
                    var insideList = $(this).closest('ul').get(0) || $(this).closest('ol').get(0);

                    if (insideList) {
                      _utils.DomUtil.splitList(insideList, this, tempDiv);
                    } else {
                      this.parentNode.insertBefore(tempDiv, this);
                    }
                  }

                  //找到任务li
                  var todoItem = $(this).hasClass("todo-item") ? this : $(this).closest('li.todo-item').get(0);

                  //将任务li中的所有子节点移出
                  if (todoItem) {
                    var nodes = $(todoItem).contents();

                    var tempDiv2 = document.createElement('div');

                    $(nodes).each(function () {
                      tempDiv2.appendChild(this);
                    });

                    tempDiv.appendChild(tempDiv2);

                    //如果包含块级元素则将子节点都拿出来
                    if (_utils.DomUtil.containsBlock(tempDiv2)) {
                      _utils.DomUtil.unwrapNode(tempDiv2);
                    }

                    //移除li
                    $(todoItem).remove();
                  }
                });

                _utils.DomUtil.unwrapNode(tempDiv);
              } else {
                //当前并非任务列表，则将选区中的block元素全部变为todo
                _this.DOMUtil.insertList('todo');

                _this.resizeLiFont();
              }

              //还原光标/选区
              _this.DOMUtil.restoreCursor(startContainer, startOffset, endContainer, endOffset);

              //将更改加入编辑历史
              _this.addUndoHistory();

              _this.saveContent();
            }
          });
        },

        listenCommand: function listenCommand(editor) {
          var _this = this;

          editor.on("ExecCommand", function (event) {
            var command = event.command;
            var value = event.value;

            switch (command) {
              case "FontSize":
                _this.resizeLiFont();

                break;
              case "mceToggleFormat":
                if (value == 'bold') {
                } else if (value == 'italic') {
                }
                break;
              case "mceBlockQuote":
                var changed = false;

                //加上blockquote的时候,将字体大小全部变为15px
                $('blockquote', editor.getDoc()).each(function () {
                  $('li', this).each(function () {
                    $(this).removeClass('font-size-1 font-size-2 font-size-3 font-size-4 font-size-5');
                    changed = true;
                  });

                  $("span", this).each(function () {
                    if ($(this).css("font-size") != '15px') {
                      $(this).css("font-size", "15px").removeAttr('data-mce-style');
                      changed = true;
                    }
                  });
                });

                if (changed) {
                  _this.addUndoHistory();
                }

                break;
              case "undo":
                break;
              case "redo":
                break;
              case "InsertUnorderedList":
                _this.resizeLiFont();
                break;
              case "InsertOrderedList":
                _this.resizeLiFont();
                break;
              case "InsertHorizontalRule":
                var range = _instance.selection.getRng();

                // 让光标跳出<div><hr></div>
                if (range.startContainer === range.endContainer && range.startContainer.tagName !== "BODY" && range.startContainer.childNodes.length === 1 && range.startContainer.childNodes[0].tagName === "HR") {
                  var div = _instance.getDoc().createElement("div");
                  var br = _instance.getDoc().createElement("br");
                  br.setAttribute('data-mce-bogus', 1);
                  div.appendChild(br);
                  $(range.startContainer).after(div);

                  var newRange = _instance.getDoc().createRange();
                  newRange.setStart(div, 0);
                  newRange.setEnd(div, 0);

                  var selection = _instance.getWin().getSelection();
                  selection.removeAllRanges();
                  selection.addRange(newRange);
                }
                break;
              case "mceInsertContent":
                break;
              default:
                break;
            }

            //改变内容的command执行后全部保存内容
            if (command != "mceAutoResize") {
              _this.saveContent();
            }
          });

          editor.on("BeforeExecCommand", function (event) {
            var command = event.command;
            var value = event.value;

            //在执行toolbar按钮操作之前进行预处理
            switch (command) {
              case "FontSize":
                //改变size之前判断
                //如果是在blockquote里面改变size,则返回false
                var range = _instance.selection.getRng();
                var $blockquote1 = $(range.startContainer).closest('blockquote');
                var $blockquote2 = $(range.endContainer).closest('blockquote');

                if ($blockquote1.length > 0 && $blockquote2.length > 0 && $blockquote1.get(0) == $blockquote2.get(0)) {
                  alert("引用中不允许自定义字体大小");
                  return false;
                }
                break;
              case "InsertUnorderedList":

                //解决ul和todo list冲突
                var shouldPreventDefault = _this.fixConflictWithTodoList('ul');

                if (shouldPreventDefault) {
                  _this.resizeLiFont();

                  _this.saveContent();
                  return false;
                }

                break;
              case "InsertOrderedList":

                //解决ul和todo list冲突
                var shouldPreventDefault = _this.fixConflictWithTodoList('ol');

                if (shouldPreventDefault) {
                  _this.resizeLiFont();

                  _this.saveContent();
                  return false;
                }

                break;
              case "InsertHorizontalRule":
                //插入分割线
                //如果是在有padding的容器中插入，则插入在容器外面
                var range = editor.selection.getRng();
                if (range && range.startContainer && $(range.startContainer).closest('li').length > 0) {

                  $(range.startContainer).closest('li').after('<hr>');
                  _this.addUndoHistory();
                  return false;
                }
                break;

              default:
                break;
            }
          });

          //对编辑历史的记录管理
          editor.on('BeforeAddUndo', function (event) {

            if (event.lastLevel && event.level) {

              //如果加入进度条则不让其进入历史
              if (typeof event.lastLevel.content == 'string' && typeof event.level.content == 'string') {

                if (event.lastLevel.content.indexOf('uploadbar') < 0 && event.level.content.indexOf('uploadbar') >= 0) {
                  return false;
                }
              }
            }
          });
        },

        //初始化编辑器
        initializeMCE: function initializeMCE(callback) {
          var _this = this;

          if (window.tinymce && !_instance) {
            //加上baseURL会使用本地路径文件
            // tinyMCE.baseURL = 'tinymce';

            window.tinymce.init({
              selector: "textarea#mce_instance",
              menubar: false,
              statusbar: false,
              elementpath: false,
              object_resizing: false,
              content_css: "./editor.css",
              plugins: ["link autoresize hr"],
              toolbar: "fontsizeselect | blockquote bold italic | todolist bullist numlist | unlink link uploadimg hr | undo redo ",
              fontsize_formats: "12px 16px 18px 22px 28px",
              resize: false,
              language: "zh_CN",
              force_br_newlines: false,
              force_p_newlines: true,
              forced_root_block: 'div',
              body_padding: 80,
              element_format: 'html',
              extended_valid_elements: 'img[_src|src|alt|title|data-width|data-height|data-video],a[href|class|title|data-translated|data-media|data-type|data-duration]',
              init_instance_callback: function init_instance_callback(editor) {

                _instance = editor;
                _instance.setDisabled = _this.disableEditor;
                _instance.setEnabled = _this.enableEditor;

                if ($.isFunction(callback)) callback.call(null, editor);
              },

              setup: function setup(editor) {

                //添加自定义控件
                _this.addCustomWidgets(editor);

                //监听编辑器command
                _this.listenCommand(editor);
              }
            });
          }
        },

        //在编辑器中插入ul或者ol时，如果是在包含任务列表的
        fixConflictWithTodoList: function fixConflictWithTodoList(listname) {
          var selectedBlocks = _instance.selection.getSelectedBlocks();

          var containsTodo = false;

          $(selectedBlocks).each(function () {
            if ($(this).closest('.todo-item').length > 0) {
              $(this).closest('.todo-item').removeAttr("class");
              containsTodo = true;
            }

            if ($(this).hasClass("todo-item")) {
              containsTodo = true;
              $(this).removeAttr("class");
            }

            if ($(this).find(".todo-item").length > 0) {
              containsTodo = true;
              $(this).find(".todo-item").removeAttr('todo-item');
            }
          });

          if (containsTodo && (listname == 'ul' || listname == 'ol')) {
            //将选区先记录下来,后面备用
            var range = _instance.selection.getRng();
            var endOffset = range.endOffset;
            var startOffset = range.startOffset;
            var collapsed = range.collapsed;
            var startContainer = range.startContainer;
            var endContainer = range.endContainer;

            this.DOMUtil.insertList(listname);

            this.DOMUtil.restoreCursor(startContainer, startOffset, endContainer, endOffset);

            this.addUndoHistory();

            //不让mce编辑器插入ul
            var shouldPreventDefault = true;
            return shouldPreventDefault;
          }
        },

        toggleTodo: function toggleTodo(ul) {
          //如果点击的是无序列表ul 先获得当前选区的块级元素
          var bool = false,
          isUl = false,
          isOl = false,
          result = {};
          var range = _instance.selection.getRng();
          var collapsed = range.collapsed;

          var endContainer = range.endContainer;
          var startContainer = range.startContainer;

          //如果选区是当前元素
          if (collapsed || endContainer == startContainer) {
            var currentNode = range.startContainer;
            //如果当前元素是todo列表   那么就清空默认类还原ul>li 默认状态
            if (currentNode.tagName == "LI" && $(currentNode).hasClass("todo-item")) {
              $(currentNode).removeClass("todo-item");
              bool = true;

              // 判断li的父级元素是ul  ol
              if ($(currentNode).closest("ul").length > 0) {
                isUl = true;
              } else if ($(currentNode).closest("ol").length > 0) {
                isOl = true;
              }
            } else if ($(currentNode).closest("li.todo-item").length > 0) {
              var liItem = $(currentNode).closest("li.todo-item");
              liItem.removeClass("todo-item");
              bool = true;

              // 判断li的父级元素是ul ol
              if (liItem.closest("ul").length > 0) {
                isUl = true;
              } else if (liItem.closest("ol").length > 0) {
                isOl = true;
              }
            }
          } else {
            //如果选区在多个元素

          }

          return result = {"bool": bool, "isUl": isUl, "isOl": isOl};
        },

        // 替换dom
        replaceDom: function replaceDom(currentNode) {
          //创建用于包裹的div
          var div = document.createElement("div");
          $(div).attr("data-mark", "mark");
          // 替换li元素的代码块 已清除默认样式
          var childNodes = $(currentNode).contents();
          $(div).append(childNodes);
          $(currentNode).replaceWith(div);
        },

        //如果li中所有span字体大小都是一样则对li整个字体大小样式调整
        resizeLiFont: function resizeLiFont() {
          $('li', _instance.getDoc()).each(function (i, li) {
            //li字体大小调整
            var fontsizes = [];
            // $("span",li).add(li.childNodes).each(function(){
            // 	//非span标签,
            // 	if(this.tagName != "span"){

            // 		//长度等于1的话，就直接使用span的字体大小，大于1的话则需要计算
            // 		if(this.childNodes && this.childNodes.length > 1){
            // 			fontsizes.push($(this).css("font-size"));
            // 		}
            // 	}else{
            // 		fontsizes.push($(this).css("font-size"));
            // 	}
            // });

            var $span = $("span", li);

            if ($span.length == 1 && $.trim($span.text()) == $.trim($(li).text())) {
              fontsizes.push($span.css("font-size"));
            }

            fontsizes = $.unique(fontsizes);

            //都是统一尺寸
            if (fontsizes.length == 1) {
              var level = _OKConfig.fontsize_level[fontsizes[0]];

              if (level) {
                $(li).removeClass("font-size-1 font-size-2 font-size-3 font-size-4 font-size-5").addClass('font-size-' + level);
              }
            }
          });
        },

        //在任务列表中  如果文字大小发生变化对应的li字体大小也做相应调整
        //以实现列表项li的修饰符和字体大小相同
        resizeListitemSymbol: function resizeListitemSymbol(fontLevel) {
          var _this = this;
          var range = _instance.selection.getRng();

          var $listitems = null;

          //先判断选区中是否包含列表项
          if (range && range.commonAncestorContainer) {
            $listitems = $(range.commonAncestorContainer).is('li') ? $(range.commonAncestorContainer) : null;

            if (!$listitems) {
              $listitems = $(range.commonAncestorContainer).find('li').length > 0 ? $(range.commonAncestorContainer).find('li') : null;
            }

            if (!$listitems) {
              $listitems = $(range.commonAncestorContainer).closest('li').length > 0 ? $(range.commonAncestorContainer).closest('li') : null;
            }
          }

          if ($listitems && $listitems.length > 0) {
            var selection = _instance.selection.getSel();

            //判断每个listitem的所有子节点是否都包含在选区中
            //如果都在选区中则将list item字体样式通过class调整
            $listitems.each(function (i, item) {
              var containsAll = _this.DOMUtil.selectionContainsFullNode(selection, this);

              if (containsAll) {
                $(this).removeClass("font-size-1 font-size-2 font-size-3 font-size-4 font-size-5").addClass("font-size-" + fontLevel);
              }
            });
          }
        },

        // 返回dom的第一个文本节点
        getFirstTextNode: function getFirstTextNode(ele) {
          if (ele && ele.nodeType == 1) {
            ele = ele.firstChild;
            return this.getFirstTextNode(ele);
          } else if (ele && ele.nodeType == 3) {
            return ele;
          }
        },

        //返回文本的最后一个文本节点
        getlastTextNode: function getlastTextNode(ele) {
          if (ele && ele.nodeType == 1) {
            ele = ele.lastChild;
            return this.getlastTextNode(ele);
          } else if (ele && ele.nodeType == 3) {
            return ele;
          }
        },

        enterReadMode: function enterReadMode() {
          _instance.setDisabled();

          //回到可读模式
          var content = _utils.ContentUtil.processContent(this.getContentHtml());
          this.setContentHtml(content);
        },

        enterEditMode: function enterEditMode() {
          if (_instance.getBody().contentEditable == "false") {
            _utils.ContentUtil.restoreContent(_instance.getBody());

            //进入编辑模式
            _instance.setEnabled();
          }

          $(ReactDOM.findDOMNode(this)).addClass("editing-content");
        },

        enableEditor: function enableEditor() {
          if (_instance) {
            _instance.getBody().setAttribute("contenteditable", "true");
          }
        },

        disableEditor: function disableEditor() {
          if (_instance) {
            _instance.getBody().setAttribute("contenteditable", "false");
          }
        },

        watchContentField: function watchContentField() {
          var _this = this;
          var editorBody = _instance.getBody();

          //监听内容区域对a标签的点击
          $(editorBody).on("click", "a", function (event) {
            event.preventDefault();

            //如果点击的是媒体文件
            var media = $(this).data("media");
            if (media) {
              var type = $(this).data("type");

              var $mediaDiv = $(this).closest(".media");

              //音频文件
              if (/audio/.test(type)) {

                //如果正在播放则将其暂停
                if (_utils.AudioPlayer.isPlaying(media)) {
                  _utils.AudioPlayer.pause();

                  $mediaDiv.removeClass("playing");
                } else {
                  $mediaDiv.addClass("loading");
                  _utils.AudioPlayer.play(media, function (status) {
                    switch (status) {
                      case "playing":
                      case "timeupdate":
                      case "loadedmetadata":
                        $mediaDiv.addClass("playing").removeClass("loading");
                        break;
                      case "ended":
                      case "pause":
                        $mediaDiv.removeClass("playing");
                        break;
                      case "error":
                        $mediaDiv.removeClass("loading").addClass("error").removeClass("playing");
                        break;
                    }
                    ;
                  });
                }
              }
            } else if (editorBody.contentEditable == "false") {
              var href = $(this).attr("href");

              //如果是点击的放大图片
              if ($(event.target).hasClass("fp-ext-zoom-in")) {
                return false;
              } else {
                //点击的不是锚点，而且点击的target不是系统按钮
                if (href != "#") {
                  window.open(this.href);
                } else {
                }
              }
            }
          });

          $(editorBody).on("mousedown", function (event) {
            var target = event.target;

            //如果点击到的是图片或者是链接则作其他处理，否则进入编辑状态
            var isLinkOrImg = target.tagName && (target.tagName == "A" || target.tagName == "IMG");
            var isDownload = $(target).hasClass("ok-extension-download");

            if (!isLinkOrImg && !isDownload && editorBody.contentEditable == "false") {
              _this.enterEditMode(event);
            }

            //如果框架外分享面板被打开，则关闭
            var $noteShareCont = $("#note_share_content");

            if ($noteShareCont.hasClass("show-mec-share")) {
              $noteShareCont.removeClass("show-mec-share");
            }
          }).on("click", function (event) {
            //处理非编辑状态下的点击
            if (editorBody.contentEditable == "false") {
              var target = event.target;

              if ($(target).hasClass("dl") || $(target).parent().hasClass("dl")) {
                event.preventDefault();

                var $img = $(target).closest(".img").find("img");

                if ($img.length > 0) {
                  _utils.ImageUtil.downloadImages([$img.attr("_src") || $img.get(0).src]);
                }

                return;
              }

              switch (target.tagName) {
                case "A":
                  //点击到了链接,
                  event.preventDefault();
                  var href = target.getAttribute("href");

                  if (href != "#") {
                    window.open(target.href);
                  }
                  break;
                case "IMG":

                  break;
                default:
                  break;
              }
            } else if (editorBody.contentEditable) {
              // 在选择内容的时候也会触发click事件，所以通过选区判断，只有在选区折叠的情况下才触发添加空行事件
              var range = _instance.selection.getRng();
              var collapsed = range.collapsed;
              var eventTop = event.pageY;

              // 如果点击的是最后/最前行后面如果当前没有空行  就插入一个空行
              var last = editorBody.lastChild;
              var first = editorBody.firstChild;

              if (last) {
                var lastChildHeight = $(last).height();
                var lastTop = last.offsetTop;

                // 如果点击的位置低于最后一个元素
                if (lastTop + lastChildHeight < eventTop) {
                  var div = null;
                  if (_this.isEmptyLine(last)) {
                    div = last;
                  } else {
                    // 创建空的dom节点
                    var div = document.createElement("div");
                    var br = document.createElement('br');
                    br.setAttribute('data-mce-bogus', 1);
                    div.appendChild(br);
                    editorBody.appendChild(div);
                  }

                  var _range = _instance.getDoc().createRange();
                  _range.setStart(div, 0);
                  _range.setEnd(div, 0);

                  var selection = _instance.getWin().getSelection();
                  selection.removeAllRanges();
                  selection.addRange(_range);
                }
              }
            }
          }).on("keydown", function (event) {

            //Ctrl/Cmd + S
            if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
              //阻止默认事件
              event.preventDefault();

              _this.saveContent();
            } else if (event.keyCode == 8 || event.keyCode == 13) {
              //删除有时不会触发input事件
              _this.markAsModified();
              _this.saveContent();
            }
          }).on("input", function () {

            _this.markAsModified();

            _this.saveContent();
          }).on("keyup", function (event) {
            //由回车产生的空img容器去除
            $(_instance.getBody()).find(".img").each(function () {
              if ($(this).find("img").length == 0) {
                $(this).removeAttr("class").find('a.dl').remove();
              }
            });
          });

          //编辑器自带监听事件
          _instance.on("focus", function () {
            $(ReactDOM.findDOMNode(_this)).addClass("editing-content");
          }).on("blur", function (event) {

            if ($(ReactDOM.findDOMNode(_this)).hasClass("editing-content")) {
              //保存笔记
              _this.saveContent();
              _this.enterReadMode();

              $(ReactDOM.findDOMNode(_this)).removeClass("editing-content");
            }
          }).on('ObjectSelected', function () {
            //选中图片时，如果不在编辑状态则进入编辑状态
            if (editorBody.contentEditable == "false") {
              _this.enterEditMode(event);
            }
          });
        },

        isEmptyLine: function isEmptyLine(node) {
          if (!node) return false;

          return $(node.firstChild).is("br") || $(node).html() == "&nbsp;";
        },

        //延时保存内容
        deferSave: function deferSave(delay) {
          var _this = this;
          this.markAsModified();

          //内容发生改变,定时保存
          if (_this.constructor._saveTimeout) clearTimeout(_this.constructor._saveTimeout);
          _this.constructor._saveTimeout = setTimeout(function () {
            _this.saveContent();
          }, delay || _OKConfig.save_delay);
        },

        //监听标题改变
        watchTitleField: function watchTitleField() {
          var _this = this;

          $("#editor_con .title-field input").on("focus", function () {
            $(this).addClass("editing");
          }).on("blur", function (event) {

            //去除编辑标识
            $(this).removeClass("editing");

            //即时保存标题
            _this.saveTitle(true);
          }).on("input", function (event) {

            _this.saveTitle(false);
          }).on("keydown", function (event) {
            //Ctrl/Cmd + S
            if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
              //阻止默认事件
              event.preventDefault();
              _this.saveTitle(true);
            }
          });
        },

        //设置编辑器中的html内容
        setContentHtml: function setContentHtml(content) {
          _instance.getBody().innerHTML = content;
        },

        //得到编辑器中的html内容
        getContentHtml: function getContentHtml() {
          var content = _instance.getContent();

          //去除代码中的空格
          content = _utils.ContentUtil.removeSpaceBetweenTags(content);

          //正则匹配删除空闭合标签
          content = _utils.ContentUtil.removeEmptyTag(content);

          return content;
        },

        //得到贴纸模型
        getNote: function getNote() {
          var note = this.state.noteComponent && this.state.noteComponent.state;

          //noteData为贴纸数据的备份,需要保持更新,
          //避免编辑器中数据的更新依赖于组件的渲染(render)
          if (this.noteData && this.noteData.gnid == note.gnid) {
            // && this.noteData.modified >= note.modified){
            return this.noteData;
          } else {
            this.noteData = $.extend({}, note);
          }

          return this.noteData;
        },

        //得到标题input中的value
        getTitleValue: function getTitleValue() {
          return $("#editor_con .title-field input").val() || "";
        },

        /**
         * 监听标题和内容编辑，延时保存
         *
         * @param object props [ 修改的贴纸属性和值 {title: '',content:''},修改了什么传什么 ]
         */
        handleInput: function handleInput(props) {
          var _this = this;

          if (this.constructor._saveTimeout) {

            var _lastProps = this.constructor._delayedProps[this.constructor._saveTimeout];
            //上次需要保存的属性的继承下来
            if (_lastProps) {
              props = $.extend({}, _lastProps, props);
            }

            clearTimeout(this.constructor._saveTimeout);
          } else {
            if (!this.constructor._delayedProps) {
              this.constructor._delayedProps = {};
            }
          }

          this.constructor._saveTimeout = setTimeout(function () {
            _this.save(props);

            //保存之后清除属性
            delete _this.constructor._delayedProps[_this.constructor._saveTimeout];
          }, _OKConfig.save_delay);

          //记录此次需要保存的属性,因为这次延时保存可能会被下次取消
          this.constructor._delayedProps[this.constructor._saveTimeout] = props;
        },

        /**
         * 保存标题
         *
         * @param  boolean nondelay [是否是即时保存]
         */
        saveTitle: function saveTitle(nondelay) {
          $("#editor_con .title-field input").removeClass("editing modified");

          //保存标题
          var title = this.getTitleValue();
          var note = this.getNote();

          //标题改变则进行保存
          if (note && title != note.title) {
            var noteObj = {
              title: title || _utils.LocaleUtil.translate("no_title")
            };

            if (nondelay) {
              // 清除延时保存
              if (this.constructor._saveTimeout) {
                clearTimeout(this.constructor._saveTimeout);
              }
              this.save(noteObj);
            } else {
              this.handleInput(noteObj);
            }
          }
        },

        isModified: function isModified() {
          return $("#editor").hasClass("content-modified");
        },

        unmarkModified: function unmarkModified() {
          $("#editor").removeClass("content-modified");
        },

        //标记为已经被修改
        markAsModified: function markAsModified() {
          $("#editor").addClass("content-modified");
          this.markDirty();
        },

        markDirty: function markDirty() {
          $("#editor").addClass("dirty");
        },

        unmarkDirty: function unmarkDirty() {
          $("#editor").removeClass("dirty");
        },

        /**
         * 保存内容
         *
         * @param  boolean nondelay [是否是即时保存]
         */
        saveContent: function saveContent(nondelay) {
          var content = this.getContentHtml();
          var note = this.getNote();

          if (note && content != note.content) {
            //如果并没有标识正在保存，则加上标识
            if (!this.isModified()) {
              this.markAsModified();
            }

            var noteObj = {
              content: content
            };

            if (nondelay) {
              // 清除延时保存
              if (this.constructor._saveTimeout) {
                clearTimeout(this.constructor._saveTimeout);
              }
              return this.save(noteObj);
            } else {
              return this.handleInput(noteObj);
            }
          }
        },

        save: function save(note) {
          var oriNote = this.getNote();

          note.gnid = oriNote.gnid;
          note.sortby = oriNote.sortby;

          //如果修改了内容
          if (note.content) {
            note.content = _utils.ContentUtil.filterContentFromOutside(note.content);
          }

          //newNote为更新之后的贴纸
          var newNote = _models.NoteModel.update(note);

          //及时更新数据备份
          this.noteData = $.extend(this.noteData, newNote);

          //本地更新成功，成功进入队列
          if (newNote) {

            if (typeof note.content == 'string') this.unmarkModified();

            return newNote;
          }
        },

        componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
          //组件更新之后进行内容的绑定
          var prevNote = prevState.noteComponent ? prevState.noteComponent.state : null;
          var currentNote = this.state.noteComponent ? this.state.noteComponent.state : null;

          if (!currentNote) return;

          if (!prevNote || prevNote.gnid != currentNote.gnid || prevNote.title != currentNote.title || prevNote.content != currentNote.content) {

            this.updateData(currentNote);
          }
        },

        /**
         * 更新编辑器的贴纸数据
         * @param object  data  [贴纸数据]
         */
        updateData: function updateData(data) {

          //放入标题
          $("#editor_con .title-field input").val(data.title);

          //放入内容
          if (_instance) {
            //以查看模式进入编辑器
            var content = _utils.ContentUtil.processContent(data.content);
            this.setContentHtml(content);

            //根据放入内容设置编辑器最小高度
            this.setContentFieldMinHeight();
          }

          //更新元数据
          this.updateNoteMeta(data);

          if (data.publyc == 0) {
            $("#editor_con .note-toggle-secret").addClass("checked");
          } else {
            $("#editor_con .note-toggle-secret").removeClass("checked");
          }
        },

        DOMUtil: {
          hasChildNodeInSelection: function hasChildNodeInSelection(node, selection) {
            if (!node || node.childNodes.length == 0) return false;
            var _this = this;
            var hasNode = false;

            if (selection.containsNode) {
              $(node.childNodes).each(function () {
                if (selection.containsNode(this)) {
                  hasNode = true;
                  return false;
                } else {
                  if (_this.hasChildNodeInSelection(this, selection)) {
                    hasNode = true;
                    return false;
                  }
                }
              });
            }

            return hasNode;
          },

          //得到选区中的block和textBlock
          getSelectedVisualBlocks: function getSelectedVisualBlocks(nodes) {
            if (!_instance) return [];
            if (!nodes) nodes = _instance.selection.getSelectedBlocks();
            var blocks = [];

            var node = null;
            for (var i = 0, len = nodes.length; i < len; i++) {
              node = nodes[i];
              if (!node) continue;

              //如果其中包含块级节点
              if (_utils.DomUtil.containsBlock(node)) {
                //得到其中的textBlock
                var textBlocks = _utils.DomUtil.textBlockInNode(node);

                if (textBlocks.length > 0) {
                  blocks = blocks.concat(textBlocks);
                }
                continue;
              } else if (_utils.DomUtil.textBlockInNode(node).length > 1) {
                //节点中包含多个换行文本,则分开处理
                var childBlocks = this.getSelectedVisualBlocks(node.childNodes);

                if (childBlocks.length > 0) {
                  blocks = blocks.concat(childBlocks);
                }
              } else {

                //处理块级元素或者换行文本
                if (_utils.DomUtil.isBlock(node)) {
                  if (blocks.indexOf(node) < 0) blocks.push(node);
                } else if (_utils.DomUtil.isTextBlock(node)) {
                  if (blocks.indexOf(node) < 0 && !$(node).is('br')) {
                    blocks.push(node);
                  }
                } else {
                  if ($(node).is('br')) {
                    continue;
                  }

                  //将所有内联放一块
                  var div = document.createElement('div');

                  if (node) {
                    node.parentNode.insertBefore(div, node);
                    var newNode = node.nextSibling;

                    div.appendChild(node);

                    if (newNode) {
                      while (newNode && !_utils.DomUtil.isTextBlock(newNode)) {
                        div.appendChild(newNode);
                        newNode = newNode.nextSibling;

                        i++;
                      }

                      if (newNode) {
                        div.appendChild(newNode);
                        i++;
                      }
                    }

                    if (blocks.indexOf(node) < 0) blocks.push(div);
                  }
                }
              }
            }
            ;

            //不存在选区中的block移除
            var selection = _instance.selection.getSel(),
            _this = this;
            if (selection.containsNode) {
              $(blocks).each(function (i, blockNode) {
                // if(!selection.containsNode(blockNode) && !_this.hasChildNodeInSelection(blockNode,selection)){
                //selection不包含blockNode的任何东西，则去除
                if (!selection.containsNode(blockNode, true)) {
                  blocks.splice(i, 1);
                }
              });
            }

            return blocks;
          },

          insertList: function insertList(listtype) {
            var _this = this;
            listtype = listtype || 'ul';
            var tag = listtype == 'todo' ? 'ul' : listtype;
            var blockEls = this.getSelectedVisualBlocks() || [];

            //选区中没得到块级选区
            if (blockEls.length == 0) {
              var range = _instance.selection.getRng();
              _O.debug('insertlist', '插入list时选中的block长度为0');
              blockEls.push(range.startContainer);
            }

            //在拆分某个已经存在list时保存被拆分的所有list,最后将此lists种的空list删除
            var allLists = null,
            lastLi = null;

            var list = document.createElement(tag);
            $(blockEls).each(function (i, blockEl) {
              if (blockEl) {
                if (i == 0) {
                  var insideList = $(this).closest('ul').get(0) || $(this).closest('ol').get(0);

                  if (insideList) {
                    allLists = _utils.DomUtil.splitList(insideList, blockEl, list);
                  } else {
                    this.parentNode.insertBefore(list, this);
                  }
                }

                //将blockEl变成任务li.todo-item
                if (this.tagName && this.tagName == 'LI') {
                  lastLi = this;
                } else if ($(this).closest('li').length > 0) {
                  lastLi = $(this).closest('li').get(0);
                } else {
                  //如果是textBlock记得将br去除
                  if (_utils.DomUtil.isTextBlock(this)) {
                    if ($(this).next().is("br")) {
                      $(this).next().remove();
                    }
                  }
                  lastLi = document.createElement('li');
                  lastLi.appendChild(this);
                }

                if (listtype == 'todo') {
                  $(lastLi).addClass('todo-item');
                }

                list.appendChild(lastLi);
              }
            });

            //拆分list后，子list中的空list全部删除
            if (allLists) {
              $(allLists).each(function () {
                if (this && this.childNodes.length == 0) {
                  $(this).remove();
                }
              });
            }

            return list;
          },

          //判断选区是否包含单个节点中的全部节点
          selectionContainsFullNode: function selectionContainsFullNode(selection, node) {
            var containsAll = true;

            if (selection.rangeCount > 0) {
              var selectionHtml = '';
              $(selection.getRangeAt(0).cloneContents().childNodes).each(function () {
                selectionHtml += $("<div>").append(this).html();
              });

              if (selectionHtml.indexOf($(node).html()) >= 0) {
                return true;
              } else {
                if (node.childNodes.length == 1) {
                  return selectionHtml.indexOf($(node.childNodes[0]).html()) >= 0;
                } else {
                  return false;
                }
              }
            }

            if (node.childNodes.length == 1) {

              if (!selection.containsNode(node.childNodes[0])) {
                //判断子层
                containsAll = this.selectionContainsFullNode(selection, node.childNodes[0]);
              }
            } else {
              $(node.childNodes).each(function () {

                if (!selection.containsNode(this)) {
                  containsAll = false;
                  return false;
                }
              });
            }

            return containsAll;
          },

          placeCaretAfterNode: function placeCaretAfterNode(node) {
            if (node) {
              var range = _instance.selection.getRng();
              var sel = _instance.selection.getSel();
              var newRange = _instance.getDoc().createRange();
              var caretCon = null;

              if (node.nextSibling) {
                caretCon = node.nextSibling;
              } else {
                var span = _instance.getDoc().createElement('span');
                node.parentNode.appendChild(span);
                caretCon = span;
              }

              if (caretCon) {
                this.restoreCursor(caretCon, 0, caretCon, 0);
              }
            }
          },

          //还原光标
          restoreCursor: function restoreCursor(startContainer, startOffset, endContainer, endOffset) {
            if (window.getSelection) {

              var _range = _instance.getDoc().createRange();
              _range.setStart(startContainer, startOffset);
              _range.setEnd(endContainer, endOffset);

              var selection = _instance.getWin().getSelection();
              selection.removeAllRanges();

              //避免range not in document错误
              if (_instance.getDoc().contains(_range.startContainer) && _instance.getDoc().contains(_range.endContainer)) {

                selection.addRange(_range);
              }
            }
          }

        }

      });

      //DOMUtil 结束
      exports['default'] = MCEEditor;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(162), __webpack_require__(1), __webpack_require__(163)))

    /***/
  },
  /* 258 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var tplMixins = {

        renderFn: function renderFn() {
          var classNames = "widget";

          var hidden = '1';
          if (this.state.isCurrent) hidden = "0";

          var anim = "";
          if (this.state.loading) {
            anim = React.createElement(_components.LoadingAnim, null);
          }

          return React.createElement(
          'div',
          {id: 'editor', className: classNames, 'data-hidden': hidden},
          React.createElement(
          'div',
          {id: 'editor_con'},
          React.createElement(
          'div',
          {className: 'spaceholder'},
          React.createElement('textarea', {id: 'mce_instance'})
          )
          ),
          anim
          );
        }
      };

      exports['default'] = tplMixins;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 259 */
  /***/ function (module, exports) {

    module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAC2CAYAAAB08HcEAAAABGdBTUEAALGPC/xhBQAAH4BJREFUeAHtXQfUFEW2LmCUYAAVUBEliAnFCGJYBQXzkgyYWCNHnm+f7ooPDKCgIAYwLB53H0aMiKiInjWioGJOiCRBERHJAqKIoMD7vt6/f+ef/1an6e7p7qk6Z07P3Fvh1q071bdu3bpVY/DgwVvXrVu3gcpA6t+///c1atTYLHVl5MiR265du3Z7Cbd+/fo14MNKCecGGzJkSIuNGzfWcsuXBHzt2rV/v+aaa+braElTX3R9IHyLLbb4KVezZs3z1q1bd49TxrTgxo0bVxu0bpDoXb169UWbNm26U8IBNgKffhqcIxh1foIM2zlmSggSf+BFIGUXHTnoy0fA7aDDpwX++++/P1ozLcQaOg0H/HDACLYfbpm8qeGAEezUDJUh1A8HjGD74ZbJmxoOGMFOzVAZQv1wIOeSeQ3MZ9+55IkVvXnz5n2DNIhy36Lcq1JZ9HHRjTfe2A44GIlq1uATFgLrie8/X3/99Z9J5coJBh79AB5uTEqfQc82oKeujh5HwUbh1wYNGnS6rnDccHSkxg033LApSLvox3iU46daQp0XQ5A/JALPQvy7ABxZCCy337Vq1Tpo4MCBiZnkMGZ3YQz+phsHo4qAM/gDi5s6OqYZePI5kDbBpnoQesKbwAh26FwtbYVpE+zScsu0nhoOpEqwsWUeyYxtVJHUyKtnQlMl2J575TOjUUV8MiwF2R2tIimgPxQSYeJbCw+9hVJlmM2XS/AwYKj7tzDq8VFH3O35IC3crIEF+6abbtoRXlSh23dzudyJAwYMmBZuN51ru+66655GDn5iTfXq1Wvar1+/ZbE2GkFjFbIwN+yqIQsdIQufBqk3sGCj0Vq//fbbzkEadSoDtWBLJ7zBJZIDNTFu24RNWTF+7qnSsRs1ahTJ4jHsATH1lZ4DqRLs0rPLUJAWDhjBTstIGTp9ccAIti92mcxp4YAR7LSMlKHTFwcCW0V8tZKAzDiB/Wd47v1dQ0pDrOpbSTjYmlfAM7C5hHODoey/ttxySx4UFhNOzc/A6XhxDGB1Og7edB+LBQ3QlQMiU11LlSjDnDlzAltFILhN8enkl3SU2cJvmbz8qxHuYF7e7ypf4XpZX1c//oSpCOlQpUMJ+mFUkQQNhiElPA4YwQ6Pl6amBHEgVarIdtttt2nx4sUJYl/ySBk+fHhj6O5XSpTBJ2YpjrndIeHcYIiulCqf9VQJ9hlnnLEZeqnbGJQ1Hm4ODcGA/hIToM/PADyQYEv1JRmWNlUkVbNGkgc+67SlasaG+WwzzGOBxgSv4X9jxjpRKox628EKMUTCoVwtvCW0lg3UWV8qRxhwl4LeMx3wxVhcdNUaODiQKsEuZsQqTliLp6wReoGRVkXBrjC7tQjYNqPYZiKSLVScVL0t06aKmBPlAf9h5VYsdYKN13uqZo5yE6ik9Dd1qgj1bCPbevEBb1aBR6M0OcrGVpo6wTZSrRHZCjCOUlF4/8s5V/axqVNFOGNnf1hMD4vlQOAZu0GDBqtx9UOfYgkoLF+nTp35hbD831HM2DDpbYb145f8drx+xx+tLmgSnbOAWw9c0ECO1YIIeqUpinxOO4+4w2g1zif+Jex24eGoNbO6tRVYsPv06UNBuNetgQjwoQ94hXvoVkFohZ36e5RrIpXFH+ZEnICfLOGyBOvbt+869OexJPXJqCJJGg1DS2gcCDxjh0aBQ0WYDavp03i1a0vMnDlzfdCdSW2lRSDwep6UJHrcuuLEW9ws931hX/BbVMHc2okDn7oZOw6mmDbSzwEj2OkfQ9MDgQNGsAWmGFD6OWAEO/1jWJY90JlYbWbUgGfbf8OGK145DTvsKlRQJdggYOKCQWrIzgvcZnznQ3ySGAkHcEfiTEosB963x9imkENsf+fTDZ+fN/875SX/d+F3tNMMsMaFcP5G2UcdrSIozDvCD80vDFj+T8fv+Xnt77onKyrEOVZukEngwGH2mOmIccOHXc6uz6giNifMM1MccJyx09RTbMWrbbfdNlEk//zzz+qXX/7YqceVcmqHHXZIFI02MStXrlSId27/TP0zM4LdunVr1aVLl0QNyOuvv66mTJlSSVP9+vXVpZdeWvk7SV8efPBB9d134gGjJJHpmRajinhmlcmYJg4YwU7TaBlaPXMgB9PIS9D9unkuEWNG+FpMiLE505RPDsB78QifRWLJDhfb5Tm4VX6D1vhJXCp0ukkcgWVOEKJKvZdUFmRm8ZhUBhfSFdSuW1iPl994G2uzxUmHlogIEbEJ9qhRo+rBpCTuFOGVtuGqq65aVEw/P//8czVr1qxAVeCkhrrwwgsVYgNqy48dO1Z9++23WryEQCyOKmCa1LDTWwUW5Y8rrrhCNIHSUkOLTZZTbIK9ZMmSEzBLPCsxEzPL54AfKOG8wqCPK/gMe81eJd/JJ5/sKNTw81azZ8+uUsb8SDYHyt4qsueee6p27dppRwnnOtXLL7+sxRtEMjkQ24ydxO5vvfXWqls3Z4PQe++9p3766adIyOduKQ7CFl0331Zr1qwpup4sVZAbOnToLvDuaxVmp2A+/AHxLaaHWWfYdXFh1aNHD4Vrnx2r5rZ4VKl9+/aqY8eORVcPNU9hDVN0PaWoAGuOdlhjif9umO3mYe21MAhdOQh1D3zuDlJYVwb1vQjcKTp8EuDdu3dXLVu29EzKrrvuqrp27apeeeUV9dVXX3kuZzI6cwDrrsfho7KHlAtyxAD2geJ5l6WOfcopp6j9999f4qUIY97zzjtPNWzYUJ1zzjmqQ4cOYj4DTA4HYtOx8bpZB11wvtR1/GsXjxw5spprHs1jYafjjjtOtW3b1nO1XFjuuOOOlfmpwlB92GWXXdSzzz6rfv3110qc+ZIcDsQm2NjhpGmhhdT1W265ZTcI8Y8SLkzY0UcfrY44wt8ucL5Q59Oyxx57qEsuuUQ9+eSTatmyZfko8z0BHIhNsEvZV7wt1EknneRrpvZCLzd0evfurSZMmKBmzOD1LuGkRYsWKeltxYWun3VBONREWwve1t6PZPkgJfOCTZNez549FRd/QdL8+fPVbrvtpvjnkBJW7ur0009XTZo0Ua+99pqUxTds6tSp6qOPPqpWjn3ImmBX62RIAHr3zcFnTEj12dV8Zn8p5bNp06aWUG+zzTaByZg+fbp69913LeHF9dHaeqjicHH59NNPq8KtdG2hlCNgqjvS7sLee+/9PiaQIAE4p6COeZBBTt7W7G1/xzN4UErovq+iYn4ylbjoO+GEExSPYzml1atXq08++UR16tRJzEZez507V40ePdqyiPANoEvcxbzooovUmDFjymLDBOY4CqWV5s2bx7t2fK+T4MF5cUUVoT7k92uoTcRbWbNmzaxFHf0/3ISaGxsPPPCAWrFihSuRvDj1/vvvV8uXL3fMu9NOO1l698477+yYzyCj5UBmdGwu5GjK22effTxxDDOMosfehg0bPOVnph9//FHxbOCZZ56pmjdvri1H1ef8889Xjz32mFq4cKE2nw7BvtCcWJgaNxadIwuzmd/gQCIE++qrr14AO3adwhGBZcCTkfjwww+3VAm3Gdquf9q0aZYlA69SG+T5Sbv1o48+qrhz2aZNG2252rVrq169eqnHH3/c9yFZ9ocfk4JzIBGCTfIvv/zy9YXd8HqChrMvdwO9CPY777yjJk6cWNiUr9/8Q3Bzhm6yhx56qLYshZs7lfjTBnap1VaeEcSQIUNOxjqmZZjdgRx8nRjBLqZjS5cuVc8995ylIujqoYfeSy+9FPgwglQv62MsDt2mD60j48ePN0ItMa8ChkmiNwS7h0MW3yjUNy4Tgs2e8yAAzXKFQkarxqeffmrZmOlbHXai7ZoCXOg/wkA5tI4E0bHDpjHC+hIbYSczgs3Be+ONN1SrVq2UvciiteOFF15QCxYsiHBslZo8ebKibzXdUJloQuTC8Ycffoi03VJXDlWx8i543Dc/HZ/dJJqgku3HdZSEiwqWKcGmwz1f/Ty/yAMCb7/9tiIsjsRTNrRxM4QZF4zF+HHzbCVNkV5TVAchvLbPfHgz8nIqcScM6pr+VLGfRnzkzZRgs98UiDvvvLMkXnf8U3EB68eEKI0V/U6kLXUpr4HJHMiNGDGiIQaioYTGlubSa665ZpWEwz+0xr333uv7j4Hduc3HHHNMpLpZqVxJ+XaI6w0hjYmB/cGBHBY5vbEyvfkP0B/fINiX45d4ugZHyo7BIPo+w48ZlUfJnc9j/UFCpr/Rg+/rr7+u1kduBIWRdL4tXFAnJYGWryFnn/ilB+XoJN9UV873jKuryMD9c+CLL75Q/ARJBx98sHUQmBYZmhz5sTecICiWNyMXtFKKwjokteMFhgVoPy/5CvNgofo3CPddhXD7txFsmxMpe3LW7dy5cyCqg8ZfCdRYiQplzgmqRHyMvVlGvgoacuH773lLdrhp++23PwBmve2lDyIWxB5428zY4Y5vbLVR7aDlROduqyOEtnXu1Iad4BKhDWwCA0TYzbnWZ2ZsVxYlNwNnbaokXhMtNjRJlkMqxYydg+LPeBGuyc+guVaWwQzcmOFmjpMLLbtNgeYRN8ZEcfMnzwqbYhdsCCu3YUckiYG0KOh2ColLcuLpHh5u4CRA9YSbQ7Tjsz+8U4buBNSpk96PsHkcu2CH3YEw6mNkp9tvvz2MqmKvg45f/JhUlQNGx67KD/MrIxwwM3ZGBrIU3Rg2bNjeUHHgHlOrFvR4npquNlECtRkq0jocGp8VJ41GsOPkdsbagj5vCau94yl1rwI3DbgDJHxUsGr/sKgaMvUaDsTJgdhnbPgxbMQK/t94MkIKH5avrv2dTzKAcHw/IU5mmLaywwFHwYZgXQ6b82lSd/GKeRfhvYK8XjZ5DQoPBxnvuw8SkQZWthxwFGxwpRWEu5XEHUyoKyCg1J1MMhxIHAeMjp24ITEEhcEBI9hhcNHUkTgOuKkisRMMnf4YNDqWDUMNir39tDXIcGjcPi9FhFe4qO7uhV+wcYcf98Kl4cQJNujdEgLdyIXuwGiGZ6DfBH0onOyvUgOMkc2IqjyB8s0330hZIoPx9uDdd99dNWrUyPowxARPxDM+9/PPP68+++yzyNrWVQx31MBhfnV1hgVPomCH1bdq9WAXzIq5t9VWW1nOQhRO+onww1ggukQBOuigg9QBBxxghVjgmcS777479oO7DDBPAS9M++67b0kEu5COJP2uzqWq1E3ELPVoVVDlr28rv6Xky4EHHqgo1Ew86LrXXntZH/5mmOD77ruvivrD+2cYjpg3GuSn+vXrWxGnGLfEb6Jg4hXut5iVn1d4FNJCRIsWLRROsFhvkiAV0xuQrq1ZSm6CPfv6669/JCsdPuyww7Rd4WnxQp1+1apV1uteKvSnP/3JmiV17q5SGcJ4tV6XLl106EBwqkiXXXZZoLIsxAuivvzyy8Dlk1iwbKwi1I15lYaUuPBi5KjCRN9mhk2TEmf8E088UUIZWAI4UBaCzV37Y489VstuXtXBIJJSYkBLXbgx6rbUu01KHgfcVJFIKEZM5O6wSNwiVQ514D9KsIQMCGMQdd19jbSQMGa2U2JcvgsuuEDMQh2cJ1Wk6+vEAgYYCwdKItgQ6voQ4L3i6GGDBg1Ux44dtU3RTOamJ/Nc4axZs8RrQKiS0FrB+2m8mA+px3vJpyU4AkTh2iKCJmKvsiSCHWcveW86bb1SoiXAbba2y7366quKt/FK5jZepMQbyhgI3i3xj1QKm7MbXVnDU7Bfx6r6Cqlj0E2nSvC0wGh75oaMLr3//vvWhUk6fD6cdu4333xTG8eDV3YwZseHH36YX8zTd17dxzdLXOmtt94KbBqMi8Zi28nBnPcRKuEnU4n2Xs7WusQwBJMmTdKhRThnd87aki2ZBWgl4eaNX9MZL2kKenOwSKgLkH/oJMXvcyE3EDqTVhHOfryyjjuNUqKOyztr/G5KUBdlwBmdUND6ctppp1nXT0vtGlh4HMCVg/difdNY+mDcr8ycjs1dPd7UVa+ePlIxZ17u4gVJVEloJenWrZtYnPo823/44YfLJjiNyIiIgX379l2HJviplhD4v0Ekgo3r32pDAP5arcUKAAb/OZjZKo99YSZsiVn0X7r8XuF169ZVZ599tuUkpCuzbNkyNRl3xhSTpk6dajlD6S5L5bY9zYO8D1JnA/fSPi0xQe+xYRAdp/WFl/bTnCcSwcZmRx0IqjYCDWbV0fAMq7y/HZfNF73LQV+Jc8891/KZ0A2IrYLwWWzipU3Ui3V3q/ONYd/OGzS6KWPz+dXX7X4xfrYRbJsbKX1yMXfWWWdZgdCdusAt8uOPP94piy+cm47OwOunnnqquueeewLZrnv06BE4NJnOxOmrgynOHMmM7ZcfWACsgofZYxXlWuJ5hJ866KdMNcQtUdCaN2/uli00PC0vvBYv6BuC64WgnoChdSKlFSVCsCvuAPwLeQi15AIIgi/BptmOnnj0mqOnWxIShZoLyLVr1yaBnLKjIRlSEALbuaCj+yV9P0qdaDl55JFHjFCXaCDgd/9zImbssPrPkLpPPPGEZRmhjkmLBGdMqipRJy7yeACBi1i/F5g+88wz4lZ9VDS7+cZE1W5c9fK6xRpY2GyNu0xkR2UHSmCiW3vttdcul7KMGjWqHk6kPC7hCIO/xc1QN46W8IC3A7ynhPMKoyDzIABncHrf0bk/6vTxxx9bZkT6jfComdfE3cqo9Gj6tXDTiH84mg15NjKovi/1B2uWZoSjTsrCD1KeqGCUMfSpuVQ/ZHNVDrrpaXh9j5YyuMCeBV6MEtWnTx86N/fQla/Qo4fr8MXCeRrGvj+RBwimT59erUr8qxWFsDDRzj1x4sRCcOVvbtNTUAoTDyvw7eBHqFkHfbp1JsPCNor53bRpU4XdOjV27Niibw626cCC3zoeiD8PJ7FeNjyOJ97G7SHA8ikQpf6ZKVVEYijVEWmTpHv37lJ26/Q5VRpdAjNFVBJ0e5GwPGDLli2tjSOqSllf1GZm8Zg3fq5fGbpAt+Xutpmisw/TRp6GxLdUhw4d0kBqUTRmfsaWuNOsmaUaSii1cOFCEW4DebBASkkXbL5puEXPk/XSG0zqU5phZSnYOh8PnnukPdwphT1j33XXXdYCz6lNG8eFIH1A6DrLD4+7EeaU+IfjGoP31AT1O3GqP6m4shNsWkwYh0NKbmqIk/VC58oqtZMPc9uWz89Lv21u0XtJfPPwIPKMGTNCWyx6aTcpeXIw1dD1L4gP58qgncAsswCf8VJ5vDKpJxws4YqFcXZz8hWZPXu2YxN2sB0pE4POuCWqMe3bt3fLpsVztnZLXMRS5eDOJ60tXtv74IMPfP8BwE8rGAnGbLEbXWHj0fbPaLe6uQsNwR97kfN7LGxqPNSHoJTng+DRHrL6zsKjYl27dhXL8ZU9YsQIx+CONJldfPHFYnnYVV11V5rb4Ecsli818I477lC8ENVPGjx4cOLkx6a/bKwiTZo0cQxwM23aNEehJsOc7M3r1ok+7zafzTNmDpSFYFOoe/XqZcXrk/jL2ZoHdd0Sg1PqUta3qXX9Tio884vHtm3bWqERpLAJ9qBMmTLFNbYI8+qC7nC29rMItNs1z+g4kFnB5kKrc+fOrg5QtB54ubKZCz+a2KTkNQoUt92p8gRNDPKuO81OJ6yglhnSU4rA8UH54KVcDneI7wr77UFSZqwuZ8O5ZY6ESyqMCzzG+Nhvv/1cbbxcLNF3In+2pfMUzXpUT2hhwELWCrjTunVrxYMKUvJqH6blhKfcgyanMA0M6OP1Dxa0/TSVy8FnoBNMfg9JRGNQBwA+TMJFBYMZh/c7+q6emy50bGLEfy+J6sOYMWOqqSBsm8LtJ7nZv/3U5ZRXcr6y8wfhmV02i8/MqCJUKXS7goUDx91FOgJJMy3dT4866ijPrqR0Aw164LaQLv5mHECqPHxbsG5+KLRcIzjZ0XXRYqU2woLBNEsPz8QlzI0vZ0awqVbQ/7p3796OTvvz589X48aN04YNpp7KLehDDjnE04DNnDnTc5g0LxXSl4OurDqfFKkOCnUx+rVUpxcY/nBa12Qv5SPMsyRx5j4wy78eUsGhpUuXan2pqXpMmDDBOofoNrvx4iUvieGDX3zxRS9ZPedhH2xfcq+FuHVuUlUOZGbGtrvFoJCcbW1dm6t9noecPHmydpa2y9pPtyhRXATSB4PRVfMXnnb5Yp+0nHg5zsY5gLFH/MYgLJa+NJTPnGBzsBmCjDE5KOTUmf3uCq5YscJy7+SJd+hrlo7LOuicT8sDZ+oiXiyuckGfFVpl2L6tZ/NJGti+/eFpHWMJkdmZA/NWYZBmyGi1QgNPNHjevHmKvg/FCJ/u7pk4Ok6hvvnmm+NoKrNt5AYOHDgBveMnU6kYoc4UI8q0MyVRRXAHze54teqC4hxZpmORum5jA68HxrEG3vo1+GQH8r9X7ElY8MLvzIvJp5p3IPMRV5jy8zIP2qObpRjpgGVLItgg8ih8xE2hwg6Z38nlwHXXXfdcqaiDy+y+aFsr2Ikz95WKUabdbHHACHa2xtP0poIDRrCNKGSSAyXRsYvhJMIF73rVVVctLKzjoYceqgP7cv9CeMXvZbhE6v80OAsMv4dl0PtFDyqsVSYBd4xUHri5wMn+rFKBChjK/TZo0CAxlgOOqDXEwQUxfByLIybKzv3791/iUH0gFHjwC/oixmOOqs1AhHoolDrB1vXpwgsv5GnaG3V4Ay8vDuSGDx++FbaFK888waus0lcDpptfdYEn3dh022237QTHnO2kfJgVmkjwBMMaO9C2rQNuA3Di5AEerNNdUYIdRpFvdjvY0j8Ls+uP9u+C5xq8CZ4pgJXdzxyYdAIEW8cImnN6BOEKBmcgBu+vQcomrQz6QdOSmIDbUUT8ByiqGhX5t4UtdqpDWS0K5e7UIpViqFfdeDoUc0bB50a0L7PUsGHDGgH/nnMN/rFw1T11wIABgY4cibOJfxLSXwICqh249Pcu2h6Adzl8Qg9CjjrlI0seumOsIh6YZLKkjwNGsNM3ZoZiDxwwgu2BSSZL+jhgBDt9Y2Yo9sABLh5/wWbBt1JeKO/LJHgpYfBV3hOrcCcTWyDyUK92IQ3+bAQvavmtGOVQLJJF6UrQ8rtED9pcA+/JUyUcYGvguDRRg3MEw0KRqsV1Dh19GT1q7tgrDRIeVpOAOlRCY0C1pi4wfzw+gzTluqLsUAlHGEyTr+OjQ0cFPwMn4L+WKofdvxPovUPCAbYAn2YSDv2fjnL7STg3GGjpADOYGGkUQt0V/JmgqWMm4FrTpaZMKsHaWcpjb2iOqecxb2U2DOgqbCJ8UQnI+4JNi4OAz4OU/iuEcKXOnoqNkkBmLvSRmzdxp7JRPcumo3FLUELbK5vxLpuOJlTQ4iarbMa7bDoatwQlsT2oVL4XwHY/nLbU7TxJehrBTtJoRE9L2Yx3sYvH6Icioy1g9sT6cfMiTfcogO4XzmgKO4CNYDswxxMKA/cPfMSYufBO6wxrgui1BZyjy6anxoVMoKU/bLEvCShHEExnO4CmU2Ha7FqYEXVuxEnte5DnIhsHWL69tw2E9+82ruD5K+rcpQBm/aS3HOzqgfYQEAL5Q3hWdoXLMdWOmqDdeoKsWvjQZ70sUpQz9lycWnlT4iKEui0GvI2EiwqGQf1OZ/t1ahN24X2Av1zKgz5sQFwWntp5SMLDdNlLgkcJqzhZ80KUbaSh7rJ5NaVhMJJMIzaF8t9ESSbVoq0kgo3ZM1k7MIkfJkOgXw6URLD9EmnyGw745UBJBBu6qZmx/Y6Uye+LAyURbF8UmsyGAwE4kIPJqQlMVnv6LQtz0mqYkm7C5Et7a008LbMSv9O0hOcUXZ0wu70JE9mVOrwOjvZoHuurw0cBh/lsFW5A+KdUN/oZiZthq1atfsS9NtpD1Li6eoFET6lguFZkDbwc/zfs9lFv4H7S3PdnCNkov0RByN6Eh15Hv+WYH2a3T/Hgx1diuAK0G6tgV5jPYj1t37NnT3r+lSzgo69BQeZ+/fqtxeN2v+WizG9UkSi5a+ouGQeMYJeM9abhKDlgBDtK7pq6S8YBI9glY71pOEoOBBZsY4uOclhM3cVygLeGWVeuSRXRcQgC/ImEQ7k5Q4cOPQJWCpq8fofJEMaVjRthyuNjPQ4Ji4dfpbryYbfeemtTBLM8Jx9mfwctTezv0hP0TkKenyQcYN/bcLTRBN5zW/E36K2yWYTyNUF/LXrH8clEGOre0LBhw1l9+vT5za6n8PnUU09tuWTJEsunAn3IwcvOKURXjZEjR9YurCPI7zZt2mzEPfLiqfUg9UllEOOxE5zXknSL3O4YF4lUC5aDYGqRQEyGnfs8KQNNb7BdVgZVtOuBwDD7AnyaSeXcYBCIFqjrVrd8Eh6OOv+D6LA8ie2YIHD/QIbTmQnCK+a14Xa/mGnx4sUzcVnoATohwvXT/FNpT+fnN4RBOQJ3NIbiRvrWW2/xVHr3/PrD/g56R4ddZ5T1BVZFMJGlytsrJCa2xl3nZRG+ICR+layawIJdMopL3DBUlC1KTIJp3gMHjGB7YFJ+FqgmWh07P5/5XloOGMH2z/9IF2n+yTElJA4YwZa44gwzPHPmTyKwOZixloOSDzXUzNPAFSwQaxFr4n0NfokG7grGovQnrMA/YEY8ac/ZBBr5dTOf/G1/55PZ+CEOagKdcVwT9OSvUFTXZ8fyderUcbJkzEVhWwffGjTRy5H9oOlFy0vmKTK5WoI81j8HNDuZKD1WU9ps6MOS/wfwXfNX2mSpmwAAAABJRU5ErkJggg=="

    /***/
  },
  /* 260 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM, _OKConfig) {
      /**
       * 图片轮播组件
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _utils = __webpack_require__(166);

      var _renderJs = __webpack_require__(261);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var stateMixin = __webpack_require__(216);

      var ImageViewer = React.createClass({
        displayName: 'ImageViewer',

        mixins: [_renderJs2['default'], stateMixin],

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        name: "image_viewer",

        statics: {
          imgW: "",
          imgH: ""
        },

        getInitialState: function getInitialState() {
          return {
            imgs: [],
            isCurrent: false
          };
        },

        componentDidMount: function componentDidMount() {

          _utils.Ui.preventOverscroll(".con");

          var _this = this;

          _utils.WindowMessager.listenPageEvent("viewimage", function (img) {

            if (!_this.state.opened) {

              _this.openImageViewer();

              //通知父组件自己已经打开
              _this.props.handleOpen(_this);
            }

            //标志打开状态
            _this._setState({
              opened: true
            }, function () {
              $(ReactDOM.findDOMNode(_this)).focus();
            });

            _this.start(img);
          });

          // 改变窗口的时候从新计算图片浏览器窗口的尺寸
          $(window).on("resize", function () {
            if (_this.state.opened) {

              if (_this.resizeTimeout) clearTimeout(_this.resizeTimeout);
              _this.resizeTimeout = setTimeout(function () {
                var $img = $(ReactDOM.findDOMNode(_this)).find("#maxid_image");

                var originalWidth = $img[0].naturalWidth || $img[0].width;
                var originalHeight = $img[0].naturalHeight || $img[0].height;

                if (originalHeight && originalWidth) _this.setContainerPos(originalWidth, originalHeight);
              }, 500);
            }
          });

          // 键盘操作左右键
          $(ReactDOM.findDOMNode(_this)).on("keydown", function (event) {
            if (event.keyCode == 37) {
              _this.prev(event);
            } else if (event.keyCode == 39) {
              _this.next(event);
            } else if (event.keyCode == 38) {
              var scrollCon = ReactDOM.findDOMNode(_this.refs.scroll_con);
              //向上
              $(ReactDOM.findDOMNode(_this.refs.scroll_con)).stop().animate({
                scrollTop: $(scrollCon).scrollTop() - ($(scrollCon).prop("scrollHeight") - $(scrollCon).height()) / 3
              });
            } else if (event.keyCode == 40) {
              var scrollCon = ReactDOM.findDOMNode(_this.refs.scroll_con);
              //向下
              $(ReactDOM.findDOMNode(_this.refs.scroll_con)).stop().animate({
                scrollTop: $(scrollCon).scrollTop() + ($(scrollCon).prop("scrollHeight") - $(scrollCon).height()) / 3
              });
            }
          });

          //下载图片
          $(ReactDOM.findDOMNode(_this)).on("click", ".fp-ext-download", function () {
            var $img = $(ReactDOM.findDOMNode(_this)).find("#maxid_image");
            _utils.ImageUtil.downloadImages([$img.attr("_src") || $img.get(0).src]);
          });

          //非导航点击则关闭图片面板
          $("#image_viewer").on("click", function (event) {
            var target = event.target;

            // 如果点击的不是左右切换按钮
            if ($(target).closest(".nav").length <= 0) {
              var imgContent = $(ReactDOM.findDOMNode(_this)).find(".inner");
              if (_this.state.opened) {
                if (imgContent && !$.contains(imgContent.get(0), target)) {
                  _this.close(event);
                }
              }
            }
          });
        },

        // 关闭和打开图片查看器
        openImageViewer: function openImageViewer() {
          $("body").addClass("view-image");
          $("#image_viewer").showWithAnim("anim");
        },

        closeImageViewer: function closeImageViewer() {
          $("body").removeClass("view-image");
          $("#image_viewer").hide().removeClass("anim");
        },

        close: function close(event) {
          if (event) event.preventDefault();

          this._setState({
            opened: false
          });

          this.closeImageViewer();

          this.props.handleClose(this);

          var imgNode = ReactDOM.findDOMNode(this.refs.img_node);
          imgNode.src = "";
        },

        start: function start(img) {
          //给当前打开的图片一个特殊标志
          $(img).addClass("current");

          //得到所有符合要求的图片图片
          this.$imgs = $("#note_list .note-content img").filter(function () {
            return (this.width >= 300 || this.naturalWidth >= 300 || $(this).data('width') >= 300) && !$(this).parent().hasClass("media");
          });

          //经过grep会被转化成一般数组，会引起each方法参数变化，所以转回dom数组
          this.$imgs = $(this.$imgs);

          var currentIndex;
          this.$imgs.each(function (i) {
            if (this == img && $(this).hasClass("current")) {
              currentIndex = i;
              return false;
            }
          });

          this.viewImgAtIndex(currentIndex);
        },

        viewImgAtIndex: function viewImgAtIndex(index) {
          var _this = this;

          //把之前可能存在的标志去除
          $("#note_list .note-content img.current").removeClass("current");
          var img = this.$imgs[index];

          $(img).addClass("current");

          //给prev,next按钮指引/图片索引
          var prevIndex = index - 1 >= 0 ? index - 1 : 0;
          var nextIndex = index + 1 <= this.$imgs.length - 1 ? index + 1 : this.$imgs.length - 1;

          var prevBtn = ReactDOM.findDOMNode(this.refs.img_prev_node);
          var nextBtn = ReactDOM.findDOMNode(this.refs.img_next_node);

          if (index - 1 == -1) {
            $(prevBtn).fadeOut();
          } else {
            $(prevBtn).fadeIn();
          }

          if (index + 1 == this.$imgs.length) {
            $(nextBtn).fadeOut();
          } else {
            $(nextBtn).fadeIn();
          }

          $(prevBtn).data("index", prevIndex);
          $(nextBtn).data("index", nextIndex);

          //先加载小图
          if (img.src && img.src.indexOf("data:") != 0) {
            this.loadImg(img);
          }

          //加载大图
          $(ReactDOM.findDOMNode(_this)).addClass("loading");
          var nodeSrc = img.getAttribute("_src") || img.src;
          this.testImg(nodeSrc, function (loadedImg) {
            if (loadedImg) {
              _this.loadImg(loadedImg);
            } else {
              //加载失败
              //如果不是加载的我们cdn的图片，则继续尝试加载cdn图片
              if (nodeSrc.indexOf("//" + _OKConfig.img_cdn_domain) < 0) {

                //找dom节点上的cdn地址
                var cdnSrc = null;
                if (img.src.indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
                  cdnSrc = img.src;
                } else if ($(img).data('origin') && $(img).data('origin').indexOf("//" + _OKConfig.img_cdn_domain) >= 0) {
                  cdnSrc = $(img).data("origin");
                }

                if (cdnSrc) {
                  _this.testImg(cdnSrc, function (loadedImg) {
                    _this.loadImg(loadedImg);
                    $(ReactDOM.findDOMNode(_this)).removeClass("loading");
                  });
                } else {
                  $(ReactDOM.findDOMNode(_this)).removeClass("loading");
                }
              } else {
                $(ReactDOM.findDOMNode(_this)).removeClass("loading");
              }
            }

            // settingout时间根据透明出来的动效时间决定
            setTimeout(function () {
              $(ReactDOM.findDOMNode(_this)).removeClass("loading");
            }, 600);
          });
        },

        loadImg: function loadImg(img) {
          //展示图片的节点
          var imgNode = ReactDOM.findDOMNode(this.refs.img_node);

          var originalWidth = $(img).data("width");
          var originalHeight = $(img).data("width");

          if (!originalWidth || !originalHeight) {
            originalWidth = img.naturalWidth || img.width;
            originalHeight = img.naturalHeight || img.height;
          }

          if (this.imgW != originalWidth || this.imgH != originalHeight) {
            this.setContainerPos(originalWidth, originalHeight);
          } else {
            $(imgNode).css({"opacity": "1", "transition": "none"});
          }

          imgNode.src = img.src;
        },

        //通过缩略图的src来获取大图的src并加载
        testImg: function testImg(src, callback) {
          if (src.indexOf(_OKConfig.img_cdn_domain) >= 0) {
            src = _utils.ImageUtil.getFullsizeImgViaSrc(src);
          }

          var img = new Image();
          img.onload = function () {
            callback(img);
          };

          img.onerror = function () {
            callback(false);
            //加载失败则使用自己的CDN
            img.src = _utils.ImageUtil.getFullsizeImgViaSrc(src);
            img.onerror = null;
          };

          img.src = src;
        },

        setContainerPos: function setContainerPos(nImgWidth, nImgHeight) {
          // 常规尺寸的图片
          var $img = $(ReactDOM.findDOMNode(this)).find("#maxid_image");

          // 添加下载按钮
          if ($(ReactDOM.findDOMNode(this)).find(".fp-ext-download").length <= 0) {
            $img.after("<span class='fp-ext-download fp-tooltips' data-tooltip=" + _utils.LocaleUtil.translate("download_img") + " data-placement='top'></span>");
          }

          //存储当前图片大小
          this.imgW = nImgWidth;
          this.imgH = nImgHeight;

          var $con = $("#image_viewer .con");

          var bgw = $con.width(),
          bgh = $con.height();

          //最大宽度根据背景本身 - 按钮大小和一些间距
          var maxImgW = bgw * 0.7,
          maxImgH = bgh,
          imgLeft,
          imgTop,
          fImgWidth,
          fImgHeihgt;

          // 四种状况：宽且长（大图），宽但不长（扁图），不宽但长图（长图），不宽不长图（常规图）；
          // 以上全以图片原始宽高与容器宽高对比
          if (nImgWidth >= maxImgW) {
            // 变化后的图片高度
            var imgHeight = nImgHeight * 0.7;
            var calImgHeight = nImgHeight * (maxImgW / nImgWidth);

            if (calImgHeight >= maxImgH) {
              // 大图
              imgLeft = (bgw - maxImgW - 20) / 2;
              imgTop = 20;
            } else {
              // 扁图
              imgLeft = (bgw - maxImgW - 20) / 2;
              imgTop = (bgh - calImgHeight - 20) / 2;
            }

            // 设定最后宽高
            fImgWidth = maxImgW;
            fImgHeihgt = calImgHeight;
          } else {
            if (nImgHeight >= maxImgH) {
              // 长图
              imgLeft = (bgw - nImgWidth - 20) / 2;
              imgTop = 20;
            } else {
              // 常规
              // 减去border宽度
              imgLeft = (bgw - nImgWidth - 20) / 2;
              imgTop = (bgh - nImgHeight - 20) / 2;
            }

            fImgWidth = nImgWidth;
            fImgHeihgt = nImgHeight;
          }

          var $inner = $img.parents(".inner");

          // 赋值宽高给图片容器inner
          $inner.css({"width": fImgWidth, "height": fImgHeihgt});
          $img.css({"width": fImgWidth, "height": fImgHeihgt, "opacity": "", "transition": ""});

          //如果支持css3动画
          if (window.isTransformSupported) {
            $inner.css({"transform": "translate3d(" + imgLeft + "px," + imgTop + "px,0)", "transition": ""});
          } else {
            $inner.css({
              "left": imgLeft,
              "top": imgTop
            });
          }
        },

        prev: function prev(event) {
          event.preventDefault();

          var prevBtn = ReactDOM.findDOMNode(this.refs.img_prev_node);
          var index = $(prevBtn).data("index");

          this.viewImgAtIndex(index);
        },

        next: function next(event) {
          event.preventDefault();

          var nextBtn = ReactDOM.findDOMNode(this.refs.img_next_node);
          var index = $(nextBtn).data("index");

          this.viewImgAtIndex(index);
        }

      });

      exports['default'] = ImageViewer;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1), __webpack_require__(163)))

    /***/
  },
  /* 261 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tplMixins = {
        renderFn: function renderFn() {
          var classNames = "widget";

          var hidden = '1';
          if (this.state.isCurrent) hidden = "0";

          if (this.state.opened) {
            classNames += ' opened';
          }

          return React.createElement(
          "div",
          {id: "image_viewer", tabIndex: "0", className: classNames, "data-hidden": hidden},
          React.createElement("div", {className: "mask"}),
          React.createElement(
          "div",
          {className: "con", ref: "scroll_con"},
          React.createElement(
          "div",
          {className: "inner"},
          React.createElement("img", {id: "maxid_image", ref: "img_node", src: ""})
          )
          ),
          React.createElement(
          "div",
          {className: "nav"},
          React.createElement(
          "a",
          {href: "#", className: "prev btn", ref: "img_prev_node", onClick: this.prev},
          React.createElement("span", {
            className: "fp-ext-left icon-font"
          })
          ),
          React.createElement(
          "a",
          {href: "#", className: "next btn", ref: "img_next_node", onClick: this.next},
          React.createElement("span", {
            className: "fp-ext-right icon-font"
          })
          )
          ),
          React.createElement(
          "a",
          {href: "#", className: "close btn", onClick: this.close},
          React.createElement("span", {
            className: "fp-ext-close icon-font"
          })
          )
          );
        }
      };

      exports["default"] = tplMixins;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 262 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       * 图片轮播组件
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _renderJs = __webpack_require__(263);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var stateMixin = __webpack_require__(216);

      var MediaViewer = React.createClass({
        displayName: 'MediaViewer',

        mixins: [_renderJs2['default'], stateMixin],

        name: "media_viewer",

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        getInitialState: function getInitialState() {
          return {};
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          _utils.WindowMessager.listenPageEvent("viewMedia", function (media) {

            if (!_this.state.opened) {

              _this.openMediaViewer();

              //通知父组件自己已经打开
              _this.props.handleOpen(_this);
            }

            //标志打开状态
            _this._setState({
              opened: true
            }, function () {
              $(ReactDOM.findDOMNode(_this)).focus();
            });

            _this.start(media);
          });

          //非导航点击则关闭图片面板
          $("#media_viewer").on("click", function (event) {
            var target = event.target;

            var imgContent = $(ReactDOM.findDOMNode(_this)).find(".inner");
            if (_this.state.opened) {
              if (imgContent && !$.contains(imgContent.get(0), target)) {
                _this.close(event);
              }
            }
          });
        },

        start: function start(media) {
          //展示图片的节点

          var $imgContent = $(ReactDOM.findDOMNode(this)).find(".inner");
          var mediaNode = ReactDOM.findDOMNode(this.refs.media_node);

          $(mediaNode).css({"width": 720 + "px", "height": 480 + "px"});

          var mediaUrl = $(media).data("media");
          mediaUrl = this.setVideoAotoplay(mediaUrl);

          //判断当前网页协议是否是https,如果是https,mediaUrl不是https的话，需要如何处理?
          if (_models.AppModel.Globals.protocol && _models.AppModel.Globals.protocol == 'https' && mediaUrl.indexOf("https:") != 0) {

            alert("抱歉,这条视频链接有点特殊,需要在新窗口打开");

            window.open(mediaUrl);

            this.close();

            return false;
          }

          $(mediaNode).attr("src", mediaUrl);

          $imgContent.addClass("loading");

          mediaNode.onload = mediaNode.onreadystatechange = function () {
            if (this.readyState && this.readyState != 'complete') return; else {
              $imgContent.removeClass("loading");
              $(mediaNode).css({"opacity": 1});
            }
          };
        },

        // 判断视屏的来源
        setVideoAotoplay: function setVideoAotoplay(src) {

          var appUrl = $("<a href=" + src + "></a>").get(0).host;
          var autoplaySrc = src;

          if (appUrl == "player.youku.com") {

            autoplaySrc = src + "?autoplay=1";
          } else if (appUrl == "v.qq.com") {

            autoplaySrc = src + "?autoplay=1";
          } else if (appUrl == "www.letv.com" || appUrl == "www.le.com") {
          } else if (appUrl == "www.youtube.com" || appUrl == "youtu.be") {

            autoplaySrc = src + "?autoplay=true";
          } else if (appUrl == "player.vimeo.com") {

            autoplaySrc = src + "?autoplay=true";
          } else if (appUrl == "embed-ssl.ted.com") {
          }

          return autoplaySrc;
        },

        // 关闭和打开图片查看器
        openMediaViewer: function openMediaViewer() {
          $("body").addClass("view-media");
          $("#media_viewer").showWithAnim("anim");
        },

        closeMediaViewer: function closeMediaViewer() {
          $("body").removeClass("view-media");
          $("#media_viewer").hide().removeClass("anim");
        },

        close: function close(event) {
          if (event) event.preventDefault();

          this._setState({
            opened: false
          });

          this.closeMediaViewer();

          this.props.handleClose(this);

          $(ReactDOM.findDOMNode(this.refs.media_node)).attr("src", "");
        }

      });

      exports['default'] = MediaViewer;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 263 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _components = __webpack_require__(159);

      var tplMixins = {
        renderFn: function renderFn() {
          var classNames = "widget";

          var hidden = '1';
          if (this.state.isCurrent) hidden = "0";

          if (this.state.opened) {
            classNames += ' opened';
          }

          return React.createElement(
          'div',
          {id: 'media_viewer', tabIndex: '0', className: classNames, 'data-hidden': hidden},
          React.createElement('div', {className: 'mask'}),
          React.createElement(
          'div',
          {className: 'con', ref: 'scroll_con'},
          React.createElement(
          'div',
          {className: 'inner'},
          React.createElement('iframe', {id: 'maxid_media', ref: 'media_node', src: ''}),
          React.createElement(_components.LoadingAnim, null)
          )
          ),
          React.createElement(
          'a',
          {href: '#', className: 'close btn', onClick: this.close},
          React.createElement('span', {
            className: 'fp-ext-close icon-font'
          })
          )
          );
        }
      };

      exports['default'] = tplMixins;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 264 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       *  浏览视频，网页，图片的容器组件，视频播放器组件，浏览器组件以及图片轮播组件都会嵌入在此组件中
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {'default': obj};
      }

      var _renderJs = __webpack_require__(265);

      var _renderJs2 = _interopRequireDefault(_renderJs);

      var _components = __webpack_require__(159);

      var _utils = __webpack_require__(166);

      var stateMixin = __webpack_require__(216);
      var EmbedBrowsers = React.createClass({
        displayName: 'EmbedBrowsers',

        mixins: [_renderJs2['default'], stateMixin],

        render: function render() {
          var html = this.renderFn();
          return html;
        },

        statics: {},

        getInitialState: function getInitialState() {
          return {
            openStack: [],

            showMergeTips: false
          };
        },

        // 控制拖拽提示页面是否显示
        closeTips: function closeTips() {

          this._setState({
            showMergeTips: false
          });
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          _utils.Ui.preventOverscroll(".ground");

          //按下Esc键时
          $(window).on("keyup", function (event) {
            if (event.keyCode == 27 && _this.isThereAnyWindow()) {
              _this.popWindow();
            }
          });

          _utils.WindowMessager.listenPageEvent("show-merge-tips", function () {
            _this._setState({
              showMergeTips: true
            });
          });
        },

        componentWillUnmount: function componentWillUnmount() {
          _utils.Ui.stopPreventOverScroll(".ground");
        },

        //打开window(编辑器，内置浏览器，图片查看器)时记录历史
        onOpenWindow: function onOpenWindow(component) {
          var _this = this;

          //之前没有嵌入任何小窗口
          if (!this.isThereAnyWindow()) {
            this.open();
          }

          //去掉之前打开的同类型的窗口
          $(this.state.openStack).each(function (i, win) {
            if (this.name == component.name) {
              _this.state.openStack.splice(i, 1);
            }
          });

          //按打开顺序放入stack
          this.state.openStack.push(component);

          //对所有窗口根据打开顺序进行z-index的排列
          this.arrangeLayoutStack();
        },

        //关闭window时，根据是否有其他的window来关闭右侧浏览区域
        onCloseWindow: function onCloseWindow(component) {
          var _this = this;

          //关闭窗口
          $(this.state.openStack).each(function (i, win) {
            if (this.name == component.name) {
              //从打开栈中去除
              _this.state.openStack.splice(i, 1);
              ReactDOM.findDOMNode(this).style.zIndex = 0;

              //取消标记为当前窗口
              if (this.state.isCurrent) {
                this._setState({
                  isCurrent: false
                });
              }
            }
          });

          //对所有窗口根据打开顺序进行z-index的排列
          this.arrangeLayoutStack();

          if (!this.isThereAnyWindow()) {
            //关闭侧边栏浏览区域
            this.close();
          }
        },

        arrangeLayoutStack: function arrangeLayoutStack() {
          var _this = this;

          $(this.state.openStack).each(function (i) {
            ReactDOM.findDOMNode(this).style.zIndex = parseInt(i) + 1;

            //将最后打开的标志为当前浏览窗口
            if (i == _this.state.openStack.length - 1) {
              if (!this.state.isCurrent) {
                this._setState({
                  isCurrent: true
                });
              }
            } else {
              if (this.state.isCurrent) {
                this._setState({
                  isCurrent: false
                });
              }
            }
          });
        },

        popWindow: function popWindow() {
          var component = this.state.openStack.pop();

          if (component) {
            component.close();
          }
        },

        // 打开右侧浏览(网页，视频，图片，编辑器)区域
        open: function open() {
          $("body").addClass("full-page");
          //full-page类会将右侧浏览器display:block

          _components.StaticFn.animAfterShow(this);

          _components.StaticFn.handleFullPageOn();
        },

        // 关闭右侧浏览(网页，视频，图片，编辑器)区域
        close: function close() {
          $("body").removeClass("full-page");

          _components.StaticFn.animBeforeHide(this, 1000);

          _components.StaticFn.handleFullPageOff();
        },

        isThereAnyWindow: function isThereAnyWindow() {
          return this.state.openStack.length > 0;
        }

      });

      exports['default'] = EmbedBrowsers;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 265 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, React) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _components = __webpack_require__(159);

      var tplMixins = {
        renderFn: function renderFn() {
          var classNames = this.state.animated ? " anim" : "";

          var editorJSX = "";
          if (_OKConfig.editor_enabled) {
            editorJSX = React.createElement(_components.MCEEditor, {
              ref: "editor",
              handleOpen: this.onOpenWindow,
              handleClose: this.onCloseWindow
            });
          }

          var mergeTipsJSX = "";
          if (this.state.showMergeTips) {
            mergeTipsJSX = React.createElement(_components.MergeTipsCover, {handleClose: this.closeTips});
          }

          return React.createElement(
          "div",
          {id: "browse_area", className: classNames},
          React.createElement(
          "div",
          {className: "max-space"},
          React.createElement(
          "div",
          {className: "ground", id: "widgets"},
          editorJSX,
          React.createElement(_components.ImageViewer, {
            ref: "image_viewer",
            handleOpen: this.onOpenWindow,
            handleClose: this.onCloseWindow
          }),
          React.createElement(_components.MediaViewer, {
            ref: "media_viewer",
            handleOpen: this.onOpenWindow,
            handleClose: this.onCloseWindow
          }),
          mergeTipsJSX
          )
          )
          );
        }
      };

      exports["default"] = tplMixins;
      module.exports = exports["default"];
      /* 编辑器 */
      /* 图片浏览器 */
      /* 图片浏览器 */
      /* 合并提示面板 */
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(147)))

    /***/
  },
  /* 266 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, ReactDOM, $, _O) {
      /**
       *  分享面板
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(267);
      var stateMixin = __webpack_require__(216);

      var Sortable = __webpack_require__(268);

      var NoteTagPanel = React.createClass({
        displayName: 'NoteTagPanel',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            tags: _models.TagModel.getLocalTags()
          };
        },

        /**
         * 更新标签
         *
         * @return {[type]} [description]
         */
        updateTags: function updateTags() {
          if (this.isMounted()) {
            var tags = _models.TagModel.getLocalTags();

            this._setState({
              tags: tags
            });
          }
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          var refreshTimeout = null;
          var NoteTagPanelDom = ReactDOM.findDOMNode(this);

          //刷新标签
          _utils.WindowMessager.listenGlobalEvent('tags-changed', function (tags) {
            if (refreshTimeout) clearTimeout(refreshTimeout);
            refreshTimeout = setTimeout(function () {
              _this.updateTags();
            }, 100);
          });

          // 得到当前滚动高度 面板高度
          var $app = $("#app"),
          $tagContent = $(".tag-content"),
          $tagPanel = $(".note-tag-panel");
          var scroll_height = $app.scrollTop();
          var content_height = $tagContent.height();
          var panel_height = $tagPanel.height();

          // 标签面板展开收起
          $("p.others", NoteTagPanelDom).on("click", function () {
            var spanEle = $(this).find("span");
            var note_height = $tagPanel.height();

            if (spanEle.hasClass('fp-ext-list-expend')) {
              $tagPanel.css("height", "auto");
              $tagContent.css("height", "auto");
              spanEle.removeClass('fp-ext-list-expend');
              spanEle.addClass('fp-ext-list-up');
            } else {
              $tagPanel.css("height", panel_height + "px");
              $tagContent.css("height", content_height + "px");
              spanEle.removeClass('fp-ext-list-up');
              spanEle.addClass('fp-ext-list-expend');
              $app.animate({scrollTop: scroll_height + "px"}, 300);
            }
          });

          //当贴纸数量的个数大于11时，展示更多的小图标显示
          if ($(".tag").length >= 12) {
            $('.others span').removeClass('dn');
          }

          var list = $(".taglist", NoteTagPanelDom).get(0);
          var createTag = $(".create-tag", NoteTagPanelDom).get(0);

          //拖拽排序
          Sortable.create(list, {onSort: addSortmark, filter: ".create-tag", draggable: ".tag-wrap"});

          function addSortmark() {
            //标识贴纸被排序
            $(NoteTagPanelDom).attr("data-tags-sorted", 1);

            _O.debug("标签排序被改变");

            var $tags = $(NoteTagPanelDom).find(".tag-wrap");

            if ($tags && $tags.length > 0) {
              var gtid = null;

              for (var i = 0; i < $tags.length; i++) {
                gtid = $(".tag", $tags[i]).data("gtid");
                _models.TagModel.updatePosition(gtid, i);
              }
            }
          };
        },

        /**
         * 组件被移除,清理一些事情
         *
         * @return {[type]} [description]
         */
        componentWillUnmount: function componentWillUnmount() {

          // WindowMessager.stopListenGlobalEvent('tags-changed');

          $("p.others", ReactDOM.findDOMNode(this)).off("click");
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = NoteTagPanel;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(1), __webpack_require__(161), __webpack_require__(162)))

    /***/
  },
  /* 267 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _components = __webpack_require__(159);

      var RenderMixin = {
        _render: function _render() {
          var classNames = "note-tag-panel ";

          var _this = this;
          var tagsJSX = null;

          //所有标签
          var tags = this.state.tags;
          //var num = tags && parseInt(12 - tags.length) > 0 ? parseInt(12 - tags.length) : 0;

          //贴纸标签
          var currentNoteTags = this.props.note.tags || [];

          if (tags) {
            if (tags.length > 0) {

              var checked = false;
              tagsJSX = tags.map(function (tag) {
                if (tag) {
                  checked = false;

                  if (currentNoteTags.indexOf(tag.gtid) >= 0) {
                    checked = true;
                  }

                  return React.createElement(_components.Tag, {
                    checked: checked,
                    key: Math.random(),
                    tag: tag,
                    addTag: _this.props.addTag,
                    removeTag: _this.props.removeTag
                  });
                }
              });

              //当贴纸数量大于11时，展示更多的小图标显示
              if (tags.length >= 12) {
                $(".others span").removeClass('dn');
              }
            } else if (tags.length == 0) {
              classNames += "no-tag";
            }
          }

          var createTagJSX = React.createElement(_components.CreateTag, {
            updateTags: this.updateTags,
            addTag: this.props.addTag
          });

          return React.createElement(
          'div',
          {className: classNames},
          React.createElement(
          'div',
          {className: 'tag-content'},
          React.createElement(
          'h3',
          null,
          '分类'
          ),
          React.createElement(
          'div',
          {className: 'taglist'},
          tagsJSX,
          createTagJSX
          ),
          React.createElement(
          'a',
          {className: 'close', href: '', onClick: this.props.close},
          React.createElement('span', {className: 'icon-font fp-ext-right-small ca9'}),
          React.createElement('span', {className: 'icon-font fp-ext-right-small c31'})
          )
          ),
          React.createElement(
          'p',
          {className: 'others '},
          React.createElement('span', {className: 'icon-font fp-ext-list-expend dn'})
          )
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /*标题*/
      /*标签列表*/
      /*创建标签*/
      /*关闭按钮*/
      /*更多标签显示按钮*/
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161)))

    /***/
  },
  /* 268 */
  /***/ function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*! Sortable 1.4.2 - MIT | git://github.com/rubaxa/Sortable.git */
    "use strict";

    !(function (a) {
      "use strict";
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = a() : "undefined" != typeof Package ? Sortable = a() : window.Sortable = a();
    })(function () {
      "use strict";

      function a(a, b) {
        if (!a || !a.nodeType || 1 !== a.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + ({}).toString.call(a);
        this.el = a, this.options = b = r({}, b), a[L] = this;
        var c = {
          group: Math.random(),
          sort: !0,
          disabled: !1,
          store: null,
          handle: null,
          scroll: !0,
          scrollSensitivity: 30,
          scrollSpeed: 10,
          draggable: /[uo]l/i.test(a.nodeName) ? "li" : ">*",
          ghostClass: "sortable-ghost",
          chosenClass: "sortable-chosen",
          ignore: "a, img",
          filter: null,
          animation: 150,
          setData: function setData(a, b) {
            a.setData("Text", b.textContent);
          },
          dropBubble: !1,
          dragoverBubble: !1,
          dataIdAttr: "data-id",
          delay: 0,
          forceFallback: !1,
          fallbackClass: "sortable-fallback",
          fallbackOnBody: !1
        };
        for (var d in c) !(d in b) && (b[d] = c[d]);
        V(b);
        for (var f in this) "_" === f.charAt(0) && (this[f] = this[f].bind(this));
        this.nativeDraggable = b.forceFallback ? !1 : P, e(a, "mousedown", this._onTapStart), e(a, "touchstart", this._onTapStart), this.nativeDraggable && (e(a, "dragover", this), e(a, "dragenter", this)), T.push(this._onDragOver), b.store && this.sort(b.store.get(this));
      }

      function b(a) {
        v && v.state !== a && (h(v, "display", a ? "none" : ""), !a && v.state && w.insertBefore(v, s), v.state = a);
      }

      function c(a, b, c) {
        if (a) {
          c = c || N, b = b.split(".");
          var d = b.shift().toUpperCase(),
          e = new RegExp("\\s(" + b.join("|") + ")(?=\\s)", "g");
          do if (">*" === d && a.parentNode === c || ("" === d || a.nodeName.toUpperCase() == d) && (!b.length || ((" " + a.className + " ").match(e) || []).length == b.length)) return a; while (a !== c && (a = a.parentNode));
        }
        return null;
      }

      function d(a) {
        a.dataTransfer && (a.dataTransfer.dropEffect = "move"), a.preventDefault();
      }

      function e(a, b, c) {
        a.addEventListener(b, c, !1);
      }

      function f(a, b, c) {
        a.removeEventListener(b, c, !1);
      }

      function g(a, b, c) {
        if (a) if (a.classList) a.classList[c ? "add" : "remove"](b); else {
          var d = (" " + a.className + " ").replace(K, " ").replace(" " + b + " ", " ");
          a.className = (d + (c ? " " + b : "")).replace(K, " ");
        }
      }

      function h(a, b, c) {
        var d = a && a.style;
        if (d) {
          if (void 0 === c) return N.defaultView && N.defaultView.getComputedStyle ? c = N.defaultView.getComputedStyle(a, "") : a.currentStyle && (c = a.currentStyle), void 0 === b ? c : c[b];
          b in d || (b = "-webkit-" + b), d[b] = c + ("string" == typeof c ? "" : "px");
        }
      }

      function i(a, b, c) {
        if (a) {
          var d = a.getElementsByTagName(b),
          e = 0,
          f = d.length;
          if (c) for (; f > e; e++) c(d[e], e);
          return d;
        }
        return [];
      }

      function j(a, b, c, d, e, f, g) {
        var h = N.createEvent("Event"),
        i = (a || b[L]).options,
        j = "on" + c.charAt(0).toUpperCase() + c.substr(1);
        h.initEvent(c, !0, !0), h.to = b, h.from = e || b, h.item = d || b, h.clone = v, h.oldIndex = f, h.newIndex = g, b.dispatchEvent(h), i[j] && i[j].call(a, h);
      }

      function k(a, b, c, d, e, f) {
        var g,
        h,
        i = a[L],
        j = i.options.onMove;
        return g = N.createEvent("Event"), g.initEvent("move", !0, !0), g.to = b, g.from = a, g.dragged = c, g.draggedRect = d, g.related = e || b, g.relatedRect = f || b.getBoundingClientRect(), a.dispatchEvent(g), j && (h = j.call(i, g)), h;
      }

      function l(a) {
        a.draggable = !1;
      }

      function m() {
        R = !1;
      }

      function n(a, b) {
        var c = a.lastElementChild,
        d = c.getBoundingClientRect();
        return (b.clientY - (d.top + d.height) > 5 || b.clientX - (d.right + d.width) > 5) && c;
      }

      function o(a) {
        for (var b = a.tagName + a.className + a.src + a.href + a.textContent, c = b.length, d = 0; c--;) d += b.charCodeAt(c);
        return d.toString(36);
      }

      function p(a) {
        var b = 0;
        if (!a || !a.parentNode) return -1;
        for (; a && (a = a.previousElementSibling);) "TEMPLATE" !== a.nodeName.toUpperCase() && b++;
        return b;
      }

      function q(a, b) {
        var c, d;
        return function () {
          void 0 === c && (c = arguments, d = this, setTimeout(function () {
            1 === c.length ? a.call(d, c[0]) : a.apply(d, c), c = void 0;
          }, b));
        };
      }

      function r(a, b) {
        if (a && b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a;
      }

      var s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J = {},
      K = /\s+/g,
      L = "Sortable" + new Date().getTime(),
      M = window,
      N = M.document,
      O = M.parseInt,
      P = !!("draggable" in N.createElement("div")),
      Q = (function (a) {
        return a = N.createElement("x"), a.style.cssText = "pointer-events:auto", "auto" === a.style.pointerEvents;
      })(),
      R = !1,
      S = Math.abs,
      T = ([].slice, []),
      U = q(function (a, b, c) {
        if (c && b.scroll) {
          var d,
          e,
          f,
          g,
          h = b.scrollSensitivity,
          i = b.scrollSpeed,
          j = a.clientX,
          k = a.clientY,
          l = window.innerWidth,
          m = window.innerHeight;
          if (z !== c && (y = b.scroll, z = c, y === !0)) {
            y = c;
            do if (y.offsetWidth < y.scrollWidth || y.offsetHeight < y.scrollHeight) break; while (y = y.parentNode);
          }
          y && (d = y, e = y.getBoundingClientRect(), f = (S(e.right - j) <= h) - (S(e.left - j) <= h), g = (S(e.bottom - k) <= h) - (S(e.top - k) <= h)), f || g || (f = (h >= l - j) - (h >= j), g = (h >= m - k) - (h >= k), (f || g) && (d = M)), (J.vx !== f || J.vy !== g || J.el !== d) && (J.el = d, J.vx = f, J.vy = g, clearInterval(J.pid), d && (J.pid = setInterval(function () {
            d === M ? M.scrollTo(M.pageXOffset + f * i, M.pageYOffset + g * i) : (g && (d.scrollTop += g * i), f && (d.scrollLeft += f * i));
          }, 24)));
        }
      }, 30),
      V = function V(a) {
        var b = a.group;
        b && "object" == typeof b || (b = a.group = {name: b}), ["pull", "put"].forEach(function (a) {
          a in b || (b[a] = !0);
        }), a.groups = " " + b.name + (b.put.join ? " " + b.put.join(" ") : "") + " ";
      };
      return a.prototype = {
        constructor: a, _onTapStart: function _onTapStart(a) {
          var b = this,
          d = this.el,
          e = this.options,
          f = a.type,
          g = a.touches && a.touches[0],
          h = (g || a).target,
          i = h,
          k = e.filter;
          if (!("mousedown" === f && 0 !== a.button || e.disabled) && (h = c(h, e.draggable, d))) {
            if ((D = p(h), "function" == typeof k)) {
              if (k.call(this, a, h, this)) return j(b, i, "filter", h, d, D), void a.preventDefault();
            } else if (k && (k = k.split(",").some(function (a) {
              return a = c(i, a.trim(), d), a ? (j(b, a, "filter", h, d, D), !0) : void 0;
            }))) return void a.preventDefault();
            (!e.handle || c(i, e.handle, d)) && this._prepareDragStart(a, g, h);
          }
        }, _prepareDragStart: function _prepareDragStart(a, b, c) {
          var d,
          f = this,
          h = f.el,
          j = f.options,
          k = h.ownerDocument;
          c && !s && c.parentNode === h && (G = a, w = h, s = c, t = s.parentNode, x = s.nextSibling, F = j.group, d = function () {
            f._disableDelayedDrag(), s.draggable = !0, g(s, f.options.chosenClass, !0), f._triggerDragStart(b);
          }, j.ignore.split(",").forEach(function (a) {
            i(s, a.trim(), l);
          }), e(k, "mouseup", f._onDrop), e(k, "touchend", f._onDrop), e(k, "touchcancel", f._onDrop), j.delay ? (e(k, "mouseup", f._disableDelayedDrag), e(k, "touchend", f._disableDelayedDrag), e(k, "touchcancel", f._disableDelayedDrag), e(k, "mousemove", f._disableDelayedDrag), e(k, "touchmove", f._disableDelayedDrag), f._dragStartTimer = setTimeout(d, j.delay)) : d());
        }, _disableDelayedDrag: function _disableDelayedDrag() {
          var a = this.el.ownerDocument;
          clearTimeout(this._dragStartTimer), f(a, "mouseup", this._disableDelayedDrag), f(a, "touchend", this._disableDelayedDrag), f(a, "touchcancel", this._disableDelayedDrag), f(a, "mousemove", this._disableDelayedDrag), f(a, "touchmove", this._disableDelayedDrag);
        }, _triggerDragStart: function _triggerDragStart(a) {
          a ? (G = {
            target: s,
            clientX: a.clientX,
            clientY: a.clientY
          }, this._onDragStart(G, "touch")) : this.nativeDraggable ? (e(s, "dragend", this), e(w, "dragstart", this._onDragStart)) : this._onDragStart(G, !0);
          try {
            N.selection ? N.selection.empty() : window.getSelection().removeAllRanges();
          } catch (b) {
          }
        }, _dragStarted: function _dragStarted() {
          w && s && (g(s, this.options.ghostClass, !0), a.active = this, j(this, w, "start", s, w, D));
        }, _emulateDragOver: function _emulateDragOver() {
          if (H) {
            if (this._lastX === H.clientX && this._lastY === H.clientY) return;
            this._lastX = H.clientX, this._lastY = H.clientY, Q || h(u, "display", "none");
            var a = N.elementFromPoint(H.clientX, H.clientY),
            b = a,
            c = " " + this.options.group.name,
            d = T.length;
            if (b) do {
              if (b[L] && b[L].options.groups.indexOf(c) > -1) {
                for (; d--;) T[d]({clientX: H.clientX, clientY: H.clientY, target: a, rootEl: b});
                break;
              }
              a = b;
            } while (b = b.parentNode);
            Q || h(u, "display", "");
          }
        }, _onTouchMove: function _onTouchMove(b) {
          if (G) {
            a.active || this._dragStarted(), this._appendGhost();
            var c = b.touches ? b.touches[0] : b,
            d = c.clientX - G.clientX,
            e = c.clientY - G.clientY,
            f = b.touches ? "translate3d(" + d + "px," + e + "px,0)" : "translate(" + d + "px," + e + "px)";
            I = !0, H = c, h(u, "webkitTransform", f), h(u, "mozTransform", f), h(u, "msTransform", f), h(u, "transform", f), b.preventDefault();
          }
        }, _appendGhost: function _appendGhost() {
          if (!u) {
            var a,
            b = s.getBoundingClientRect(),
            c = h(s),
            d = this.options;
            u = s.cloneNode(!0), g(u, d.ghostClass, !1), g(u, d.fallbackClass, !0), h(u, "top", b.top - O(c.marginTop, 10)), h(u, "left", b.left - O(c.marginLeft, 10)), h(u, "width", b.width), h(u, "height", b.height), h(u, "opacity", "1"), h(u, "position", "fixed"), h(u, "zIndex", "100000"), h(u, "pointerEvents", "none"), d.fallbackOnBody && N.body.appendChild(u) || w.appendChild(u), a = u.getBoundingClientRect(), h(u, "width", 2 * b.width - a.width), h(u, "height", 2 * b.height - a.height);
          }
        }, _onDragStart: function _onDragStart(a, b) {
          var c = a.dataTransfer,
          d = this.options;
          this._offUpEvents(), "clone" == F.pull && (v = s.cloneNode(!0), h(v, "display", "none"), w.insertBefore(v, s)), b ? ("touch" === b ? (e(N, "touchmove", this._onTouchMove), e(N, "touchend", this._onDrop), e(N, "touchcancel", this._onDrop)) : (e(N, "mousemove", this._onTouchMove), e(N, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (c && (c.effectAllowed = "move", d.setData && d.setData.call(this, c, s)), e(N, "drop", this), setTimeout(this._dragStarted, 0));
        }, _onDragOver: function _onDragOver(a) {
          var d,
          e,
          f,
          g = this.el,
          i = this.options,
          j = i.group,
          l = j.put,
          o = F === j,
          p = i.sort;
          if ((void 0 !== a.preventDefault && (a.preventDefault(), !i.dragoverBubble && a.stopPropagation()), I = !0, F && !i.disabled && (o ? p || (f = !w.contains(s)) : F.pull && l && (F.name === j.name || l.indexOf && ~l.indexOf(F.name))) && (void 0 === a.rootEl || a.rootEl === this.el))) {
            if ((U(a, i, this.el), R)) return;
            if ((d = c(a.target, i.draggable, g), e = s.getBoundingClientRect(), f)) return b(!0), void (v || x ? w.insertBefore(s, v || x) : p || w.appendChild(s));
            if (0 === g.children.length || g.children[0] === u || g === a.target && (d = n(g, a))) {
              if (d) {
                if (d.animated) return;
                r = d.getBoundingClientRect();
              }
              b(o), k(w, g, s, e, d, r) !== !1 && (s.contains(g) || (g.appendChild(s), t = g), this._animate(e, s), d && this._animate(r, d));
            } else if (d && !d.animated && d !== s && void 0 !== d.parentNode[L]) {
              A !== d && (A = d, B = h(d), C = h(d.parentNode));
              var q,
              r = d.getBoundingClientRect(),
              y = r.right - r.left,
              z = r.bottom - r.top,
              D = /left|right|inline/.test(B.cssFloat + B.display) || "flex" == C.display && 0 === C["flex-direction"].indexOf("row"),
              E = d.offsetWidth > s.offsetWidth,
              G = d.offsetHeight > s.offsetHeight,
              H = (D ? (a.clientX - r.left) / y : (a.clientY - r.top) / z) > .5,
              J = d.nextElementSibling,
              K = k(w, g, s, e, d, r);
              if (K !== !1) {
                if ((R = !0, setTimeout(m, 30), b(o), 1 === K || -1 === K)) q = 1 === K; else if (D) {
                  var M = s.offsetTop,
                  N = d.offsetTop;
                  q = M === N ? d.previousElementSibling === s && !E || H && E : N > M;
                } else q = J !== s && !G || H && G;
                s.contains(g) || (q && !J ? g.appendChild(s) : d.parentNode.insertBefore(s, q ? J : d)), t = s.parentNode, this._animate(e, s), this._animate(r, d);
              }
            }
          }
        }, _animate: function _animate(a, b) {
          var c = this.options.animation;
          if (c) {
            var d = b.getBoundingClientRect();
            h(b, "transition", "none"), h(b, "transform", "translate3d(" + (a.left - d.left) + "px," + (a.top - d.top) + "px,0)"), b.offsetWidth, h(b, "transition", "all " + c + "ms"), h(b, "transform", "translate3d(0,0,0)"), clearTimeout(b.animated), b.animated = setTimeout(function () {
              h(b, "transition", ""), h(b, "transform", ""), b.animated = !1;
            }, c);
          }
        }, _offUpEvents: function _offUpEvents() {
          var a = this.el.ownerDocument;
          f(N, "touchmove", this._onTouchMove), f(a, "mouseup", this._onDrop), f(a, "touchend", this._onDrop), f(a, "touchcancel", this._onDrop);
        }, _onDrop: function _onDrop(b) {
          var c = this.el,
          d = this.options;
          clearInterval(this._loopId), clearInterval(J.pid), clearTimeout(this._dragStartTimer), f(N, "mousemove", this._onTouchMove), this.nativeDraggable && (f(N, "drop", this), f(c, "dragstart", this._onDragStart)), this._offUpEvents(), b && (I && (b.preventDefault(), !d.dropBubble && b.stopPropagation()), u && u.parentNode.removeChild(u), s && (this.nativeDraggable && f(s, "dragend", this), l(s), g(s, this.options.ghostClass, !1), g(s, this.options.chosenClass, !1), w !== t ? (E = p(s), E >= 0 && (j(null, t, "sort", s, w, D, E), j(this, w, "sort", s, w, D, E), j(null, t, "add", s, w, D, E), j(this, w, "remove", s, w, D, E))) : (v && v.parentNode.removeChild(v), s.nextSibling !== x && (E = p(s), E >= 0 && (j(this, w, "update", s, w, D, E), j(this, w, "sort", s, w, D, E)))), a.active && ((null === E || -1 === E) && (E = D), j(this, w, "end", s, w, D, E), this.save())), w = s = t = u = x = v = y = z = G = H = I = E = A = B = F = a.active = null);
        }, handleEvent: function handleEvent(a) {
          var b = a.type;
          "dragover" === b || "dragenter" === b ? s && (this._onDragOver(a), d(a)) : ("drop" === b || "dragend" === b) && this._onDrop(a);
        }, toArray: function toArray() {
          for (var a, b = [], d = this.el.children, e = 0, f = d.length, g = this.options; f > e; e++) a = d[e], c(a, g.draggable, this.el) && b.push(a.getAttribute(g.dataIdAttr) || o(a));
          return b;
        }, sort: function sort(a) {
          var b = {},
          d = this.el;
          this.toArray().forEach(function (a, e) {
            var f = d.children[e];
            c(f, this.options.draggable, d) && (b[a] = f);
          }, this), a.forEach(function (a) {
            b[a] && (d.removeChild(b[a]), d.appendChild(b[a]));
          });
        }, save: function save() {
          var a = this.options.store;
          a && a.set(this);
        }, closest: function closest(a, b) {
          return c(a, b || this.options.draggable, this.el);
        }, option: function option(a, b) {
          var c = this.options;
          return void 0 === b ? c[a] : (c[a] = b, void ("group" === a && V(c)));
        }, destroy: function destroy() {
          var a = this.el;
          a[L] = null, f(a, "mousedown", this._onTapStart), f(a, "touchstart", this._onTapStart), this.nativeDraggable && (f(a, "dragover", this), f(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function (a) {
            a.removeAttribute("draggable");
          }), T.splice(T.indexOf(this._onDragOver), 1), this._onDrop(), this.el = a = null;
        }
      }, a.utils = {
        on: e, off: f, css: h, find: i, is: function is(a, b) {
          return !!c(a, b, a);
        }, extend: r, throttle: q, closest: c, toggleClass: g, index: p
      }, a.create = function (b, c) {
        return new a(b, c);
      }, a.version = "1.4.2", a;
    });

    /***/
  },
  /* 269 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, _OKConfig) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(270);
      var stateMixin = __webpack_require__(216);

      var SearchTagPanel = React.createClass({
        displayName: 'SearchTagPanel',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            'switch': false,
            tags: _models.TagModel.getLocalTags()
          };
        },

        /**
         * 更新标签
         *
         * @return {[type]} [description]
         */
        updateTags: function updateTags() {
          if (this.isMounted()) {
            var tags = _models.TagModel.getLocalTags();

            this._setState({
              tags: tags
            });
          }
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          //搜索面板滚到最下面的时候禁止往下滚动，滚动到最上面的时候禁止继续往上滚
          _utils.Ui.preventOverscroll(".search-tag-panel");

          //刷新标签
          _utils.WindowMessager.listenGlobalEvent('tags-changed', function (tags) {
            _this.updateTags();
          });

          //监听搜索面板滚动事件
          $(".search-tag-panel").on("scroll", function () {

            $(".search-tag-panel").removeClass(_OKConfig.no_scroll_state_class);

            if (_this.constructor.hoverTimer) clearTimeout(_this.constructor.hoverTimer);
            _this.constructor.hoverTimer = setTimeout(function () {
              $(".search-tag-panel").addClass(_OKConfig.no_scroll_state_class);
            }, 400);
          });
        },

        'switch': function _switch(event) {
          if (event) event.preventDefault();

          this._setState({
            switchOp: !this.state['switch']
          });
        },

        //进入编辑模式
        editTags: function editTags() {
          this._setState({
            editing: true
          });
        },

        //完成编辑
        finishEdit: function finishEdit() {
          this._setState({
            editing: false
          });
        },

        componentWillUnmount: function componentWillUnmount() {
          //停止监听刷新标签
          // WindowMessager.stopListenGlobalEvent('tags-changed');

          _utils.Ui.stopPreventOverScroll(".search-tag-panel");

          //监听搜索面板滚动事件
          $(".search-tag-panel").off("scroll");
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = SearchTagPanel;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(163)))

    /***/
  },
  /* 270 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, React) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _components = __webpack_require__(159);

      var RenderMixin = {
        _render: function _render() {
          var _this = this;
          var classNames = "search-tag-panel hover";

          if (this.state.editing) {
            classNames += " editing";
          }

          var tagsJSX = "";

          //数据源
          var tags = this.state.tags || [];
          //搜索标签结果
          var search_results = this.state.search_results || [];
          var tagClass = "tag-item ";

          var taglistJSX = null;

          //标签搜索结果展示
          if (search_results.length > 0) {

            tagsJSX = search_results.map(function (tag) {
              //当搜索垃圾桶时特别处理，前面有一个垃圾桶的小图标
              if (tag.gtid == _OKConfig.TRASHBIN_ID) {

                return React.createElement(
                'li',
                {className: 'active'},
                React.createElement(
                'a',
                {href: '#', className: 'tag default', 'data-gtid': _OKConfig.TRASHBIN_ID},
                React.createElement('span', {className: 'fp-icon-font fp-ext-del'}),
                _OKConfig.TRASHBIN_NAME
                )
                );
              } else if (search_results[0]) {
                //重新渲染的时候，默认第一条加上active类

                tagClass += "active";
                return React.createElement(
                'li',
                {className: tagClass, key: tag.gtid, 'data-tid': tag.gtid, tag: tag},
                React.createElement(_components.Tag, {tag: tag, clickHandler: null, editing: _this.state.editing})
                );
              } else {

                return React.createElement(
                'li',
                {className: tagClass, key: tag.gtid, 'data-tid': tag.gtid, tag: tag},
                React.createElement(_components.Tag, {tag: tag, clickHandler: null, editing: _this.state.editing})
                );
              }
            });

            taglistJSX = React.createElement(
            'ul',
            null,
            tagsJSX
            );

            //所有标签展示
          } else if (tags.length >= 0) {

            //自定义标签
            tagsJSX = tags.map(function (tag) {
              if (tag) {
                return React.createElement(
                'li',
                {className: tagClass, key: tag.gtid, 'data-tid': tag.gtid, tag: tag},
                React.createElement(_components.Tag, {tag: tag, clickHandler: null, editing: _this.state.editing})
                );
              }
            });

            var dividerJSX = tags.length == 0 ? null : React.createElement('div', {className: 'divider'});
            var operationJSX = !this.state.editing ? React.createElement(
            'a',
            {href: '#', className: 'edit-tags operation', onClick: this.editTags},
            '管理分类'
            ) : React.createElement(
            'a',
            {href: '#', className: 'finish-edit operation', onClick: this.finishEdit},
            '完成'
            );

            taglistJSX = React.createElement(
            'ul',
            null,
            React.createElement(
            'li',
            null,
            React.createElement(
            'a',
            {href: '#', className: 'tag default', 'data-gtid': '0'},
            '#',
            _OKConfig.ALL_TAG_NAME
            ),
            operationJSX
            ),
            React.createElement(
            'li',
            null,
            React.createElement(
            'a',
            {href: '#', className: 'tag default', 'data-gtid': _OKConfig.NO_TAG_ID},
            '#',
            _OKConfig.NO_TAG_NAME
            )
            ),
            React.createElement('div', {className: 'divider'}),
            tagsJSX,
            dividerJSX,
            React.createElement(
            'li',
            null,
            React.createElement(
            'a',
            {href: '#', className: 'tag default', 'data-gtid': _OKConfig.TRASHBIN_ID},
            React.createElement('span', {className: 'fp-icon-font fp-ext-del'}),
            _OKConfig.TRASHBIN_NAME
            )
            )
            );
          }

          return React.createElement(
          'div',
          {className: classNames},
          taglistJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* <a href="#" data-gtid={tag.gtid}>{"#"+tag.tname}</a> */
      /* <a href="#" data-gtid={tag.gtid}>{"#"+tag.tname}</a> */
      /* <a href="#" data-gtid={tag.gtid}>{"#"+tag.tname}</a> */
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(147)))

    /***/
  },
  /* 271 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM, _OKConfig) {
      /**
       *  单条贴纸
       */
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var _components = __webpack_require__(159);

      var RenderMixin = __webpack_require__(272);
      var stateMixin = __webpack_require__(216);

      var Tag = React.createClass({
        displayName: 'Tag',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            tag: this.props.tag
          };
        },

        componentWillUnmount: function componentWillUnmount() {
          //取消监听事件
          $(ReactDOM.findDOMNode(this)).off("mousedown.nofocus");

          $(ReactDOM.findDOMNode(this)).off("click.operate");

          //监听标签名字的更改输入
          $(ReactDOM.findDOMNode(this)).off("keydown.save");
        },

        toggleCheck: function toggleCheck() {
          // 添加一个标记类
          $(ReactDOM.findDOMNode(this)).closest(".note-tag-panel").addClass("tag-change");

          if (this.props.checked) {
            this.props.removeTag(this.state.tag.gtid);
          } else {
            this.props.addTag(this.state.tag.gtid);
          }
        },

        componentDidMount: function componentDidMount() {

          // $(ReactDOM.findDOMNode(this)).on("mousedown.nofocus",".operations a",function(event){
          //     event.preventDefault();
          // });

          var _this = this;

          $(ReactDOM.findDOMNode(this)).on("click.operate", ".operations a.remove", function (event) {
            $(this).closest("ul").find(".tag-wrap").removeClass("ready-remove");
            $(this).closest(".tag-wrap").addClass("ready-remove");
          });

          //监听标签名字的更改输入
          $(ReactDOM.findDOMNode(this)).on("keydown.save", "input", function (event) {
            //回车保存
            if (event.keyCode == 13) {
              _this.onBlur(event);
            }
          });
        },

        handleInput: function handleInput(props) {
          var $input = $("input", ReactDOM.findDOMNode(this));
          var tname = $input.val();

          //标签名称改变
          if (tname != this.state.tag.tname) {
            this._setState({

              readyRemove: false
            });

            //还原
          } else {
            this._setState({
              changed: false
            });
          }
        },

        //聚焦
        onFocus: function onFocus(event) {
          this._setState({
            focused: true,
            readyRemove: false
          });

          // 当标签进入编辑状态的时候隐藏关闭按钮
          $(ReactDOM.findDOMNode(this)).closest("ul").find(".tag-wrap").removeClass("ready-remove");
        },

        //失焦
        onBlur: function onBlur(event) {
          this.onSave(event);

          this._setState({
            focused: false
          });
        },

        //删除标签
        onRemove: function onRemove(event) {
          event.preventDefault();
          //给出确认删除ui
          this._setState({
            readyRemove: true
          });
        },

        //确认删除
        onConfirmRemove: function onConfirmRemove(event) {
          event.preventDefault();
          _models.TagModel.deleteTag(this.state.tag.gtid);

          //打开对应标签
          if (this.state.tag.gtid == _components.NoteList._currentGtid) {
            _utils.WindowMessager.notifyCurrentPage("switch-tag", _OKConfig.ALL_TAG_ID);
          }
        },

        //保存标签
        onSave: function onSave(event) {
          event.preventDefault();
          var $input = $("input", ReactDOM.findDOMNode(this));
          var tname = $input.val();
          tname = $.trim(tname);

          //如果标签名没变
          if (tname == this.state.tag.tname) {
            $input.blur();
            return;
          }

          //不能为空
          if (!tname) {
            _utils.NotificationUtil.showMessage("分类名不能为空", "error");
            return;
          }

          //标签名已经存在
          if (_models.TagModel.isTnameExist(tname)) {
            _utils.NotificationUtil.showMessage("已存在此分类", "error");
            $input.focus();
            return;
          }

          var errno = _models.TagModel.isTnameValid(tname);
          if (errno == -1) {
            _utils.NotificationUtil.showMessage("分类名不合要求", "error");
            $input.focus();
          } else if (errno == -2) {
            _utils.NotificationUtil.showMessage("分类名长度超限", "error");
            $input.focus();
          } else {

            //合法标签名,进行保存
            _models.TagModel.renameTag(this.state.tag.gtid, tname);

            _utils.NotificationUtil.showMessage("修改成功", "success");

            this._setState({
              changed: false
            });
          }
        },

        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
          if (nextState.tag && nextState.tag.version > this.state.tag.version) {
            return true;
          }

          //将更新过的prop给state
          if (nextProps.tag && nextProps.tag.version > this.state.tag.version) {
            this._setState({
              tag: nextProps.tag
            });
            return false;
          }

          //其他状态
          for (var prop in nextState) {
            if (typeof this.state[prop] != 'object' && this.state[prop] != nextState[prop]) {
              return true;
            }
          }

          for (var prop in nextProps) {
            if (typeof this.props[prop] != 'object' && this.props[prop] != nextProps[prop]) {
              return true;
            }
          }

          return false;
        },

        render: function render() {
          return this._render();
        }

      });

      exports['default'] = Tag;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1), __webpack_require__(163)))

    /***/
  },
  /* 272 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  单条贴纸
       */

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      // import {} from 'components';

      var RenderMixin = {
        _render: function _render() {

          var wrapClass = "tag-wrap ";
          var classNames = "tag ";
          var tag = this.state.tag;
          var displayName = "#" + tag.tname;

          classNames += this.props.checked ? "checked" : "";
          var clickHandler = this.toggleCheck;

          //如果有设置clickHandler
          if (this.props.hasOwnProperty("clickHandler")) {
            clickHandler = this.props.clickHandler;
          }

          //focus
          //readyRemove

          var tagJSX = null;
          if (this.props.editing) {
            var operationJSX = null;

            wrapClass += this.state.focused ? "editing" : "";

            tagJSX = React.createElement(
            "div",
            {className: "edit-wrap"},
            React.createElement("input", {
              ref: "tname",
              defaultValue: tag.tname,
              onInput: this.handleInput,
              onFocus: this.onFocus,
              onBlur: this.onBlur
            }),
            React.createElement(
            "div",
            {className: "operations"},
            React.createElement(
            "a",
            {href: "#", className: "confirm", onClick: this.onConfirmRemove},
            "删除"
            ),
            React.createElement(
            "a",
            {href: "#", className: "remove", onClick: this.onRemove},
            React.createElement("span", {className: "fp-ext-del"})
            )
            )
            );

            displayName = "#";
          }
          // else{
          //     tagJSX = (<a href="#" onClick={clickHandler} data-gtid={tag.gtid}>{displayName}</a>);
          // }

          return React.createElement(
          "div",
          {className: wrapClass},
          React.createElement(
          "a",
          {className: classNames, href: "#", onClick: clickHandler, "data-gtid": tag.gtid},
          displayName
          ),
          tagJSX
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 273 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $, ReactDOM) {
      /**
       *  顶部登录菜单组件
       */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(274);
      var stateMixin = __webpack_require__(216);

      var CreateTag = React.createClass({
        displayName: 'CreateTag',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {

          return {
            active: false
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;
          // 创建标签 监听input输入框事件
          var $input = $(ReactDOM.findDOMNode(this)).find(".tag-input");
          $($input).on("input", function () {
            if ($input.val() != "") {
              _this._setState({
                active: true
              });
            } else {
              _this._setState({
                active: false
              });
            }
          }),

          // 监听键盘回车事件创建标签
          $($input).on("keyup", function (event) {
            if (event.keyCode == '13') {
              _this.create();
            }
          });
        },

        saveBtn: function saveBtn() {
        },

        //保存笔记,tags需加上当前打开的标签(非全部或者垃圾桶或无标签),
        create: function create(event) {
          if (event) event.preventDefault();

          //得到tname
          var tname = this.getTname();

          //存在会返回标签模型
          var $input = $(ReactDOM.findDOMNode(this)).find('.tag-input');

          var data = _models.TagModel.isTnameValid(tname);

          if (data == -1) {
            _utils.NotificationUtil.showMessage("分类名不合要求", "error");
            $input.focus();
          } else if (data == -2) {
            _utils.NotificationUtil.showMessage("分类名长度超限", "error");
            $input.focus();
          } else if (_models.TagModel.isTnameExist(tname)) {
            _utils.NotificationUtil.showMessage("已存在此分类", "error");
            $input.focus();
          } else {

            // 创建成功
            var newTag = _models.TagModel.createTag(tname);
            _utils.NotificationUtil.showMessage("标签创建成功");

            // 添加一个标记类
            $(ReactDOM.findDOMNode(this)).closest(".note-tag-panel").addClass("tag-change");

            // 创建成功后直接给该贴纸填加上该标签
            this.props.addTag(newTag.gtid);
            // var newNote = NoteModel.addTag(this.props.note,newTag.gtid);
            // WindowMessager.notifyTabs('data-changed',{type: 'update', notes: [newNote]});

            // 更新标签面板数据
            this.props.updateTags();
            $input.focus().val("");

            this._setState({
              active: false
            });
          }
        },

        //得到输入框中的内容
        getTname: function getTname() {
          var tname = $(ReactDOM.findDOMNode(this)).find('.tag-input').val();
          tname = this.formatTname(tname);

          return tname;
        },

        // 格式化标签名字
        formatTname: function formatTname(tname) {
          return tname;
        },

        //监听键盘输入
        handleKeydown: function handleKeydown(event) {
          if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
            //ctrl + s 阻止默认事件
            event.preventDefault();
            //保存内容
          }
        },

        // 第一次添加标签
        addFirst: function addFirst() {
          var methods = $(ReactDOM.findDOMNode(this));
          var inputEle = methods.find(".tag-input");
          var add = methods.find(".fp-ext-add-small");
          $(inputEle).removeClass('dn');
          $(inputEle).focus();
          $(add).addClass('dn');
        },

        // 输入框失去焦点
        outFocus: function outFocus() {
          var methods = $(ReactDOM.findDOMNode(this));
          var inputEle = methods.find(".tag-input");
          if ($(inputEle).val() == "") {
            var add = methods.find(".fp-ext-add-small");
            $(inputEle).addClass('dn');
            $(inputEle).blur();
            $(add).removeClass('dn');
          }
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = CreateTag;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161), __webpack_require__(1)))

    /***/
  },
  /* 274 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React) {
      /**
       *  顶部登录菜单组件
       */
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(166);

      var RenderMixin = {
        _render: function _render() {

          var classNames = "create-tag ";

          var createJSX = this.state.active ? React.createElement("span", {
            onClick: this.create,
            className: "icon-font fp-ext-success"
          }) : null;

          return React.createElement(
          "div",
          {className: classNames},
          React.createElement(
          "div",
          {className: "input-content", onClick: this.addFirst},
          React.createElement("input", {
            className: "tag-input dn",
            type: "text",
            placeholder: _utils.LocaleUtil.translate("classification_name"),
            onBlur: this.outFocus
          }),
          React.createElement("span", {className: "icon-font fp-ext-add-small"}),
          createJSX
          )
          );
        }
      };

      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147)))

    /***/
  },
  /* 275 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, _OKConfig, $) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _models = __webpack_require__(168);

      var RenderMixin = __webpack_require__(276);
      var stateMixin = __webpack_require__(216);

      var TagTitle = React.createClass({
        displayName: 'TagTitle',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          var lastGtid = _models.NoteModel.getLastAccessTag();
          var tag = _models.TagModel.getTagByGtid(lastGtid);

          return {
            tag: tag
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          //切换标签
          _utils.WindowMessager.listenPageEvent("switch-tag", function (gtid) {
            var tag = null;

            //系统标签/用户自定义标签
            if (gtid < 0 || !!gtid) {
              tag = _models.TagModel.getTagByGtid(gtid);

              //全部
            } else {
              tag = _models.TagModel.getTagByGtid(_OKConfig.ALL_TAG_ID);
            }

            if (tag) {
              _this._setState({
                tag: tag
              });
            }
          });

          //监听收拉取，如果当前标签有属性变化，则更新
          _utils.WindowMessager.listenGlobalEvent('tags-changed', function (tags) {
            $(tags).each(function () {
              if (this.gtid == _this.state.tag.gtid) {
                _this._setState({
                  tag: this
                });

                return false;
              }
            });
          });
        },

        clearTrash: function clearTrash() {

          _utils.NotificationUtil.popupDialog({
            title: "清空回收站",
            content: "清空后不可恢复,您确定要清空回收站么?",
            callback: function callback() {
              _models.NoteModel.clearTrash();

              //通知清空界面数据
              _utils.WindowMessager.notifyTabs("clear-notes", _OKConfig.TRASHBIN_ID);

              //关闭
              _utils.NotificationUtil.closeDialog();
            }
          });
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = TagTitle;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(163), __webpack_require__(161)))

    /***/
  },
  /* 276 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (_OKConfig, React) {/*
	*  单条贴纸操作菜单
	*/

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var RenderMixin = {
        _render: function _render() {

          var clearAllJSX = null;

          //一键清除垃圾桶的按钮
          if (this.state.tag.gtid == _OKConfig.TRASHBIN_ID) {
            clearAllJSX = React.createElement(
            "a",
            {className: "clear-all", onClick: this.clearTrash},
            "清空"
            );
          }

          return React.createElement(
          "div",
          {className: "tag_title"},
          React.createElement(
          "h1",
          {className: "search-title"},
          "搜索"
          ),
          React.createElement(
          "h1",
          null,
          this.state.tag.tname
          ),
          React.createElement(
          "span",
          null,
          (this.state.tag.notes_num || 0) + "条"
          ),
          clearAllJSX
          );
        }
      };
      exports["default"] = RenderMixin;
      module.exports = exports["default"];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(163), __webpack_require__(147)))

    /***/
  },
  /* 277 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (React, $) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _models = __webpack_require__(168);

      var _utils = __webpack_require__(166);

      var RenderMixin = __webpack_require__(278);
      var stateMixin = __webpack_require__(216);

      var HistorySearchPanel = React.createClass({
        displayName: 'HistorySearchPanel',

        mixins: [RenderMixin, stateMixin],

        getInitialState: function getInitialState() {
          return {
            notes: _models.JStoreKVDB.index(), // 本地所有的缓存数据
            notesDate: null, // 最终给jsx渲染的数据
            historyOpen: false // 默认历史搜索面板不展示
          };
        },

        componentDidMount: function componentDidMount() {
          var _this = this;

          // 定义一个常量，标识历史记录总共显示多少条
          var len = 10;

          _this._setState({
            notes: _this.filterDate()
          });

          // 监听input的输入事件 当第一个输入不为#号时
          $('#keywords_field').on('input', function () {

            var input_value = $("#keywords_field").val();

            if (input_value.indexOf('#') != 0) {

              // 进入搜索历史贴纸状态
              _this.openHistorySearchPanel();

              // 当搜索框为空时
              if (input_value.trim().length == 0) {
                _this.closeHistorySearchPanel();
              }
              ;

              // 更新本地的缓存
              var history_notes = _this.state.notes;

              var arr = []; // 用来存历史记录数据

              // 复制一份数组，倒序输出，越后面记录的越先显示
              var copyArr;

              copyArr = history_notes.concat();

              copyArr = copyArr.reverse();

              $.map(copyArr, function (key, index) {
                var value = _models.JStoreKVDB.get(key);
                if (index < len) {
                  arr.push(value);
                } else {
                  return false;
                }
              });

              // 把筛选出来的数据存起来
              _this._setState({
                notesDate: arr
              });

              // 为了避免既存在即输入又有active存在的情况，当输入的时候，active取消
              var $panel = $('.search-tag-panel');
              $panel.find('li').removeClass('active');
            }
          });

          var searchDom = $("#search").get(0);

          //模拟失焦
          $(document).on("mousedown.fakeblur-tags", function (event) {
            var target = event.target;
            //历史搜索 为展开状态，但是点击的地方又不是
            if (_this.state.historyOpen) {
              if (!$.contains(searchDom, target)) {
                _this.closeHistorySearchPanel();
              }
            }
            ;
          });

          //窗口失焦的时候 历史贴纸搜索面板
          _utils.WindowMessager.listenPageEvent("window-blur", function () {
            _this.closeHistorySearchPanel();
          });

          // 点击搜索历史记录的数据
          $('#search').on('click', '.search-tag-panel a.history-note', function () {
            var keywords = $(this).text();
            _this.closeHistorySearchPanel();
            $("#keywords_field").blur();
            $("#keywords_field").val(keywords);
            $('form').trigger('submit');
          });

          // 回车搜索
          $("#keywords_field").on("keydown", function (event) {
            var $panel = $('.search-tag-panel');

            if (event.keyCode == '13') {
              // 当标签有active类和搜索框不以#号开头时
              if ($panel.find('li').hasClass('active') && $("#keywords_field").val().indexOf("#") != 0) {

                var ele = $panel.find("li.active")[0];

                // 搜索历史记录
                var keywords = $(ele).text();

                $("#keywords_field").val(keywords);

                _this.closeHistorySearchPanel();
              }
            }
          });

          // 搜索提交
          $('form').submit(function (event) {
            event.preventDefault();
            var keywords = $("#keywords_field").val();
            // 把关键字存入本地，用来历史搜索展示用
            if (keywords.indexOf('#') == -1) {
              // 在key前面加上标识history，方便取本地的数据
              var key = 'history-' + keywords;
              var value = keywords;
              // 排重，保留最新的数据
              if (_models.JStoreKVDB.storageAvailable()) {
                var total = _models.JStoreKVDB.index();
                $.map(total, function (val, index) {
                  if (key == val) {
                    _models.JStoreKVDB.deleteKey(val);
                  }
                });
              }
              ;
              _models.JStoreKVDB.set(key, value);

              // 更新取到的数据
              _this._setState({
                notes: _models.JStoreKVDB.index()
              });
            }
            ;

            _this.closeHistorySearchPanel();
            if (keywords) _utils.WindowMessager.notifyCurrentPage("search", keywords);
          });
        },

        // 打开历史搜索面板
        openHistorySearchPanel: function openHistorySearchPanel() {
          if (!this.state.historyOpen) {
            this._setState({
              historyOpen: true,
              notes: this.filterDate()
            });
          }
          ;
        },

        // 关闭历史搜索贴纸面板
        closeHistorySearchPanel: function closeHistorySearchPanel() {
          this._setState({
            historyOpen: false
          });
        },

        // 从本地数据中刷选出要用的数据
        filterDate: function filterDate() {
          //得到所有存在localstroge的数据
          var all = this.state.notes;
          var arr = [];
          $.each(all, function () {
            var val = this;
            var flag = val.indexOf('history-') != -1;
            if (flag) {
              // 把需要的数据重新组装成一个数组
              arr.push(val);
            }
            ;
          });

          return arr;
        },

        render: function render() {
          return this._render();
        }
      });

      exports['default'] = HistorySearchPanel;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(147), __webpack_require__(161)))

    /***/
  },
  /* 278 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, React) {/*
	*  单条贴纸操作菜单
	*/

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _utils = __webpack_require__(166);

      var _components = __webpack_require__(159);

      var _models = __webpack_require__(168);

      var RenderMixin = {
        _render: function _render() {
          var _this = this;

          var classNames = "search-tag-panel history-panel";

          // 判断历史搜索面板是否出现
          var historyOpen = this.state.historyOpen;

          // 最终渲染在界面上的数据
          var history_notes = this.state.notesDate;

          var tagsJSX = null;

          if (history_notes && history_notes.length > 0) {
            tagsJSX = $.map(history_notes, function (key, index) {
              return React.createElement(
              'li',
              {key: key},
              React.createElement(
              'a',
              {href: '#', className: 'history-note'},
              key
              )
              );
            });
          }
          ;

          var taglistJSX = null;

          var titleJSX = React.createElement(
          'p',
          {className: 'search-history'},
          React.createElement(
          'span',
          null,
          '历史搜索'
          )
          );

          taglistJSX = historyOpen && tagsJSX ? React.createElement(
          'ul',
          null,
          titleJSX,
          tagsJSX
          ) : null;

          return React.createElement(
          'div',
          {className: classNames},
          taglistJSX
          );
        }
      };

      exports['default'] = RenderMixin;
      module.exports = exports['default'];
      /* WEBPACK VAR INJECTION */
    }.call(exports, __webpack_require__(161), __webpack_require__(147)))

    /***/
  },
  /* 279 */,
  /* 280 */
  /***/ function (module, exports, __webpack_require__) {

    /**
     *  数据操作中心,
     *  对数据进行更新,本地远程
     *  得到服务器数据更新
     */

    'use strict';

    var _utils = __webpack_require__(166);

    var OKClientApp = function OKClientApp() {
      this.init();
    };

    OKClientApp.prototype = {

      //初始化
      init: function init() {

        //初始化环境
        _utils.EnvUtil.initENV();

        // this.listenLoginStatus();

        //由于用户登录信息是在此文件执行后才得到,
        //所以在得到认证信息之前先用本地的登录信息代替
        // this.getLocalLoginStatus();

        //监听扩展的事件
        _utils.ExtUtil.setExtBindings();

        //开始记录失败的数据发送
        // AjaxUtil.recordFailedAjax();

        //恢复上次记录的失败(没有complete)的数据发送
        // AjaxUtil.resumePausedAjax();
      }

    };

    // listenLoginStatus: function(){
    //     var _this = this;

    //     //监听用户资料的变化，当用户切换的时候做相应处理
    //     LocalKVDB.listenKeyChange("profile",function(key,operation){
    //         var profile = LocalKVDB.get("profile",null);

    //         if (profile) {
    //             _this.getLocalLoginStatus();

    //         }
    //     });
    // },

    // getLocalLoginStatus: function(){
    //     var user = UserModel.getLocalUser();

    //     AppModel._loggedIn = user && user.logged_in == 1;

    //     if (user.logged_in == 1) {

    //         //如果是临时用户，做上标记
    //         if (user.isTmp) {
    //             $("body").addClass("tmp-user");
    //         }

    //         $("body").addClass("logged-in");

    //     } else if (user.logged_in == 0) {
    //         $("body").removeClass("logged-in");
    //         $("body").addClass("tmp-user");
    //     }
    // },

    var Initor = new OKClientApp();

    module.exports = Initor;

    /***/
  },
  /* 281 */
  /***/ function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/
  },
  /* 282 */,
  /* 283 */,
  /* 284 */,
  /* 285 */,
  /* 286 */,
  /* 287 */,
  /* 288 */,
  /* 289 */,
  /* 290 */,
  /* 291 */,
  /* 292 */,
  /* 293 */,
  /* 294 */,
  /* 295 */,
  /* 296 */,
  /* 297 */,
  /* 298 */,
  /* 299 */,
  /* 300 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_OKConfig"] = __webpack_require__(163);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 301 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["_$"] = __webpack_require__(161);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 302 */
  /***/ function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (global) {
      module.exports = global["jQuery"] = __webpack_require__(161);
      /* WEBPACK VAR INJECTION */
    }.call(exports, (function () {
      return this;
    }())))

    /***/
  },
  /* 303 */
  /***/ function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + "load.js";

    /***/
  },
  /* 304 */
  /***/ function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + "jstorage.min.js";

    /***/
  },
  /* 305 */
  /***/ function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + "analytic.js";

    /***/
  },
  /* 306 */
  /***/ function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + "extension.html";

    /***/
  }
]);