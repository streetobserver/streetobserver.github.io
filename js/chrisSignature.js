  var defaultStyle = 'background-color: white; color: black;font-size: 9pt;'
  var invDfStyle = 'background-color: black; color: white;font-size: 9pt;'

  var chris =
  ["      %cstreetobserver.org Developed by",
    "%c◢█▇▅  chris   %c▅▆▅▃▂ %c ▃▄▅ dwatow.github.io",
   "%c▋%c▊     %c▊  %c▎%c▏  %c▋%c▋%c▆▇▋%c▎  %c▎%c▊  %c◢▆▅▄",
   "%c▊%c▌     %c▋  %c▌%c▎  %c▊%c▌  %c▍%c▏  %c▍%c▋  %c▍%c     ",
   "%c ▍     %c▊▃▃%c▋%c▏  %c▉%c▍%c▅▆▇%c   %c▎%c▌  %c▆▅▄%c◣",
   " %c▄▅▆%c   %c▍  %c▊%c    %c▎  ◣  %c▄▅▆%c  ▃▄▅◤"]

   var style = [defaultStyle,
      defaultStyle,defaultStyle,defaultStyle,
      invDfStyle, defaultStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle,defaultStyle,
      invDfStyle, defaultStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle,invDfStyle, defaultStyle,
      defaultStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle, invDfStyle, defaultStyle,invDfStyle, defaultStyle,invDfStyle, defaultStyle,
      invDfStyle, defaultStyle, defaultStyle, invDfStyle, defaultStyle, defaultStyle, invDfStyle, defaultStyle
    ]

  console.log(chris.join('\n'), ...style)
