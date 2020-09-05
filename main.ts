scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 d d d d d 2 . . . . . 
    . . . . 2 d 1 d 1 d 2 . . . . . 
    . . . . 2 d d d d d 2 . . . . . 
    . . . . 2 d d 1 d d 2 . . . . . 
    . . . . 2 d d d d d 2 . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . 2 . . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101040202020202020202020201020202010101010201010101010102010201020101020102010202020202020102010201010201020102010101010101020102010102010201020202020202020201020101020202010101010101010101010201010201020202020202020102020202010102010101010102020201020202020101020102020201020202010202020201010201020102010101010101010101010102010201020102020202020202020101020102010201020101010101010201010202020102010201020202020102010102020102020202020202020201020201010101010101010101010101010103`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . 2 . . . 2 
    2 2 2 . 2 2 2 2 2 2 . 2 . 2 . 2 
    2 . 2 . 2 . . . . . . 2 . 2 . 2 
    2 . 2 . 2 . 2 2 2 2 2 2 . 2 . 2 
    2 . 2 . 2 . . . . . . . . 2 . 2 
    2 . . . 2 2 2 2 2 2 2 2 2 2 . 2 
    2 . 2 . . . . . . . 2 . . . . 2 
    2 . 2 2 2 2 2 . . . 2 . . . . 2 
    2 . 2 . . . 2 . . . 2 . . . . 2 
    2 . 2 . 2 . 2 2 2 2 2 2 2 2 2 2 
    2 . 2 . 2 . 2 . . . . . . . . 2 
    2 . 2 . 2 . 2 . 2 2 2 2 2 2 . 2 
    2 . . . 2 . 2 . 2 . . . . 2 . 2 
    2 . . 2 . . . . . . . . . 2 . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.chestClosed,sprites.dungeon.stairWest], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
