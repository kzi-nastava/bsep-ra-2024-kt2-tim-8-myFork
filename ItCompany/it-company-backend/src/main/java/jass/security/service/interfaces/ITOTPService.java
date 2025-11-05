package jass.security.service.interfaces;



import java.io.FileOutputStream;
import java.io.IOException;

public interface ITOTPService {
      String generateSecretKey();
      String getGoogleAuthenticatorBarCode(String secretKey, String account, String issuer);
      byte[] createQRCode(String barCodeData) throws  IOException;
      public String getTOTPCode(String secretKey);
}
