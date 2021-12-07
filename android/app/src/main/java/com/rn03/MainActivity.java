package com.gamestore;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

@@ -12,4 +13,9 @@
  protected String getMainComponentName() {
    return "RN03";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}