package com.example.app;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Configurar el WebView para permitir contenido mixto
    WebView webView = (WebView) findViewById(R.id.webview);
    if (webView != null) {
      WebSettings webSettings = webView.getSettings();
      webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
    }
  }
}

