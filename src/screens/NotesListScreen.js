import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function NotesListScreen({ navigation }) {

    const notes = []

    const confirmDelete = (id) => {

    };

    return (
        <View style={styles.container}>
            {notes.length === 0 ? (
                <Text style={styles.emptyText}>No notes yet. Tap + to add.</Text>
            ) : (
                <FlatList
                    data={notes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.noteCard}
                            onPress={() => navigation.navigate('NoteEditor', { note: item })}
                        >
                            <View style={styles.noteHeader}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                                    <Text style={styles.delete}>🗑️</Text>
                                </TouchableOpacity>
                            </View>
                            <Text numberOfLines={2}>{item.content}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => navigation.navigate('NoteEditor')}
            >
                <Text style={styles.addText}>＋</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
     addBtn: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: '#007AFF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    addText: { fontSize: 28, color: '#fff' },
      emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { marginTop: 10, fontSize: 16, color: '#888', textAlign: 'center' },


});