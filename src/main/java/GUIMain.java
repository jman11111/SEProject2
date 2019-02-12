import javax.swing.*;
import java.awt.*;

public class GUIMain {

    private static void createAndShowGUI() {
        JFrame.setDefaultLookAndFeelDecorated(true);

        //basically the window
        JFrame frame = new JFrame("Twitter Search");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.setPreferredSize(new Dimension(300, 200));

        JPanel tweetpnl = new JPanel();
        tweetpnl.setLayout(new BoxLayout(tweetpnl, BoxLayout.PAGE_AXIS));
        tweetpnl.setBorder(BorderFactory.createEmptyBorder(0,10,10,10));

        //textfield for tweets
        JTextField tweetbar = new JTextField();

        JPanel tweetbtns = new JPanel();
        tweetbtns.setLayout(new BoxLayout(tweetbtns, BoxLayout.LINE_AXIS));
        tweetbtns.setBorder(BorderFactory.createEmptyBorder(0,10,10,10));

        JButton tweetbutton = new JButton("Get similar tweets");

        tweetpnl.add(tweetbar);
        tweetbtns.add(tweetbutton);
        Container contentPane = frame.getContentPane();
        contentPane.add(tweetpnl, BorderLayout.CENTER);
        contentPane.add(tweetbtns, BorderLayout.PAGE_END);
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {

        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}
