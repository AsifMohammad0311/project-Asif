package introduction;

public class Java {

//	public static void main(String[] args) {
//		int number1=100;
//		int number2=79;
//		Addition(number1,number2);
//		subtraction(number1,number2);
//		multiplication(number1,number2);
//		division(number1,number2);
//		modulus(number1,number2);
//		
//	
//	}
//	 public static void Addition(int num1,int num2) {
//		 System.out.println("The Addition is "+(num1+num2));
//	 }
//	 public static void subtraction(int num1,int num2) {
//		 System.out.println("The subtraction is "+(num1-num2));
//	 }
//	 public static void multiplication(int num1,int num2) {
//		 System.out.println("The multiplication is "+(num1*num2));
//	 }
//	 public static void division(int num1,int num2) {
//		 System.out.println("The division is "+(num1/num2));
//	 }
//	 public static void modulus(int num1,int num2) {
//		 System.out.println("The modulus is "+(num1%num2));
//	 }
	
		   public static void main(String args[]){
		      int temp, size;
		      int array[] = {1, 23, 5,6,4,32,6,7,8};
		      size = array.length;

		      for(int i = 0; i<size; i++ ){
		         for(int j = i+1; j<size; j++){

		            if(array[i]>array[j]){
		               temp = array[i];
		               array[i] = array[j];
		               array[j] = temp;
		            }
		         }
		      }
		      System.out.println(array[size-2]);
		   }

	 
}
