import javax.swing.*;
import java.awt.*;

public class GUIMain {

    private static void createAndShowGUI() {
        JFrame.setDefaultLookAndFeelDecorated(true);

        //basically the window
        JFrame frame = new JFrame("Twitter Search");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.setPreferredSize(new Dimension(400, 300));

        /* Panel for putting in tweet to be analyzed*/
        JPanel tweetpnl = new JPanel();
        tweetpnl.setLayout(new BoxLayout(tweetpnl, BoxLayout.PAGE_AXIS));
        tweetpnl.setBorder(BorderFactory.createEmptyBorder(0,10,10,10));

        JLabel hehe = new JLabel("Tweet something:   ");
        JTextField tweetbar = new JTextField();

        // Panel for dsiplaying similar tweets to user
        JPanel similartweets = new JPanel();
        similartweets.setLayout(new BoxLayout(similartweets, BoxLayout.PAGE_AXIS));

        JLabel descriptor = new JLabel("Similar Tweets:     ");
        JTextPane tweetsfound = new JTextPane();

        // Panel for options when trying to find similar tweets
        JPanel options = new JPanel();
        options.setLayout(new BoxLayout(options, BoxLayout.PAGE_AXIS));

        JLabel optiondesc = new JLabel("Filter by:  ");
        JButton mentionbutton = new JButton("Mention");
        JButton topicbutton = new JButton("Topic");
        JButton urlbutton = new JButton("URL");

        // Panel for button that accepts tweet in textbox
        JPanel tweetbtn = new JPanel();
        tweetbtn.setLayout(new BoxLayout(tweetbtn, BoxLayout.LINE_AXIS));
        tweetbtn.setBorder(BorderFactory.createEmptyBorder(0,10,10,10));

        JButton tweetbutton = new JButton("Get similar tweets");

        tweetpnl.add(hehe);
        tweetpnl.add(tweetbar);
        options.add(optiondesc);
        options.add(mentionbutton);
        options.add(topicbutton);
        options.add(urlbutton);
        similartweets.add(descriptor);
        similartweets.add(tweetsfound);
        tweetbtn.add(tweetbutton);
        Container contentPane = frame.getContentPane();
        contentPane.add(tweetpnl, BorderLayout.LINE_START);
        contentPane.add(options, BorderLayout.CENTER);
        contentPane.add(similartweets, BorderLayout.LINE_END);
        contentPane.add(tweetbtn, BorderLayout.PAGE_END);
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
