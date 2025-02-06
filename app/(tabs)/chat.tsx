import { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TextInput, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/hooks/useTheme';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const { colors } = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const router = useRouter();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://192.168.115.99:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3.2:latest',
          prompt: input.trim(),
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      let assistantMessage = { role: 'assistant', content: '' };

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.trim() === '') continue;
          
          try {
            const parsedChunk = JSON.parse(line);
            assistantMessage.content += parsedChunk.response;
            
            setMessages(prev => [
              ...prev.slice(0, -1),
              { ...assistantMessage }
            ]);
          } catch (e) {
            console.error('Error parsing chunk:', e);
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error connecting to the AI. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#151718' : 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#2D3133' : '#dce5dc',
    },
    backButton: {
      marginRight: 16,
    },
    messagesContainer: {
      flex: 1,
      padding: 16,
    },
    message: {
      padding: 12,
      borderRadius: 12,
      marginBottom: 8,
      maxWidth: '80%',
    },
    userMessage: {
      backgroundColor: '#638863',
      alignSelf: 'flex-end',
    },
    assistantMessage: {
      backgroundColor: isDark ? '#2D3133' : '#dce5dc',
      alignSelf: 'flex-start',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: isDark ? '#2D3133' : '#dce5dc',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: 12,
      borderRadius: 20,
      backgroundColor: isDark ? '#2D3133' : '#dce5dc',
      color: isDark ? 'white' : 'black',
      marginRight: 8,
    },
    sendButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#638863',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <IconSymbol name="chevron.left" size={24} color={colors.text} />
        </Pressable>
        <ThemedText size="lg" weight="bold">Chat with AI</ThemedText>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.role === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <ThemedText
              style={{ color: message.role === 'user' ? 'white' : undefined }}
            >
              {message.content}
            </ThemedText>
          </View>
        ))}
        {isLoading && (
          <ActivityIndicator style={{ marginTop: 10 }} color="#638863" />
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          placeholderTextColor={isDark ? '#666' : '#999'}
          multiline
        />
        <Pressable style={styles.sendButton} onPress={sendMessage}>
          <IconSymbol name="arrow.up" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
} 