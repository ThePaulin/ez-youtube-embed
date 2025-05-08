import React from "react";

export interface IFrameProps extends React.HTMLAttributes<HTMLIFrameElement> {
  url: string;
  width?: string;
  height?: string;
  title?: string;
  allow?: string;
  frameBorder?: string;
  name?: string;
  sandbox?: string;
  srcDoc?: string;
  loading?: 'eager' | 'lazy';
  [key: string]: any;
  // Add other iframe-specific attributes as needed
}



/**
* @param url is the original video url as is
* @param ...props is any prop compatible with HTML iframe tag
* */
export function YTEmbed({...props} : IFrameProps) {
  
  if (!props.url) return;

  const vidId= props.url?.split("/")?.pop()?.split("?v=")[1].split("&")[0];
  const iframeUrl = 'https://www.youtube.com/embed/' + vidId;

  return (
    <iframe 
    src={iframeUrl} 
    title={props?.title || "YouTube video player"} 
    frameBorder={props?.frameBorder || "0"}
    allow={props.allow || "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" }
    referrerPolicy={props?.referrerPolicy || "strict-origin-when-cross-origin"}
    {...props}
    data-testid="yt-embed"
    id="yt-embed"
    />
  )
  
}

