angular.module('demoApp', ['angularGrid', 'ngAnimate', 'ngDragDrop', 'ngMaterial', 'angular-click-outside'])
    .service('imageService', [

        function () {
            this.images = [         {
                    width: 204,
                    height: 500,
                    url: 'images/asparagus.png',
                    title: 'Asparagus',
                    likes: 432,
                    watch: 124
            },
                {
                    width: 500,
                    height: 377,
                    url: 'images/bob_evans_mashed_potatoes.png',
                    title: 'Bob Evans Original Mashed Potatoes',
                    likes: 532,
                    watch: 124
            },
                {
                    width: 500,
                    height: 415,
                    url: 'images/butternut_large_bread.png',
                    title: 'Butternut Large White Bread',
                    likes: 532,
                    watch: 124
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/charmin_ultra_soft_bath_tissue.png',
                    title: 'Charmin Ultra Soft Bath Tissue',
                    likes: 754,
                    watch: 362
            },
                {
                    width: 331,
                    height: 500,
                    url: 'images/cheetos_crunchy.png',
                    title: 'Cheetos Crunchy Snacks',
                    likes: 362,
                    watch: 542
            },
                {
                    width: 500,
                    height: 474,
                    url: 'images/coke.png',
                    title: 'Coke Classic',
                    likes: 624,
                    watch: 231
            },
                {
                    width: 500,
                    height: 477,
                    url: 'images/diet_coke.png',
                    title: 'Diet Coke',
                    likes: 263,
                    watch: 324
            },
                {
                    width: 358,
                    height: 500,
                    url: 'images/doritos_cool_ranch.png',
                    title: 'Doritos Cool Ranch',
                    likes: 643,
                    watch: 235
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/doritos_nacho.png',
                    title: 'Doritos Nacho Cheese',
                    likes: 642,
                    watch: 215
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/fritos_original.png',
                    title: 'Fritos Original Corn Chips',
                    likes: 347,
                    watch: 234
            },
                {
                    width: 321,
                    height: 500,
                    url: 'images/fritos_scoops.png',
                    title: 'Fritos Scoops',
                    likes: 460,
                    watch: 432
            },
                {
                    width: 305,
                    height: 500,
                    url: 'images/hellmans_mayonnaise.png',
                    title: 'Hellmann\'s Real Mayonnaise',
                    likes: 236,
                    watch: 324
            },
                {
                    width: 344,
                    height: 500,
                    url: 'images/honey_nut_cheerios.png',
                    title: 'Honey Nut Cheerios',
                    likes: 104,
                    watch: 503
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/kraft_singles.png',
                    title: 'Kraft American Singles',
                    likes: 621,
                    watch: 643
            },
                {
                    width: 315,
                    height: 500,
                    url: 'images/kroger_1pct_milk.png',
                    title: 'Kroger 1% Milk',
                    likes: 813,
                    watch: 531
            },
                {
                    width: 319,
                    height: 500,
                    url: 'images/kroger_2pct_milk.png',
                    title: 'Kroger 2% Reduced Fat Milk',
                    likes: 539,
                    watch: 125
            },
                {
                    width: 275,
                    height: 500,
                    url: 'images/kroger_aged_swiss_slices.png',
                    title: 'Kroger Aged Swiss Deli Thin Slices',
                    likes: 531,
                    watch: 151
            },
                {
                    width: 500,
                    height: 494,
                    url: 'images/kroger_american_cheese.png',
                    title: 'Kroger American Cheese Singles',
                    likes: 531,
                    watch: 213
            },
                {
                    width: 217,
                    height: 500,
                    url: 'images/kroger_apple_juice.png',
                    title: 'Kroger Apple Juice',
                    likes: 125,
                    watch: 531
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/kroger_bacon.png',
                    title: 'Kroger Sliced Bacon',
                    likes: 121,
                    watch: 341
            },
                {
                    width: 338,
                    height: 500,
                    url: 'images/kroger_chicken_breasts.png',
                    title: 'Kroger Chicken Breasts',
                    likes: 531,
                    watch: 431
            },
                {
                    width: 285,
                    height: 500,
                    url: 'images/kroger_creamy_peanut_butter.png',
                    title: 'Kroger Creamy Peanut Butter',
                    likes: 421,
                    watch: 352
            },
                {
                    width: 474,
                    height: 500,
                    url: 'images/kroger_low_fat_cottage_cheese.png',
                    title: 'Kroger Low Fat Cottage Cheese',
                    likes: 621,
                    watch: 256
            },
                {
                    width: 362,
                    height: 500,
                    url: 'images/kroger_mild_cheddar_cheese_shredded.png',
                    title: 'Kroger Classic Fancy Shredded Mild Cheddar Cheese',
                    likes: 163,
                    watch: 215
            },
                {
                    width: 357,
                    height: 500,
                    url: 'images/kroger_mozzarella_shredded.png',
                    title: 'Kroger Classic Fancy Shredded Mozzarella Cheese',
                    likes: 723,
                    watch: 163
            },
                {
                    width: 347,
                    height: 500,
                    url: 'images/kroger_oyster_crackers.png',
                    title: 'Kroger Oyster Crackers',
                    likes: 641,
                    watch: 723
            },
                {
                    width: 355,
                    height: 500,
                    url: 'images/kroger_restaurant_style_tortilla_chips.png',
                    title: 'Kroger Restaurant Style Tortilla Chips',
                    likes: 154,
                    watch: 724
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/kroger_sharp_cheddar_cheese_shredded.png',
                    title: 'Kroger Classic Fancy Shredded Sharp Cheddar Cheese',
                    likes: 742,
                    watch: 436
            },
                {
                    width: 475,
                    height: 500,
                    url: 'images/kroger_small_curd_cottage_cheese.png',
                    title: 'Kroger Small Curd Cottage Cheese',
                    likes: 613,
                    watch: 362
            },
                {
                    width: 307,
                    height: 500,
                    url: 'images/kroger_sweetened_tea.png',
                    title: 'Kroger Sweetened Tea',
                    likes: 925,
                    watch: 642
            },
                {
                    width: 324,
                    height: 500,
                    url: 'images/kroger_traditional_white_corn_tortilla_chips.png',
                    title: 'Kroger Traditional White Corn Tortilla Chips',
                    likes: 725,
                    watch: 263
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/kroger_water.png',
                    title: 'Kroger Purified Bottled Drinking Water',
                    likes: 725,
                    watch: 613
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/lays_potato_chips_family_size.png',
                    title: 'Lay\'s Classic Potato Chips',
                    likes: 725,
                    watch: 627
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/lays_wavy.png',
                    title: 'Lay\'s Wavy Original Potato Chips',
                    likes: 234,
                    watch: 723
            },
                {
                    width: 174,
                    height: 500,
                    url: 'images/mountain_dew_2ltr.png',
                    title: 'Mountain Dew',
                    likes: 834,
                    watch: 632
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/private_selection_black_forest_ham.png',
                    title: 'Private Selection Black Forest Ham',
                    likes: 726,
                    watch: 436
            },
                {
                    width: 500,
                    height: 500,
                    url: 'images/private_selection_swiss_cheese.png',
                    title: 'Private Selection Swiss Cheese',
                    likes: 752,
                    watch: 632
            },
                {
                    width: 353,
                    height: 500,
                    url: 'images/tostitos_scoops.png',
                    title: 'Tostitos Scoops',
                    likes: 125,
                    watch: 543
            }
        ];

            //add time on image objects
            this.images.forEach(function (obj) {
                obj.time = Date.now() - Math.ceil(Math.random() * 1000 * 3600 * 24 * 60);
                obj.date = new Date(obj.time).toDateString();
            });

    }])
    .controller('demo', ['$scope', '$rootScope', 'imageService', '$mdMenu', 
        function ($scope, $rootScope, imageService, $mdMenu) {

            var images = imageService.images;
            $scope.images = images.concat([]);
            $scope.searchTxt = "";
            $scope.boolCartOpen = false;
            $scope.boolDragging = false;
            $scope.boolClosingCart = false;
            $scope.boolCartItemDragging = false;
            var startingScrollTop = 0;

            var cartClosedTimer;

            var x = 0,
            velocity = 0,
            moving = false,
            dragInterval = null;

            $scope.$on('cartItemDragStart', function() {
                console.log("cartItemDragStart");
                $scope.boolCartItemDragging = true;
            });
            $scope.$on('cartItemDragStop', function() {
                console.log("cartItemDragStop");
                $scope.boolCartItemDragging = false;
            });

            $scope.toggleCartMenu = function(ctrl, $mdOpenMenu, $event) {
                if($scope.boolCartOpen){
                    $mdMenu.hide()
                    $scope.setCartOpen(false);
                }else{
                    ctrl.openMenu($mdOpenMenu, $event);
                    $scope.setCartOpen(true);
                }
            }

            $scope.setCartOpen = function(boolCartOpen) {
                $scope.boolClosingCart = false;
                if(cartClosedTimer)
                    clearTimeout(cartClosedTimer);
                $scope.boolCartOpen = boolCartOpen;
            }

            $scope.setCartClosedTimeout = function() {
                cartClosedTimer = setTimeout(function() {   
                    if(!$scope.boolDragging)
                        $scope.setCartOpen(false);
                },1000);
            }

            // not working
            //$scope.bodyClick = function($event) {
            //    console.log("bodyClick. $($event.target).attr('class')=",$($event.target).attr('class'));
            //    if($($event.target).length==1 && $($event.target).attr('class') && $($event.target).attr('class').indexOf("cart-item") == -1) {
            //        console.log("calling $mdMenu.hide()");
            //        $mdMenu.hide();
            //    }
            //}

            //apply search and sort method
            $scope.$watch('searchTxt', function (val) {

                val = val.toLowerCase();
                $scope.images = images.filter(function (obj) {
                    return obj.title.toLowerCase().indexOf(val) != -1;
                });
            });

            $scope.setCartItemDragging = function (event, ui, obj) {
                //console.log("setCartItemDragging. index="+obj.index+" dragging="+obj.dragging);

                $scope.boolCartItemDragging = obj.dragging;
                $scope.$apply();
            };

            $scope.setDragging = function (event, ui, obj) {
                $scope.boolCartItemDragging = false;

                startingScrollTop = $('body').scrollTop();
                if(obj.dragging) {

                    $scope.boolDragging = true;
                    $('.grid.ui-draggable-dragging').removeClass("ui-draggable-reverting");

                    $rootScope.$broadcast('dragStart');
                    $scope.setCartOpen(true);
                    $scope.$apply();

                } else {

                    $scope.boolDragging = false;
                    var _this = $('.grid.ui-draggable-dragging');
                        
                    //    _this.css('-webkit-transition-duration','.5s');
                    _this.css('left', ui.offset.left + velocity);
                    _this.css('transform','rotateZ(0)');
                    setTimeout(function()
                    {
                        _this.css('-webkit-transition-duration','');
                        x = _this.css('left');
                    },500);

                    $rootScope.$broadcast('dragEnd');
                    $scope.setCartClosedTimeout();
                    $scope.$apply();
                }
            }

            $scope.onDrag = function (event, ui, obj) {
                velocity = (ui.offset.left - x) * 2;
                ratio = parseInt( velocity * 100 / 360 );
                
                $('.grid.ui-draggable-dragging').css('transform','scale(0.7) rotateZ('+(ratio*2)+'deg)').removeClass("ui-draggable-reverting");
                
                x = ui.offset.left;

                //ui.position.top -= $(this).parent().scrollTop() - startingScrollTop;
            }

            $scope.onMouseUp = function (event) {
                console.log("onMouseUp, event="+event);
                if(event && event.target)
                    $(event.target).addClass("ui-draggable-reverting");
            }

            $scope.sortByLikes = function () {
                $scope.images.sort(function (a, b) {
                    return b.likes - a.likes;
                });
            }

            $scope.sortByWatch = function () {
                $scope.images.sort(function (a, b) {
                    return b.watch - a.watch;
                });
            }

            $scope.sortByTime = function () {
                $scope.images.sort(function (a, b) {
                    return b.time - a.time;
                });
            }

            $scope.angularGridoptions = {
                cssGrid : true,
                refreshOnImgLoad: false,
                gridWidth: 150, //minumum width of a grid, this may increase to take whole space of container
                gutterSize: 20,
//                direction: 'rtol'
            }

 /*           $scope.gridWidth = 300;
            
            setInterval(function () {
                console.log($scope.instance);
                //$scope.angularGridoptions.gridWidth = [250, 400][(Math.floor(Math.random() * 2))];
                $scope.gridWidth = [250, 400][(Math.floor(Math.random() * 2))];
                $scope.$apply();
            }, 3000);*/

    }])
    .controller('CartDrawerCtrl', ['$scope', '$rootScope', '$mdMenu', '$timeout', function ($scope, $rootScope, $mdMenu, $timeout) {
        var originatorEv;
        var ctrl = this;
        ctrl.dragging = false;
        ctrl.dropHover = false;
        ctrl.cart_items = [];
        ctrl.dragging_index = -1;
        ctrl.drop_over_index = -1;

        this.onDrop = function(event, ui) {
            ctrl.dragging = false;
            ctrl.dropHover = false;
            ctrl.dragging_index = -1;
            ctrl.drop_over_index = -1;
            if($(ui.draggable).length=1 && $(ui.draggable) && $(ui.draggable).attr('data-cart-item')==undefined) {
                ctrl.cart_items.push({title:$(ui.draggable).attr('data-title'),url:$(ui.draggable).attr('data-url')});
                console.log("onDrop. added "+$(ui.draggable).attr('data-title')+" to cart");
            } else if(ui && ui.sender) {
                ui.sender.draggable("cancel");
                $scope.$apply();
                console.log("onDrop. reverting");
            }
        }

        this.isCartItemResortMoveDown = function(index) {

            var dragging = ctrl.dragging_index;
            var dragover = ctrl.drop_over_index;
            var moveDown = false;

            if(dragging==-1 || ctrl.drop_over_index==-1 || dragging == dragover)
                moveDown = false;
            else if(dragging > 0 && dragover == 0 && dragging > index)
                moveDown = true;
            else if(dragging > 0 && dragging-1 == index)
                moveDown = true;
            else if(dragging > 0 && dragging > index)
                moveDown = true;

            if(moveDown)
                console.log("isCartItemResortMoveDown. index="+index+" dragging="+dragging+" dragover="+dragover);
            return moveDown;
        }

        this.isCartItemResortMoveUp = function(index) {
            
            var dragging = ctrl.dragging_index;
            var dragover = ctrl.drop_over_index;
            var moveUp = false;

            if(dragging==-1 || ctrl.drop_over_index==-1 || dragging == dragover)
                moveUp = false;
            else if(dragging == 0 && dragging-1 == index)
                moveUp = true;
            else if(dragging == 0 && dragging+1 < index)
                moveUp = true;
            //else if(dragging > 0 && dragging < index)
            //    moveUp = true;

            if(moveUp)
                console.log("isCartItemResortMoveUp. index="+index+" dragging="+dragging+" dragover="+dragover);
            return moveUp;
        }

        this.onDropReSortOver = function(event, ui, obj) {
            console.log("onDropReSortOver. obj.index="+obj.index);
            ctrl.drop_over_index = obj.index;
            $scope.$apply();
        }

        this.onDropReSortOut = function(event, ui, obj) {
            console.log("onDropReSortOut. obj.index="+obj.index);
            ctrl.drop_over_index = -1;
            $scope.$apply();
        }

        this.onDropRemoveOver = function(event, ui) {
            ctrl.dropHover = true;
            $scope.$apply();
        }

        this.onDropRemoveOut = function(event, ui) {
            ctrl.dropHover = false;
            $scope.$apply();
        }

        this.onDropRemove = function(event, ui) {
            console.log("onDropRemove start. $(ui.draggable).attr('data-cart-item')="+$(ui.draggable).attr('data-cart-item')+" removing "+$(ui.draggable).attr('data-title')+". ctrl.cart_items="+JSON.stringify(ctrl.cart_items));
            ctrl.dropHover = false;
            ctrl.dragging = false;
            ctrl.drop_over_index = -1;
            ctrl.dragging_index = -1;
            if(ui && $(ui.draggable).attr('data-cart-item')!=undefined && $(ui.draggable).attr('data-index')!=undefined) {
                var i = parseInt($(ui.draggable).attr('data-index'));
                console.log("splicing cart_items at position "+i);
                ctrl.cart_items.splice(i,1);
            }
            $scope.$apply();
            console.log("onDropRemove done. ctrl.cart_items="+JSON.stringify(ctrl.cart_items));
            event.stopPropagation();
            event.preventDefault();
        }

        this.setCartItemDragStart = function (event, ui, obj) {
            console.log("setCartItemDragStart. index="+obj.index);
            ctrl.dragging_index = obj.index;
            $rootScope.$broadcast('cartItemDragStart');
            $scope.$apply();
        };

        this.setCartItemDragStop = function (event, ui, obj) {
            console.log("setCartItemDragStop");
            ctrl.dragging_index = -1;
            $rootScope.$broadcast('cartItemDragStop');
            $scope.$apply();
        };


        $scope.$on('dragStart', function() {
            console.log("dragStart");
            ctrl.dragging = true;
            $scope.$$childTail.$mdOpenMenu();
        });
        $scope.$on('dragEnd', function() {
            console.log("dragEnd");
            ctrl.drop_over_index = -1;
            $timeout(function() {
                ctrl.dragging = false;
                $mdMenu.hide();
                $scope.$apply();
            }, 400);
        });

        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        }

        this.closeMenu = function() {
            console.log("closeMenu");
            $mdMenu.hide();
        }
    }])
    //directive for button
    .directive('fancyBtn', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.append('<span class="lines top"></span><span class="lines right"></span><span class="lines bottom"></span><span class="lines left"></span>');
            }
        }
    })
    .directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 5) {
                    scope.boolScrolled = true;
                } else {
                    scope.boolScrolled = false;
                }
                scope.$apply();
            });
        };
    })
/*    .directive('revealOnScroll', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var list;
                setTimeout(function () {
                    list = element.children();
                });

                angular.element(window).on('scroll', function () {
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].getBoundingClientRect().top <= window.innerHeight * 0.75 && list[i].getBoundingClientRect().top > 0) {
                            angular.element(list[i]).addClass('reveal-it');
                        }
                    }
                })
            }
        }
    });*/

;
